"use client";
import { useState } from "react";
import { download } from "@/components/download";
export default function BriefingForm() {
  const [result, setResult] = useState("");
  function submit(event) {
    event.preventDefault();
    const f = new FormData(event.currentTarget);
    const lines = [
      "DIAGNOSEE | TECHNICAL BRIEFING",
      "",
      ...[
        "name",
        "email",
        "organisation",
        "role",
        "network",
        "facilities",
        "priority",
        "message",
      ].map(
        (key) => key.toUpperCase() + ": " + (f.get(key) || "To be discussed"),
      ),
      "",
      "Share this brief with your DiagnoSee contact. This request has not been sent automatically.",
    ];
    download(lines.join("\n"), "DiagnoSee-Technical-Briefing.txt");
    setResult(
      "Your briefing has been prepared. Share the downloaded file with your DiagnoSee contact to arrange the discussion.",
    );
  }
  return (
    <form onSubmit={submit}>
      <div className="form-grid">
        <label>
          {"Your name"}
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required={true}
            maxLength="100"
          />
        </label>
        <label>
          {"Work email"}
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@organisation.com"
            required={true}
            maxLength="160"
          />
        </label>
        <label>
          {"Organisation"}
          <input
            name="organisation"
            autoComplete="organization"
            placeholder="Hospital or organisation"
            required={true}
            maxLength="150"
          />
        </label>
        <label>
          {"Your role"}
          <input name="role" placeholder="Job title" maxLength="100" />
        </label>
        <label>
          {"Network type"}
          <select name="network">
            <option>{"Hospital"}</option>
            <option>{"Diagnostic network"}</option>
            <option>{"Public health programme"}</option>
            <option>{"Other healthcare organisation"}</option>
          </select>
        </label>
        <label>
          {"Number of facilities"}
          <input
            name="facilities"
            type="number"
            min="1"
            max="100000"
            placeholder="e.g. 25"
          />
        </label>
      </div>
      <label>
        {"Primary area of interest"}
        <select name="priority">
          <option>{"Complete diagnostic platform"}</option>
          <option>{"Connected imaging & cloud PACS"}</option>
          <option>{"AI-assisted clinical workflows"}</option>
          <option>{"Referrals & follow-up"}</option>
          <option>{"Programme dashboard"}</option>
          <option>{"ABDM / EHR integration"}</option>
        </select>
      </label>
      <label>
        {"What would you like to discuss?"}
        <textarea
          name="message"
          rows="3"
          maxLength="3000"
          placeholder="Current workflow, imaging equipment and integration priorities"
        ></textarea>
      </label>
      <p className="form-note">
        {
          "Your details remain in your browser. Download this brief and share it with your DiagnoSee contact; it is not sent automatically."
        }
      </p>
      <button type="submit" className="button primary">
        {"Download my briefing "}
        <span>{"↓"}</span>
      </button>
      <p role="status" className="form-result">
        {result}
      </p>
    </form>
  );
}
