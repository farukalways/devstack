import React, { useEffect, useState } from "react";
import { fetchTechData, type TechItem } from "../utils/fetchTechData";

const TechGrid: React.FC = () => {
  const [techList, setTechList] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Selected technologies dynamic state (Your Stack)
  const [selectedTechs, setSelectedTechs] = useState<TechItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchTechData();
        setTechList(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // অ্যাড করার হ্যান্ডলার
  const handleAddTech = (tech: TechItem) => {
    const isAlreadySelected = selectedTechs.some((item) => item.id === tech.id);
    if (!isAlreadySelected) {
      setSelectedTechs((prev) => [...prev, tech]);
    }
  };

  // একটি সিঙ্গেল আইটেম রিমুভ করার হ্যান্ডলার
  const handleRemoveTech = (techId: string) => {
    setSelectedTechs((prev) => prev.filter((item) => item.id !== techId));
  };

  // সব আইটেম একসাথে রিমুভ করার হ্যান্ডলার (Remove All)
  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-start flex-col gap-3 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      {/* লোডিং স্টেট */}
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading Technologies...
          </p>
        </div>
      )}

      {/* এরর স্টেট */}
      {error && (
        <div className="text-center text-red-500 font-medium py-10">
          Error: {error}
        </div>
      )}

      {/* মূল কন্টেন্ট লেআউট */}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* বামপাশের ৩ কলাম: টেকনোলজির গ্রিড */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {techList.map((tech) => {
              const isSelected = selectedTechs.some(
                (item) => item.id === tech.id,
              );

              return (
                <div
                  key={tech.id}
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
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {tech.name}
                    </h3>
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
                      onClick={() => handleAddTech(tech)}
                      disabled={isSelected}
                      className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 shadow-sm ${
                        isSelected
                          ? "bg-red-500 text-white cursor-not-allowed opacity-90"
                          : "bg-[#DB2777] hover:bg-[#b30e58dc] text-white hover:shadow"
                      }`}
                      //   bg-[#DB2777] hover:bg-[#be1963]
                    >
                      {isSelected ? "Added" : "Add Now"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ডানপাশের ১ কলাম: Your Stack কার্ড */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sticky top-20">
              {/* স্ট্যাক কার্ড হেডার (সংখ্যা ও Remove All বাটনসহ) */}
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <div className="gap-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    Your Stack
                  </h3>
                  <span className=" text-gray-400 font-semibold text-sm">
                    {selectedTechs.length} Technology Selected
                  </span>{" "}
                </div>

                {/* যেকোনো ১টি কার্ড সিলেক্ট থাকলে এই Remove All বাটনটি দৃশ্যমান হবে */}
              </div>

              {/* সিলেক্ট করা টেকনোলজির মিনি কার্ড লিস্ট */}
              {selectedTechs.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-sm font-medium">
                  No technologies added yet. Click "Add Now" to build your
                  stack.
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {selectedTechs.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-lg shadow-sm hover:border-red-200 transition"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-7 h-7 object-contain"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* রিমুভ (Cross) বাটন */}
                      <button
                        onClick={() => handleRemoveTech(item.id)}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 w-6 h-6 rounded-full flex items-center justify-center transition font-bold text-sm"
                        title="Remove from stack"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {selectedTechs.length > 0 && (
                    <button
                      onClick={handleRemoveAll}
                      className="w-full text-lg font-semibold text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out border border-red-500 text-center py-2.5 rounded-xl active:scale-95"
                    >
                      Remove All
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechGrid;
