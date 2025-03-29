import React from "react";
import { Home, Book, Briefcase, Folder } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SidebarButton = ({
  label,
  icon,
  active = false,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`group flex flex-col items-center justify-center p-1 w-18 h-14 sm:w-18 sm:h-18 rounded-lg transition-all duration-200
      ${active ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:bg-gray-600 hover:text-white"}
      focus:outline-none focus:ring-2 focus:ring-blue-400`}
  >
    <div className="text-xl">{icon}</div>
    <span className="text-[12px] leading-tight">{label}</span>
  </button>
);

const SidebarLayout = ({
  children,
  activeSection,
  handleSidebarClick,
}: {
  children: React.ReactNode;
  activeSection: string;
  handleSidebarClick: (section: string) => void;
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 text-white overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-[52rem] gap-4">
        {/* Sidebar: embedded on mobile, detached on md+ screens */}
        <div className="bg-gray-700 p-2 rounded-2xl shadow-lg flex flex-row md:flex-col items-center justify-center gap-4 h-auto md:h-[300px] w-full md:w-auto">
          <SidebarButton
            label="Home"
            icon={<Home size={20} />}
            active={activeSection === "Home"}
            onClick={() => handleSidebarClick("Home")}
          />
          <SidebarButton
            label="Education"
            icon={<Book size={20} />}
            active={activeSection === "Education"}
            onClick={() => handleSidebarClick("Education")}
          />
          <SidebarButton
            label="Experience"
            icon={<Briefcase size={20} />}
            active={activeSection === "Experience"}
            onClick={() => handleSidebarClick("Experience")}
          />
          <SidebarButton
            label="Projects"
            icon={<Folder size={20} />}
            active={activeSection === "Projects"}
            onClick={() => handleSidebarClick("Projects")}
          />
        </div>

        {/* Main content area */}
        <div className="flex-1 bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 h-[700px] overflow-y-auto">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-inner min-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
