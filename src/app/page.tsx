import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Book,
  Briefcase,
  BadgeCheck,
  Folder,
  Sparkles,
  Mail,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
/* import { Button } from "@/components/ui/button"; */

const SidebarButton = ({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={`flex flex-col items-center text-xs gap-1 p-2 rounded-xl w-full ${
      active
        ? "bg-gray-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-600"
    } cursor-pointer transition-all`}
  >
    {icon}
    <span className="text-[10px]">{label}</span>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="flex w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-gray-800">
        {/* Sidebar */}
        <div className="w-20 bg-gray-700 p-4 flex flex-col items-center space-y-4">
          <SidebarButton label="Home" icon={<Home size={18} />} active />
          <SidebarButton label="Education" icon={<Book size={18} />} />
          <SidebarButton label="Experience" icon={<Briefcase size={18} />} />
          <SidebarButton
            label="Certifications"
            icon={<BadgeCheck size={18} />}
          />
          <SidebarButton label="Projects" icon={<Folder size={18} />} />
          <SidebarButton label="Skills" icon={<Sparkles size={18} />} />
          <SidebarButton label="Contact" icon={<Mail size={18} />} />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <Card className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <CardContent className="flex flex-col gap-6">
              {/* Top Section */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left: Profile Image + Name */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="rounded-xl w-48 h-48 object-cover shadow-md"
                  />
                  <h1 className="text-2xl font-bold mt-2 text-center">
                    Matthew Yau
                  </h1>
                </div>

                {/* Right: Degree, Location, Links */}
                <div className="flex-1">
                  <p className="mt-2 text-blue-400 font-medium">
                    Final Year Computer Science and Finance Student at Monash
                    University
                  </p>
                  <p className="text-sm mt-6 mb-3">📍 Melbourne, Australia</p>
                  <div className="flex gap-4 pl-1">
                    <a
                      href="https://www.linkedin.com/in/matthewwyau/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
                    </a>
                    <a
                      href="https://github.com/matthew-yau"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="text-left">
                <p className="text-sm leading-relaxed">
                  With a background in data science and finance, I’ve developed
                  a strong passion for capital markets — particularly the
                  underlying statistics and mathematics that drive both market
                  efficiency and inefficiency.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  My interests lie in applying statistical and machine learning
                  techniques to financial markets. Recently, I’ve been exploring
                  reinforcement learning approaches to hedge exotic derivatives,
                  as a more adaptive alternative to traditional delta hedging.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Outside of work and study, I’m an avid weightlifter and make a
                  conscious effort to touch grass.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    "Quantitative Finance",
                    "Data Science",
                    "Statistics",
                    "Software Development",
                  ].map((label) => (
                    <span
                      key={label}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
