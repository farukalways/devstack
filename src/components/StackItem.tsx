import React from "react";
import type { TechItem } from "../utils/fetchTechData";

interface StackItemProps {
  item: TechItem;
  onRemove: (techId: string) => void;
}

const StackItem: React.FC<StackItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-lg shadow-sm hover:border-red-200 transition">
      <div className="flex items-center gap-3">
        <img
          src={item.icon}
          alt={item.name}
          className="w-7 h-7 object-contain"
        />
        <div>
          <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
          <p className="text-[10px] text-gray-500">{item.category}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500 hover:bg-red-50 w-6 h-6 rounded-full flex items-center justify-center transition font-bold text-sm"
        title="Remove from stack"
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;
