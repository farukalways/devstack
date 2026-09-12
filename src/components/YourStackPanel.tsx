import React from "react";
import type { TechItem } from "../utils/fetchTechData";
import StackItem from "./StackItem";
// import StackItem from "./StackItem";

interface YourStackPanelProps {
  selectedTechs: TechItem[];
  onRemove: (techId: string) => void;
  onRemoveAll: () => void;
}

const YourStackPanel: React.FC<YourStackPanelProps> = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sticky top-20">
      {/* স্ট্যাক কার্ড হেডার */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <div className="gap-2">
          <h3 className="text-lg font-bold text-gray-800">Your Stack</h3>
          <span className=" text-gray-400 font-semibold text-sm">
            {selectedTechs.length} Technology Selected
          </span>
        </div>
      </div>

      {/* সিলেক্ট করা টেকনোলজির মিনি কার্ড লিস্ট */}
      {selectedTechs.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm font-medium">
          No technologies added yet. Click "Add Now" to build your stack.
        </div>
      ) : (
        <div className="space-y-3 max-h-125 overflow-y-auto pr-1">
          {selectedTechs.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full text-lg font-semibold text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out border border-red-500 text-center py-2.5 rounded-xl active:scale-95"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStackPanel;
