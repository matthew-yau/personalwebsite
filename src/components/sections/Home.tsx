import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => (
  <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
      {/* Profile section */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="rounded-xl w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-3 text-white">Matthew Yau</h1>
      </div>

      {/* Info section */}
      <div className="flex flex-col gap-4 w-full md:w-[28rem]">
        {/* Degree Info */}
        <div className="bg-gray-800 rounded-xl p-4 shadow text-white text-center">
          <p className="text-blue-400 font-semibold text-base sm:text-lg">
            Computer Science and Finance Student
          </p>
        </div>

        {/* University + Location */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 w-full">
          {/* University Box */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-md h-12 flex gap-2 justify-center items-center text-white text-sm w-full sm:w-1/2 text-center sm:text-left">
            <FaUniversity className="text-blue-400" />
            <span>Monash University</span>
          </div>

          {/* Location Box */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-md h-12 flex gap-2 justify-center items-center text-white text-sm w-full sm:w-1/2 text-center sm:text-left">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Melbourne, Australia</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-4 p-1 justify-center sm:justify-start pt-2">
          <a
            href="https://www.linkedin.com/in/matthewwyau/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://github.com/matthew-yau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>

    {/* Bio section */}
    <div className="text-left mt-6 text-sm text-gray-300 leading-relaxed">
      <p>
        With a background in data science and finance, I’ve developed a strong
        passion for capital markets — particularly the underlying statistics and
        mathematics that drive both market efficiency and inefficiency.
      </p>
      <p className="mt-3">
        My interests lie in applying statistical and machine learning techniques
        to financial markets. Recently, I’ve been exploring reinforcement
        learning approaches to hedge exotic derivatives, as a more adaptive
        alternative to traditional delta hedging.
      </p>
      <p className="mt-3">
        Outside of work and study, I’m an avid weightlifter and make a conscious
        effort to touch grass.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {[
          "Quantitative Finance",
          "Data Science",
          "Statistics",
          "Software Development",
        ].map((label) => (
          <span
            key={label}
            className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm shadow"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
