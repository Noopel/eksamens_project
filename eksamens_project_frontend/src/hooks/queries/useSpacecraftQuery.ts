import { useQuery } from "@tanstack/react-query";

export type SpacecraftData = {
  _id: string;
  title: string;
  content: string;
  image: string;
  __v: number;
};

export const useSpacecraftQuery = () => {
  return useQuery<SpacecraftData>({
    queryKey: ["spacecraftQuery"],
    staleTime: 1000 * 60 * 1,

    queryFn: async () => {
      const response = await fetch("http://localhost:4444/spacecraft");
      return await response.json();
    },
  });
};
