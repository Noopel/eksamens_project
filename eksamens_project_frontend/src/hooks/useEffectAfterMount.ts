"use client";
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

/**
 * Works like useEffect except that it won't run on initial render and only when dependencies change.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 */
const useEffectAfterMount = (cb: EffectCallback, dependencies: DependencyList | undefined) => {
  const mounted = useRef(true);

  useEffect(() => {
    if (!mounted.current) return cb();
    mounted.current = false;
  }, dependencies);
};

export default useEffectAfterMount;
