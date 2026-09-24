"use client";
import { useState } from "react";
import content from "@/data/platform.json";
export default function WorkflowExplorer() {
  const [index, setIndex] = useState(0);
  const items = content.workflow,
    w = items[index];
  function keys(e) {
    let next = index;
    if (["ArrowRight", "ArrowDown"].includes(e.key))
      next = (index + 1) % items.length;
    else if (["ArrowLeft", "ArrowUp"].includes(e.key))
      next = (index + items.length - 1) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    setIndex(next);
    document.getElementById("workflow-tab-" + next)?.focus();
  }
  return (
    <div className="workflow-explorer">
      <div
        className="workflow-tabs"
        role="tablist"
        aria-label="The six-stage diagnostic workflow"
        onKeyDown={keys}
      >
        {items.map((v, i) => (
          <button
            key={v.name}
            role="tab"
            id={"workflow-tab-" + i}
            aria-controls="workflow-panel"
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
          >
            <span>0{i + 1}</span>
            {v.name}
          </button>
        ))}
      </div>
      <div
        id="workflow-panel"
        className="workflow-panel"
        role="tabpanel"
        aria-labelledby={"workflow-tab-" + index}
      >
        <div className="workflow-copy">
          <p className="eyebrow">{w.tag}</p>
          <h3>{w.title}</h3>
          <p>{w.body}</p>
          <div className="pills">
            {w.features.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <button
            className="text-button"
            onClick={() => setIndex((index + 1) % items.length)}
          >
            {index === items.length - 1 ? "Back to capture" : "Next step"}{" "}
            <span>→</span>
          </button>
        </div>
        <figure className="workflow-figure">
          <div className="signal-diagram specification">
            <p className="spec-title">{w.name}</p>
            <ul>
              {w.features.slice(0, 4).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <figcaption>{w.output}</figcaption>
        </figure>
      </div>
    </div>
  );
}
