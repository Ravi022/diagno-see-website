"use client";
import { useId, useState } from "react";
import { panels } from "./ProductPanels";
export default function ProductPreview({ selected, onSelect }) {
  const [local, setLocal] = useState(0);
  const id = useId();
  const active = selected ?? local;
  const select = (i) => {
    setLocal(i);
    onSelect?.(i);
  };
  function keys(e) {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? 3
          : (active + (e.key === "ArrowRight" ? 1 : 3)) % 4;
    select(next);
    document.getElementById(id + "-tab-" + next)?.focus();
  }
  return (
    <div className="product-window" data-product-window>
      <div className="product-top">
        <strong>
          DiagnoSee <span>Radiology workspace</span>
        </strong>
        <span className="preview-badge">Illustrative preview</span>
      </div>
      <div
        className="product-tabs"
        role="tablist"
        aria-label="Product preview"
        onKeyDown={keys}
      >
        {["Imaging", "Review", "Reports", "Follow-up"].map((name, i) => (
          <button
            key={name}
            type="button"
            role="tab"
            id={id + "-tab-" + i}
            aria-controls={id + "-panel-" + i}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
          >
            {name}
          </button>
        ))}
      </div>
      {panels.map((Panel, i) => (
        <div
          key={i}
          role="tabpanel"
          id={id + "-panel-" + i}
          aria-labelledby={id + "-tab-" + i}
          hidden={active !== i}
        >
          <Panel />
        </div>
      ))}
      <div className="product-bottom">
        <span>No patient data · Conceptual interface</span>
        <span>Radiologist-led decisions</span>
      </div>
    </div>
  );
}
