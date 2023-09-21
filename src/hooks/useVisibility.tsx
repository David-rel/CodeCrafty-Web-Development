import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useVisibility(): [boolean, RefObject<HTMLElement>] {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentDomRef = domRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Is Intersecting:", entry.isIntersecting); // Debug line
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // 50% of the target's visibility
      }
    );

    if (currentDomRef) {
      observer.observe(currentDomRef);
    }

    return () => {
      if (currentDomRef) {
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return [isVisible, domRef];
}
