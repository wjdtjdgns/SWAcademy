import { useEffect, useRef } from "react";

const useResize = (handler) => {
  const savedHandler = useRef(handler);
  const ref = useRef(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const elemet = ref.current;
    if (!elemet) return;

    const observer = new ResizeObserver((entries) => {
      savedHandler.current(entries[0].contentRect);
    });

    observer.observe(elemet);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return ref;
};

export default useResize;
