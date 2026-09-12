import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchTechData, type TechItem } from "../../utils/fetchTechData";
import YourStackPanel from "./YourStackPanel";
import TechCard from "./TechCard";

const TechGrid: React.FC = () => {
  const [techList, setTechList] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleAddTech = (tech: TechItem) => {
    const isAlreadySelected = selectedTechs.some((item) => item.id === tech.id);

    if (isAlreadySelected) {
      toast.info(`${tech.name} is already in your stack.`);
      return;
    }

    setSelectedTechs((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveTech = (techId: string) => {
    const removed = selectedTechs.find((item) => item.id === techId);
    setSelectedTechs((prev) => prev.filter((item) => item.id !== techId));

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechs.length === 0) return;
    setSelectedTechs([]);
    toast.warn("All technologies removed from your stack.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ToastContainer position="bottom-right" autoClose={1500} newestOnTop />

      <div className="flex items-start flex-col gap-3 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-600 font-semibold">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-75">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading Technologies...
          </p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 font-medium py-10">
          Error: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {techList.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isSelected={selectedTechs.some((item) => item.id === tech.id)}
                onAdd={handleAddTech}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <YourStackPanel
              selectedTechs={selectedTechs}
              onRemove={handleRemoveTech}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechGrid;
