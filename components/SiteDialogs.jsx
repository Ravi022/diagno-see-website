"use client";
import { useEffect, useRef, useState } from "react";
import BriefingForm from "./BriefingForm";
export default function SiteDialogs() {
  const briefing = useRef(null),
    image = useRef(null);
  const [art, setArt] = useState(null);
  useEffect(() => {
    function click(e) {
      const trigger = e.target.closest(".demo-trigger");
      if (trigger) {
        if (trigger.dataset.interest) {
          const field = briefing.current.querySelector("[name=message]");
          if (!field.value)
            field.value =
              "I would like to discuss " + trigger.dataset.interest + ".";
        }
        briefing.current.showModal();
      }
      const expand = e.target.closest("[data-expand]");
      if (expand) {
        setArt({
          src: expand.dataset.expand,
          caption: expand.dataset.caption || "Illustrative workflow",
        });
        image.current.showModal();
      }
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  function backdrop(e) {
    if (e.target !== e.currentTarget) return;
    const r = e.currentTarget.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      e.currentTarget.close();
  }
  return (
    <>
      <dialog
        ref={briefing}
        id="briefing-dialog"
        aria-labelledby="briefing-title"
        onClick={backdrop}
      >
        <button
          className="dialog-close"
          aria-label="Close briefing"
          onClick={() => briefing.current.close()}
        >
          ×
        </button>
        <div className="dialog-heading">
          <p className="eyebrow">TECHNICAL BRIEFING</p>
          <h2 id="briefing-title">Plan your implementation.</h2>
          <p>
            Prepare a technical briefing to share with your DiagnoSee contact.
          </p>
        </div>
        <BriefingForm />
      </dialog>
      <dialog
        ref={image}
        id="image-dialog"
        aria-label="Expanded illustration"
        onClick={backdrop}
      >
        <button
          className="dialog-close"
          aria-label="Close illustration"
          onClick={() => image.current.close()}
        >
          ×
        </button>
        {art && (
          <>
            <img src={art.src} alt={art.caption} />
            <p>{art.caption}</p>
          </>
        )}
      </dialog>
    </>
  );
}
