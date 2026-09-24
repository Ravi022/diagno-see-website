"use client";
import { useEffect, useRef, useState } from "react";
import ProductPreview from "./ProductPreview";
import content from "@/data/platform.json";
const preview = [0, 0, 1, 1, 2, 3];
export default function Walkthrough() {
  const [step, setStep] = useState(0),
    [tab, setTab] = useState(0);
  const root = useRef(null);
  function choose(i) {
    setStep(i);
    setTab(preview[i]);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!matchMedia("(min-width:851px)").matches) return;
        for (const e of entries)
          if (e.isIntersecting) choose(Number(e.target.dataset.storyStep));
      },
      { rootMargin: "-25% 0px -35% 0px", threshold: 0 },
    );
    root.current
      .querySelectorAll("[data-story-step]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="walkthrough-section" id="how-it-works" ref={root}>
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span />
              Workflow
            </p>
            <h2>One Connected Workflow. From Scans to Specialists.</h2>
          </div>
          <p className="section-intro">
            DiagnoSee connects frontline imaging, AI-assisted analysis,
            intelligent triage, specialist review, and interoperable health
            delivery in one connected workflow.
          </p>
        </div>
        <div className="walkthrough-layout">
          <div className="sticky-product">
            <ProductPreview selected={tab} onSelect={setTab} />
            <p className="walkthrough-disclaimer">
              Illustrative workflow based on the DiagnoSee presentation. This is
              not a live clinical system.
            </p>
          </div>
          <div className="walkthrough-steps">
            {content.workflow.map((w, i) => (
              <article
                key={w.name}
                data-story-step={i}
                className={step === i ? "current" : ""}
              >
                <span className="story-number">
                  0{i + 1} / {w.name.toUpperCase()}
                </span>
                <p className="eyebrow">{w.tag}</p>
                <h3>{w.title}</h3>
                <button
                  type="button"
                  onClick={() => {
                    choose(i);
                    if (matchMedia("(max-width:850px)").matches)
                      root.current
                        .querySelector(".sticky-product")
                        .scrollIntoView({
                          behavior: matchMedia(
                            "(prefers-reduced-motion:reduce)",
                          ).matches
                            ? "auto"
                            : "smooth",
                          block: "start",
                        });
                  }}
                >
                  Explore <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
