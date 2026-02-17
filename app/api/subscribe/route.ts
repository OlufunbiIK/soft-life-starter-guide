export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }
    //
    // MailerLite API configuration
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Optional: specific group ID

    if (!MAILERLITE_API_KEY) {
      console.error("MailerLite API key is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // MailerLite API endpoint (v2)
    const endpoint = "https://connect.mailerlite.com/api/subscribers";

    // Prepare subscriber data
    const subscriberData = {
      email: email,
      fields: {
        name: name,
      },
      groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
    };

    // Make request to MailerLite
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(subscriberData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MailerLite API error:", data);

      // Handle specific error cases
      if (response.status === 400 && data.message?.includes("already exists")) {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 400 },
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed!",
        subscriber: data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
