import { useQuery } from "@tanstack/react-query";

export type SafetyData = {
  _id: string;
  title: string;
  content: string;
  image: string;
  __v: number;
};

export const useSafetyQuery = () => {
  return useQuery<SafetyData>({
    queryKey: ["safetyQuery"],
    staleTime: 1000 * 60 * 1,

    queryFn: async () => {
      const response = await fetch("http://localhost:4444/safety");
      return await response.json();
    },
  });
};
