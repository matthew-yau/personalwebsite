import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
    <div className="flex flex-row justify-center md:justify-start">
      <h1 className="flex items-center gap-2 font-bold py-2 mb-4 text-3xl text-center md:text-left">
        <Briefcase className="text-blue-400 mt-1" size={22} />
        Experience
      </h1>
    </div>
    {/* Corpy & Co. */}
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
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
              <h2 className="text-lg font-semibold">AI Engineer Intern</h2>
              <p className="text-sm text-gray-400">📍Tokyo, Japan — Remote</p>
            </div>
          </a>
        </div>
        <p className="text-sm text-gray-300 sm:text-right">
          May 2024 — Nov 2024
        </p>
      </div>
      <ul className="mt-3 text-sm list-disc pl-5 text-gray-300">
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
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
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
            />
            <div>
              <h2 className="text-lg font-semibold">Vacationer</h2>
              <p className="text-sm text-gray-400">
                📍Melbourne, Australia — Onsite
              </p>
            </div>
          </a>
        </div>
        <p className="text-sm text-gray-300 sm:text-right">
          Nov 2024 — Feb 2025
        </p>
      </div>
      <ul className="mt-3 text-sm list-disc pl-5 text-gray-300">
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
  </div>
);

export default Experience;
