"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 150,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
      }
    });
  }, [springValue]);

  return (
    <span
      ref={ref}
      className={`inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[black]  ${className} dark:text-white`}
    />
  );
}
