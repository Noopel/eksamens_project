import { RefObject, useLayoutEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

interface Size {
  width: number;
  height: number;
}

export default function useElementSize<T extends HTMLElement = HTMLDivElement>(
  passedRef?: T
): [RefObject<T | null>, Size] {
  const targetRef = useRef<T | null>(passedRef || null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  if (typeof window === "undefined") return [targetRef, size]; /* Here to avoid server errors */

  const setRoundedSize = ({ width, height }: Size) => {
    setSize({ width: Math.round(width), height: Math.round(height) });
  };

  useLayoutEffect(() => {
    targetRef.current && setRoundedSize(targetRef.current.getBoundingClientRect());
  }, [targetRef]);

  useResizeObserver(targetRef, (entry) => {
    const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
    setRoundedSize({ width, height });
  });

  return [targetRef, size];
}
