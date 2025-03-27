"use client";

import React, { useState } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";


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
        Mathematics, Economics and Chemistry.
      </p>
    </div>

    <div className="mb-6 pb-4 border-b border-gray-600">
      <h2 className="text-lg font-semibold">Monash University</h2>
      <p className="text-sm text-blue-400">
        Bachelor of Engineering (Honours) & Bachelor of Commerce
      </p>
      <p className="text-sm">2020 (Discontinued)</p>
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
    <h1 className="text-xl font-bold mb-4">Experience</h1>

    {/* Corpy & Co. */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {" "}
          <a
            href="https://corpy.co.jp/en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/images/corpyco.jpg"
              alt="Corpy & Co."
              className="w-10 h-10 object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">
                <span>AI Engineer Intern</span>
              </h2>
              <p className="text-sm text-gray-400">📍Tokyo, Japan — Remote</p>{" "}
              {/* Location under job title */}
            </div>
          </a>
        </div>
        <p className="text-sm text-right">May 2024 — Nov 2024</p>
      </div>
      <ul className="mt-2 text-sm list-disc pl-5">
        <li>
          Improved data processing scripts by over 30% to automate the cleansing
          and processing of over 1000 terabytes of image data efficiently.
        </li>
        <li>
          Developed and containerized machine learning models using Docker,
          seamlessly integrated with Amazon S3 for scalable data storage and
          management.
        </li>
        <li>
          Collaborated closely with clients throughout all project phases,
          ensuring solutions met their expectations.
        </li>
        <li>
          Developed and enforced quality assurance protocols to ensure
          consistent and reliable project outcomes.
        </li>
      </ul>
    </div>

    {/* PwC */}
    <div className="mb-6 pb-4 border-gray-600">
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center gap-3">
          {" "}
          <a
            href="https://www.pwc.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/images/pwc.png"
              alt="PwC"
              className="w-10 h-10 object-contain"
            />{" "}
            {/* Replace with PwC logo */}
            <div>
              <h2 className="text-lg font-semibold">
                <span>Vacationer</span>
              </h2>
              <p className="text-sm text-gray-400">
                📍Melbourne, Australia — Onsite
              </p>{" "}
            </div>
          </a>
        </div>
        <p className="text-sm text-right">Nov 2024 — Feb 2025</p>
      </div>{" "}
      <ul className="mt-2 text-sm list-disc pl-5">
        <li>
          Leveraged LLMs to classify tangible assets based on key attributes,
          reducing asset categorization time by 40% and improving model
          consistency for valuations worth over $100 million.
        </li>
        <li>
          Implemented an OpenCV-based solution to extract and process asset data
          from PDFs and scanned reports, automating the population of Excel
          asset registers and reducing manual data entry time by 50%.
        </li>
        <li>
          Refined existing discounted cash flow and market-based valuation
          models to accurately date and value client assets, improving valuation
          accuracy by 3%.
        </li>
      </ul>
    </div>

    {/* Morgan Stanley - Incoming Technology Intern */}
    {/* <div>
      <div className="flex items-center justify-between">
        {" "}
        <a
          href="https://www.morganstanley.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="flex items-center gap-3">
            <img
              src="/images/morganstanley.jpg"
              alt="Morgan Stanley"
              className="w-10 h-10 object-contain"
            />{" "}
            <div>
              <h2 className="text-lg font-semibold">
                <span>Incoming Summer Analyst</span>
              </h2>
              <p className="text-sm text-gray-400">📍Tokyo, Japan — Onsite</p>{" "}
            </div>
          </div>
        </a>
        <p className="text-sm text-right">Jun 2025 — Aug 2025</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed">Technology arm.</p>
    </div> */}
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web");

  return (
    <div>
      <h1 className="text-xl font-bold mt-4">Projects</h1>

      {/* Tabs */}
      <div className="flex gap-2 mt-4 mb-6 border-b border-gray-700">
        {["Web", "Data Science"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content for each tab */}
      {activeTab === "Web" && (
        <div className="mb-6 pb-4 border-gray-600 border-b">
          {/* Web Project Card */}
          <div className="flex font-bold items-center mt-2 justify-between">
            <div className="text-l text-blue-500 hover:underline">
              <a
                href="https://www.monashjapaneseclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.monashjapaneseclub.com
              </a>
            </div>
            <div className="italic text-gray-200">(2025)</div>
          </div>
          <div className="mt-2 text-sm leading-relaxed">
            <div>
            As the IT director of the Monash Japanese Club, I was tasked with rebuilding their website to attract both members and sponsors.
            </div>
            <div className="font-bold mt-2">Key metrics:</div>
            <ul className="list-disc list-inside text-sm text-gray-200">
              <li>Utilised causal inference methods to attribute a year-on-year membership increase of 30% from 380 to 500 active members.</li>
              <li>Developed a proof of concept design with Figma and developed it with Next.js.</li>
            </ul>

          </div>
          <div className="flex gap-2 mt-2">
            <span className="inline-flex items-center justify-center bg-blue-500 text-white p-2 rounded-full">
              <FaReact size={20} />
            </span>
            <span className="inline-flex items-center justify-center bg-cyan-500 text-white p-2 rounded-full">
              <RiTailwindCssFill size={20} />
            </span>
            <span className="inline-flex items-center justify-center bg-[#3FCF8E] text-white p-2 rounded-full">
              <RiSupabaseFill size={20} />
            </span>
            <span className="inline-flex items-center justify-center bg-[#336791] text-white p-2 rounded-full">
              <DiPostgresql size={20} />
            </span>
          </div>
        </div>
      )}

      {activeTab === "Data Science" && (
        <div className="border-b border-gray-600 mb-6 pb-4">
        <div className="justify-between flex font-bold">
        <div className="text-blue-500">
            Modelling the Australian Open With Monte Carlo Simulations
        </div>
        <div className="italic text-gray-200">(2024)</div>
        </div>
        <div className="text-sm text-gray-300 mt-2">
          In this project I explore the effects of various athlete attributes such as offensive rating, defensive rating, proneness to injury, and fatigue in performance at the Australian Open. The competition was simulated using Monte Carlo Simulations while combining Heuristics and Game Theory.
        </div>
        </div>
      )}
    </div>
  );
}

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
        <p className="text-sm mt-6 mb-3">📍Melbourne, Australia</p>
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
      break;
    case "Projects":
      sectionContent = <Projects />;
      break;
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
