import React from "react";
import { Home, Book, Briefcase, Folder, Heart, Pen } from "lucide-react"; // added missing icons

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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-4 sm:py-8">
      <div className="flex flex-col md:flex-row w-full max-w-[52rem] h-full md:h-[700px] overflow-hidden rounded-2xl shadow-xl bg-gray-800">
        {/* Sidebar */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto bg-gray-700 p-2 md:p-4 gap-2 md:space-y-4 md:w-26 gap-4 w-full justify-center md:justify-start">
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
          <SidebarButton
            label="Hobbies"
            icon={<Heart size={20} />}
            active={activeSection === "Hobbies"}
            onClick={() => handleSidebarClick("Hobbies")}
          />
          <SidebarButton
            label="Blog"
            icon={<Pen size={20} />}
            active={activeSection === "Blog"}
            onClick={() => handleSidebarClick("Blog")}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-inner min-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
