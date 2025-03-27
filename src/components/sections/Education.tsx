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
    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-lg font-semibold">John Monash Science School</h2>
        <p className="text-sm text-gray-400">2017 – 2019 (Completed)</p>
      </div>
      <p className="text-sm text-blue-400">
        Victorian Certificate of Education (VCE)
      </p>
      <p className="mt-2 text-sm leading-relaxed">
        Completed VCE at John Monash Science School, undertaking the units
        English, Japanese as a Second Language, Mathematical Methods, Specialist
        Mathematics, Economics and Chemistry.
      </p>
    </div>

    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-lg font-semibold">Monash University</h2>
        <p className="text-sm text-gray-400">2020 (Discontinued)</p>
      </div>
      <p className="text-sm text-blue-400">
        Bachelor of Engineering (Honours) & Bachelor of Commerce
      </p>
      <p className="mt-2 text-sm leading-relaxed">
        Pursued a double degree in Engineering and Commerce at Monash University
        before transitioning out of the Engineering program.
      </p>
    </div>

    <div className="mb-6 pb-4 border-b border-gray-600">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-lg font-semibold">Monash University</h2>
        <p className="text-sm text-gray-400">2021 – 2024 (Completed)</p>
      </div>
      <p className="text-sm text-blue-400">Diploma of Languages in Japanese</p>

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
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-lg font-semibold">Monash University</h2>
        <p className="text-sm text-gray-400">2021 – 2025 (Ongoing)</p>
      </div>
      <p className="text-sm text-blue-400">
        Bachelor of Computer Science & Bachelor of Commerce
      </p>
      <p className="text-sm text-blue-400 italic">
        Specialising in Data Science and Finance
      </p>

      <p className="mt-2 text-sm leading-relaxed">
        Currently pursuing a double degree in Computer Science and Commerce.
      </p>
    </div>
  </div>
);

export default Education;
