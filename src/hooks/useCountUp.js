import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end, start = 0, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Reset when shouldStart becomes false
    if (!shouldStart) {
      hasStartedRef.current = false;
      setCount(start);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      return;
    }

    // Only start animation once when shouldStart becomes true
    if (hasStartedRef.current) return;
    
    hasStartedRef.current = true;
    setCount(start);
    startTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [shouldStart, end, start, duration]);

  return count;
};

