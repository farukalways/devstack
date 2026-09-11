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

// ২. টাইপ-সেফ ফেচ ফাংশন (যা একটি Promise<TechItem[]> রিটার্ন করে)
export const fetchTechData = async (): Promise<TechItem[]> => {
  // ২ সেকেন্ডের কৃত্রিম ডিলে তৈরির প্রমিজ
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // public/data.json ফাইল থেকে ফেচ করা
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch data from data.json");
  }

  const data: TechItem[] = await response.json();
  return data;
};
