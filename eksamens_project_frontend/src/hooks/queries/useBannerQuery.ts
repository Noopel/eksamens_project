import { useQuery } from "@tanstack/react-query";

export type BannerData = {
  _id: string;
  title: string;
  content: string;
  image: string;
  __v: number;
};

export const useBannerQuery = () => {
  return useQuery<BannerData[]>({
    queryKey: ["bannerQuery"],
    staleTime: 1000 * 60 * 1,

    queryFn: async () => {
      const response = await fetch("http://localhost:4444/banner");
      return await response.json();
    },
  });
};
