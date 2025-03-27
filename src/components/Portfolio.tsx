"use client";

import React, { useState } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import Home from "@/components/sections/Home";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
import Blog from "@/components/sections/Blog";

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
    case "Hobbies":
      sectionContent = <Hobbies />;
      break;
    case "Blog":
      sectionContent = <Blog />;
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
