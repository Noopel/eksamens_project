"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type DataType = {
  message: string;
  content: number[];
};

const ReactQueryExample = () => {
  const { data, error, isFetching, isPending, isError, isSuccess, isStale } = useQuery<DataType>({
    queryKey: ["devreferences"],
    staleTime: 10000,

    queryFn: async () => {
      const response = await fetch("/api/devreferences");
      return await response.json();
    },
  });
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.message}</h1>
          {data.content.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </>
      )}

      {isFetching && <p>Is fetching...</p>}
      {isPending && <p>Is pending...</p>}
      {isSuccess && <p>Success!</p>}
      {isStale && <p>Stale</p>}
    </div>
  );
};

export default ReactQueryExample;
