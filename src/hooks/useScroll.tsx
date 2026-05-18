"use client"
import { useRef, useEffect, useCallback } from "react";

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

  const updateCardScales = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      // How far the card center is from the container center (0 = perfectly centered)
      const distance = Math.abs(containerCenter - cardCenter);
      const maxDistance = containerRect.width;

      // Normalize: 0 when centered, 1 when at edge
      const ratio = Math.min(distance / maxDistance, 1);

      // Scale: 1.0 at center, 0.85 at edges
      const scale = 1 - ratio * 0.15;
      // Opacity: 1.0 at center, 0.6 at edges
      const opacity = 1 - ratio * 0.4;

      card.style.transform = `scale(${scale})`;
      card.style.opacity = `${opacity}`;
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial update
    updateCardScales();

    container.addEventListener("scroll", updateCardScales, { passive: true });
    window.addEventListener("resize", updateCardScales);

    return () => {
      container.removeEventListener("scroll", updateCardScales);
      window.removeEventListener("resize", updateCardScales);
    };
  }, [updateCardScales]);

  return { scrollRef, scrollLeft, scrollRight };
}