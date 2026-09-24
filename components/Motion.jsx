"use client";
import { useEffect } from "react";
export default function Motion() {
  useEffect(() => {
    const panel = document.querySelector("details#programme");
    if (location.hash === "#programme" && panel) panel.open = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06 },
    );
    const elements = [
      ...document.querySelectorAll(
        ".section-heading,.editorial-split,.clinical-editorial,.care-editorial",
      ),
    ];
    elements.forEach((el) => {
      el.classList.add("editorial-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("editorial-reveal"));
    };
  }, []);
  return null;
}
