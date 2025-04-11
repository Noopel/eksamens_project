import { useQuery } from "@tanstack/react-query";

export type TourData = {
    _id: string,
    title: string,
    content: string,
    traveltime: string,
    destination: string,
    distance: string,
    price: string,
    image1: string,
    image2: string,
    rating: number,
    spacelaunch: string
}

export const useTourQuery = (id: string) => {
  return useQuery<TourData>({
    queryKey: ["tourQuery"],
    staleTime: 1000 * 60 * 1,
    
    queryFn: async () => {
      const response = await fetch(`http://localhost:4444/tours/${id}`);
      return await response.json();
    },
  });
};
