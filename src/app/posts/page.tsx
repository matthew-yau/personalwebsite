"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 pb-16 overflow-hidden z-10">
      {/* Background (optional blur if you want to match homepage) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Blog Header */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
          Blog Posts
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Insights, reflections, and notes — coming soon!
        </p>
      </div>

      {/* Placeholder Posts */}
      <div className="w-full max-w-xl px-4 text-center text-gray-500">
        <p className="italic text-sm">No posts yet — stay tuned for updates.</p>
      </div>
    </div>
  );
}
