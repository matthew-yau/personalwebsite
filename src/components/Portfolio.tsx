"use client";

import React, { useState } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import Home from "@/components/sections/Home";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSidebarClick = (section: string) => {
    setActiveSection(section);
  };

  let sectionContent;
  switch (activeSection) {
    case "Education":
      sectionContent = <Education />;
      break;
    case "Experience":
      sectionContent = <Experience />;
      break;
    case "Projects":
      sectionContent = <Projects />;
      break;
    case "Home":
    default:
      sectionContent = <Home />;
  }

  return (
    <SidebarLayout
      activeSection={activeSection}
      handleSidebarClick={handleSidebarClick}
    >
      {sectionContent}
    </SidebarLayout>
  );
};

export default Portfolio;
