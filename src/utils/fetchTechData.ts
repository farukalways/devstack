export interface TechItem {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}

export const fetchTechData = async (): Promise<TechItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch data from data.json");
  }

  const data: TechItem[] = await response.json();
  return data;
};
