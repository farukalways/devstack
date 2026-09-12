import React from "react";
import type { TechItem } from "../utils/fetchTechData";

interface TechCardProps {
  tech: TechItem;
  isSelected: boolean;
  onAdd: (tech: TechItem) => void;
}

const TechCard: React.FC<TechCardProps> = ({ tech, isSelected, onAdd }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-5 flex flex-col justify-between transition-all duration-300 border-2 ${
        isSelected
          ? "border-red-500 shadow-red-100"
          : "border-gray-100 hover:shadow-lg"
      }`}
    >
      <div>
        {/* কার্ড হেডার */}
        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech.badge}
          </span>
        </div>

        {/* টেকনোলজির নাম ও ক্যাটাগরি */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">{tech.name}</h3>
        <span className="inline-block text-xs font-medium text-gray-500 mb-3">
          {tech.category}
        </span>

        {/* বিবরণ */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {tech.description}
        </p>
      </div>

      <div>
        {/* কার্ড ফুটার (ডিফিকাল্টি ও রেটিং) */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
            {tech.difficulty}
          </span>
          <span className="text-amber-500 font-bold flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>

        {/* Add Now বাটন */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 shadow-sm ${
            isSelected
              ? "bg-red-500 text-white cursor-not-allowed opacity-90"
              : "bg-[#DB2777] hover:bg-[#b30e58dc] text-white hover:shadow"
          }`}
        >
          {isSelected ? "Added" : "Add Now"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
