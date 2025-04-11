import { useQuery } from "@tanstack/react-query";

export type FooterData = {
    _id: string,
    name: string,
    cvr: string,
    address: string,
    phone: string,
    email: string,
    openinghours: string,
    coordinates: string,
    __v: number
}

export const useFooterQuery = () => {
  return useQuery<FooterData>({
    queryKey: ["footerQuery"],
    staleTime: 1000 * 60 * 1,
    
    queryFn: async () => {
      const response = await fetch("http://localhost:4444/footer");
      return await response.json();
    },
  });
};
