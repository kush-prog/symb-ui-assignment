"use client"
import { useRef } from "react";

export function useScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return { scrollRef, scrollLeft, scrollRight };
}