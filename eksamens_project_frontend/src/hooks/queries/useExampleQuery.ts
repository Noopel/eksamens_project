import { useQuery } from "@tanstack/react-query";

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ["exampleQuery"],
    staleTime: 1000 * 60 * 1,

    queryFn: async () => {
      const response = await fetch("/api/devreferences");
      return await response.json();
    },
  });
};
