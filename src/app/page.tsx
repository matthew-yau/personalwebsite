"use client";

import { Card } from "@/components/ui/card";
import { FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 pb-16 overflow-hidden z-10">
      {/* 🔹 Background Image with Blur + Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* 🔹 Profile Image */}
      <img
        src="/images/heen.gif"
        alt="Profile"
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover shadow-md mb-6"
      />

      {/* 🔹 Title Section */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
          Matthew Yau
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Welcome — explore my work and thoughts.
        </p>
      </div>

      {/* 🔹 Professional Link Cards */}
      <div className="w-full max-w-sm sm:max-w-md flex flex-col gap-4">
        <Card className="hover:shadow-md transition-all p-4 bg-white border border-gray-200">
          <Link href="/resume" className="flex items-center gap-4">
            <FileText className="text-blue-600" />
            <span className="text-gray-800 text-base font-medium">
              View My Resume
            </span>
          </Link>
        </Card>

        <Card className="hover:shadow-md transition-all p-4 bg-white border border-gray-200">
          <Link href="/posts" className="flex items-center gap-4">
            <BookOpen className="text-blue-600" />
            <span className="text-gray-800 text-base font-medium">
              Read My Posts
            </span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
