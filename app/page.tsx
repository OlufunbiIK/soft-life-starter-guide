"use client";

import Image from "next/image";
import { useState } from "react";

export default function SoftLifeLanding() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your MailerLite API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/coniferous-branches-ornament-stars.jpg')",
      }}
    >
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-serif text-[#7a6f5d]">MySoft_LifeHq</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex items-center justify-center min-h-[85vh] px-6 py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-12 animate-fade-in max-w-xl mx-auto lg:mx-0">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-serif text-[#5a4d3d] leading-tight">
                  Build a Soft Life
                  <br />
                  Without Burning Out
                </h2>

                <p className="text-xl text-[#7a6f5d] italic">
                  Download the{" "}
                  <span className="font-medium">
                    Soft Life Starter Blueprint
                  </span>
                  <br />
                  and begin{" "}
                  <span className="font-medium">your Bloom Daily journey.</span>
                </p>

                <p className="text-[#7a6f5d]">
                  Join 1000+ people choosing peace over pressure
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-5">
                {[
                  "Create routines that calm your mind",
                  "Build structure without pressure",
                  "Replace urgency with intention",
                  "Protect your energy without guilt",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg
                      className="w-7 h-7 text-[#d4a574] flex-shrink-0 mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-lg text-[#5a4d3d]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#e8dfd4] rounded-lg text-[#5a4d3d] placeholder-[#9c8d7c] focus:outline-none focus:border-[#d4a574] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#e8dfd4] rounded-lg text-[#5a4d3d] placeholder-[#9c8d7c] focus:outline-none focus:border-[#d4a574] transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#d4a574] hover:bg-[#c99563] text-white text-lg font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Me The Guide"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-700 text-center">
                    Success! Check your email for the guide.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-700 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Right - Book Display */}
            <div className="relative animate-float">
              <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Book mockup */}
                <div>
                  <Image
                    src="/book-cover.png"
                    alt="Soft Life Starter Guide Book Cover"
                    width={600}
                    height={650}
                    className="w-full max-w-md mx-auto lg:mx-0"
                  />
                </div>
              </div>

              {/* Pampas grass decoration */}
              <div className="absolute -right-12 top-0 w-32 h-64 opacity-40">
                <div className="w-full h-full bg-gradient-to-b from-[#d4a574] to-transparent blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center space-y-12">
          <p className="text-2xl text-[#5a4d3d]">
            Join the{" "}
            <span className="font-serif italic text-[#d4a574]">
              Bloom Daily
            </span>{" "}
            Inner Circle & start living softly.
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-8">
            {[
              { icon: "🪷", title: "Find Balance", delay: "0s" },
              { icon: "📖", title: "Grow Mindfully", delay: "0.1s" },
              { icon: "❤️", title: "Bloom Daily", delay: "0.2s" },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-4 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="text-5xl filter grayscale opacity-60">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-[#5a4d3d]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
