import { useEffect, useState } from "react";

export function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (isIntersecting && !hasIntersected) {
      setHasIntersected(true);
    }
  }, [isIntersecting, hasIntersected]);

  return { isIntersecting, hasIntersected };
}
