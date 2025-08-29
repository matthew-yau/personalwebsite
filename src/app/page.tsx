"use client";

import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Link from "next/link";
import DogWithParticles from "@/components/dawg";

export default function HomePage() {
  // const clientId = "153802";
  // const redirectUri = "http://localhost:3000/exchange_token";
  // const scope = "activity:read";

  // const loginUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=${scope}`;

  return (
    <div>
      {/* 🔹 Top Section: Strava Connect */}
      {/* <div className="flex justify-center mt-6">
        <a href={loginUrl}>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow">
            Connect with Strava
          </button>
        </a>
      </div> */}

      {/* 🔹 Main Content Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 pb-16 overflow-hidden z-10">
        {/* 🔹 Background Image with Blur + Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg.jpg"
            alt="Background"
            className="w-full h-full object-cover blur-xl scale-105"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
        </div>

        {/* 🔹 Profile Image */}
        <DogWithParticles />

        {/* 🔹 Title Section */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Matthew Yau
          </h1>
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

          {/* <Card className="hover:shadow-md transition-all p-4 bg-white border border-gray-200">
            <Link href="/posts" className="flex items-center gap-4">
              <BookOpen className="text-blue-600" />
              <span className="text-gray-800 text-base font-medium">
                Read My Posts
              </span>
            </Link>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
