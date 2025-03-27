"use client";

import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { Folder } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
      <div className="flex flex-row justify-center md:justify-start">
        <h1 className="flex items-center gap-2 font-bold py-2 mb-4 text-3xl text-center md:text-left">
          <Folder className="text-blue-400 mt-1" size={22} />
          Projects
        </h1>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mt-4 mb-6 border-b border-gray-700">
        {["Web Development", "Data Science"].map((tab) => (
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

      {/* Web Development Tab */}
      {activeTab === "Web Development" && (
        <div className="mb-6 pb-4 border-gray-600 border-b">
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
              As the IT director of the Monash Japanese Club, I was tasked with
              rebuilding their website to attract both members and sponsors.
            </div>
            <div className="font-bold mt-2">Key metrics:</div>
            <ul className="list-disc list-inside text-sm text-gray-200">
              <li>
                Utilised causal inference methods to attribute a year-on-year
                membership increase of 30% from 380 to 500 active members.
              </li>
              <li>
                Developed a proof of concept design with Figma and developed it
                with Next.js.
              </li>
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

      {/* Data Science Tab */}
      {activeTab === "Data Science" && (
        <div className="border-b border-gray-600 mb-6 pb-4">
          <div className="justify-between flex font-bold">
            <div className="text-blue-500">
              Modelling the Australian Open With Monte Carlo Simulations
            </div>
            <div className="italic text-gray-200">(2024)</div>
          </div>
          <div className="text-sm text-gray-300 mt-2">
            In this project I explore the effects of various athlete attributes
            such as offensive rating, defensive rating, proneness to injury, and
            fatigue in performance at the Australian Open. The competition was
            simulated using Monte Carlo Simulations while combining Heuristics
            and Game Theory.
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
