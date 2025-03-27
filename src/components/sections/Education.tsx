import React from "react";
import { Book } from "lucide-react";

const Education = () => (
  <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
    <div className="flex flex-row justify-center md:justify-start">
      <h1 className="flex items-center gap-2 font-bold py-2 mb-4 text-3xl text-center md:text-left">
        <Book className="text-blue-400" size={22} />
        Education
      </h1>
    </div>
    {/* John Monash Science School */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <a
            href="https://jmss.vic.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/jmss.jpg"
              alt="John Monash Science School"
              className="w-20 h-20 object-contain rounded-xl hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition duration-200"
            />
          </a>
          <div>
            <div className="font-bold text-xl text-white">
              John Monash Science School
            </div>
            <p className="text-sm text-gray-400">2017 – 2019 (Completed)</p>
            <p className="text-sm text-blue-400">
              Victorian Certificate of Education (VCE)
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Completed VCE at John Monash Science School, undertaking the units
        English, Japanese as a Second Language, Mathematical Methods, Specialist
        Mathematics, Economics and Chemistry.
      </p>
    </div>
    {/* Monash Uni - Eng & Commerce */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <a
            href="https://www.monash.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/monash.png"
              alt="Monash University"
              className="w-20 h-20 object-contain rounded-xl hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition duration-200"
            />
          </a>
          <div>
            <div className="font-bold text-xl text-white">
              Monash University
            </div>
            <p className="text-sm text-gray-400">2020 (Discontinued)</p>
            <p className="text-sm text-blue-400">
              Bachelor of Engineering (Honours) & Bachelor of Commerce
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Pursued a double degree in Engineering and Commerce at Monash University
        before transitioning out of the Engineering program.
      </p>
    </div>
    {/* Monash Uni - Diploma of Languages */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <a
            href="https://www.monash.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/monash.png"
              alt="Monash University"
              className="w-20 h-20 object-contain rounded-xl hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition duration-200"
            />
          </a>
          <div>
            <div className="font-bold text-xl text-white">
              Monash University
            </div>
            <p className="text-sm text-gray-400">2021 – 2024 (Completed)</p>
            <p className="text-sm text-blue-400">
              Diploma of Languages in Japanese
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Enrolled in and completed a Diploma of Languages with a major in
        Japanese, enhancing proficiency in reading, writing, and speaking.
      </p>
      <p className="italic mt-2 text-sm leading-relaxed text-gray-300">
        Notable certifications: JLPT N2 (achieved December 2023)
      </p>
    </div>
    {/* The University of Tokyo - Exchange Semester */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          {" "}
          <a
            href="https://www.u-tokyo.ac.jp/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/utokyo.png"
              alt="The University of Tokyo"
              className="w-20 h-20 object-contain rounded-xl hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition duration-200"
            />
          </a>
          <div>
            <div className="font-bold text-xl text-white">
              The University of Tokyo
            </div>
            <p className="text-sm text-gray-400">2022 – 2023 (Completed)</p>
            <p className="text-sm text-blue-400">Exchange Semester</p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Undertook an exchange semester at The University of Tokyo from September
        2022 to March 2023.
      </p>
    </div>

    {/* Monash Uni - CS & Commerce */}
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <a
            href="https://www.monash.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/monash.png"
              alt="Monash University"
              className="w-20 h-20 object-contain rounded-xl hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition duration-200"
            />
          </a>
          <div>
            <div className="font-bold text-xl text-white">
              Monash University
            </div>
            <p className="text-sm text-gray-400">2021 – 2025 (Ongoing)</p>
            <p className="text-sm text-blue-400">
              Bachelor of Computer Science & Bachelor of Commerce
            </p>
            <p className="text-sm text-blue-400 italic">
              Specialising in Data Science and Finance
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Currently pursuing a double degree in Computer Science and Commerce.
      </p>
    </div>
  </div>
);

export default Education;
