import { useQuery } from "@tanstack/react-query";

export type TeamData = {
    _id: string,
    name: string,
    role: string,
    phone: string,
    email: string,
    image: string,
    __v: number
}

export const useTeamQuery = () => {
  return useQuery<TeamData[]>({
    queryKey: ["teamQuery"],
    staleTime: 1000 * 60 * 1,
    
    queryFn: async () => {
      const response = await fetch("http://localhost:4444/team");
      return await response.json();
    },
  });
};
