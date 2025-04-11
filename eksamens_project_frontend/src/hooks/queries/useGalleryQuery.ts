import { useQuery } from "@tanstack/react-query";

export type GalleryData = {
    _id: string,
    imagetext: string,
    image: string,
    __v: number
}

export const useGalleryQuery = () => {
  return useQuery<GalleryData[]>({
    queryKey: ["galleryQuery"],
    staleTime: 1000 * 60 * 1,
    
    queryFn: async () => {
      const response = await fetch("http://localhost:4444/gallery");
      return await response.json();
    },
  });
};
