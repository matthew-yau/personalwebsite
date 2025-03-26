"use client";

import React, { useState } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Education Section
const Education = () => (
  <div>
    <div className="mb-6 pb-4 border-b border-gray-600">
      <h2 className="text-lg font-semibold">John Monash Science School</h2>
      <p className="text-sm text-blue-400">
        Victorian Certificate of Education (VCE)
      </p>
      <p className="text-sm">2017 – 2019</p>
      <p className="mt-2 text-sm leading-relaxed">
        Completed VCE at John Monash Science School, undertaking the units
        English, Japanese as a Second Language, Mathematical Methods, Specialist
        Mathematics, Economics and Chemistry achieving a result within the top
        2% of the state.
      </p>
    </div>

    <div className="mb-6 pb-4 border-b border-gray-600">
      <h2 className="text-lg font-semibold">Monash University</h2>
      <p className="text-sm text-blue-400">
        Bachelor of Engineering (Honours) & Bachelor of Commerce
      </p>
      <p className="text-sm">2020 – 2021 (Discontinued)</p>
      <p className="mt-2 text-sm leading-relaxed">
        Pursued a double degree in Engineering and Commerce at Monash University
        before transitioning out of the Engineering program.
      </p>
    </div>

    <div className="mb-6 pb-4 border-b border-gray-600">
      <h2 className="text-lg font-semibold">Monash University</h2>
      <p className="text-sm text-blue-400">Diploma of Languages in Japanese</p>
      <p className="text-sm">2021 – 2024 (Completed)</p>
      <p className="mt-2 text-sm leading-relaxed">
        Enrolled in and completed a Diploma of Languages with a major in
        Japanese, enhancing proficiency in reading, writing, and speaking.
        Undertook an exchange semester at The University of Tokyo from September
        2022 to March 2023.
      </p>
      <p className="italic mt-2 text-sm leading-relaxed">
        Notable certifications: JLPT N2 (achieved December 2023)
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">Monash University</h2>
      <p className="text-sm text-blue-400">
        Bachelor of Computer Science & Bachelor of Commerce (Specializing in
        Data Science and Finance)
      </p>
      <p className="text-sm">2021 – 2025 (Ongoing)</p>
      <p className="mt-2 text-sm leading-relaxed">
        Currently pursuing a dual degree in Computer Science and Commerce,
        specializing in Data Science and Finance.
      </p>
    </div>
  </div>
);

// Experience Section
const Experience = () => (
  <div>
    <h1 className="text-xl font-bold">Experience</h1>
    <p>Details about my experience...</p>
  </div>
);

// Default Home Section
const Home = () => (
  <div>
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Left: Profile Image + Name */}
      <div className="flex flex-col items-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="rounded-xl w-48 h-48 object-cover shadow-md"
        />
        <h1 className="text-2xl font-bold mt-2 text-center">Matthew Yau</h1>
      </div>

      {/* Right: Degree, Location, Links */}
      <div className="flex-1">
        <p className="mt-2 text-blue-400 font-medium">
          Final Year Computer Science and Finance Student at Monash University
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
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <div className="text-left mt-4">
      <p className="text-sm leading-relaxed">
        With a background in data science and finance, I’ve developed a strong
        passion for capital markets — particularly the underlying statistics and
        mathematics that drive both market efficiency and inefficiency.
      </p>
      <p className="text-sm leading-relaxed mt-2">
        My interests lie in applying statistical and machine learning techniques
        to financial markets. Recently, I’ve been exploring reinforcement
        learning approaches to hedge exotic derivatives, as a more adaptive
        alternative to traditional delta hedging.
      </p>
      <p className="text-sm leading-relaxed mt-2">
        Outside of work and study, I’m an avid weightlifter and make a conscious
        effort to touch grass.
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
  </div>
);

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
