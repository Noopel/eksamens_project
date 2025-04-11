import { useQuery } from "@tanstack/react-query";

export type AboutData = {
  _id: string;
  title: string;
  content: string;
  __v: number;
};

export const useAboutQuery = () => {
  return useQuery<AboutData>({
    queryKey: ["aboutQuery"],
    staleTime: 1000 * 60 * 1,

    queryFn: async () => {
      const response = await fetch("http://localhost:4444/about");
      return await response.json();
    },
  });
};
