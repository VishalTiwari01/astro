import { useRef, useEffect } from "react";

export function useGsapReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    // GSAP reveal logic can be added here later
  }, []);
  return ref;
}
