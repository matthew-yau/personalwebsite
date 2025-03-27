import React from "react";
import {
  Home,
  Book,
  Briefcase,
  BadgeCheck,
  Folder,
  Sparkles,
  Mail,
} from "lucide-react"; // Ensure icons are imported

const SidebarButton = ({
  label,
  icon,
  active = false,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void; // onClick for SidebarButton
}) => (
  <div
    className={`flex flex-col items-center text-xs gap-1 p-2 rounded-xl w-full ${
      active
        ? "bg-gray-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-600"
    } cursor-pointer transition-all`}
    onClick={onClick}
  >
    {icon}
    <span className="text-[10px]">{label}</span>
  </div>
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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-2xl h-[700px] overflow-hidden shadow-xl bg-gray-800">
        {/* Sidebar */}
        <div className="w-20 bg-gray-700 p-4 flex flex-col items-center space-y-4">
          <SidebarButton
            label="Home"
            icon={<Home size={18} />}
            active={activeSection === "Home"}
            onClick={() => handleSidebarClick("Home")}
          />
          <SidebarButton
            label="Education"
            icon={<Book size={18} />}
            active={activeSection === "Education"}
            onClick={() => handleSidebarClick("Education")}
          />
          <SidebarButton
            label="Experience"
            icon={<Briefcase size={18} />}
            active={activeSection === "Experience"}
            onClick={() => handleSidebarClick("Experience")}
          />
          <SidebarButton
            label="Certifications"
            icon={<BadgeCheck size={18} />}
            active={activeSection === "Certifications"}
            onClick={() => handleSidebarClick("Certifications")}
          />
          <SidebarButton
            label="Projects"
            icon={<Folder size={18} />}
            active={activeSection === "Projects"}
            onClick={() => handleSidebarClick("Projects")}
          />
          <SidebarButton
            label="Skills"
            icon={<Sparkles size={18} />}
            active={activeSection === "Skills"}
            onClick={() => handleSidebarClick("Skills")}
          />
          <SidebarButton
            label="Contact"
            icon={<Mail size={18} />}
            active={activeSection === "Contact"}
            onClick={() => handleSidebarClick("Contact")}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 p-0 h-full">
        <div className="h-full overflow-y-auto p-6">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg h-full">{children}</div>
        </div></div>
      </div>
    </div>
  );
};

export default SidebarLayout;
