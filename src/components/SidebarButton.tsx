import React from "react";

export const SidebarButton = ({
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
