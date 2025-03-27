import React from "react";
import { Dumbbell } from "lucide-react"; // Or use FaDumbbell from react-icons/fa if preferred

const Hobbies = () => (
  <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
    <div className="flex flex-row justify-center md:justify-start">
      <h1 className="flex items-center gap-2 font-bold py-2 mb-4 text-3xl text-center md:text-left">
        <Dumbbell className="text-blue-400 mt-1" size={22} />
        Hobbies
      </h1>
    </div>
  </div>
);

export default Hobbies;
