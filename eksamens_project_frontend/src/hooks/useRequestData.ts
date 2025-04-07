import { useState } from "react";

type HTTPMethod = "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "DELETE" | "PATCH"

const useRequestData = <D, R>() => {
  const [data, setData] = useState<D | null>(null);
  const [reason, setReason] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const makeRequest = async (url: string, method: HTTPMethod, headers?: HeadersInit, body?: BodyInit | null, signal?: AbortSignal | null) => {
    setIsLoading(true);

    await fetch(url, { method, headers, body, signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsError(false);
        setReason(null);
      })
      .catch((reason) => {
        setData(null);
        setIsError(true);
        setReason(reason);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { makeRequest, data, isLoading, isError, reason };
};

export default useRequestData;
