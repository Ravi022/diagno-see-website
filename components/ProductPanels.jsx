function Panel0() {
  return (
    <div className="product-panel">
      <div className="study-sidebar">
        <span className="workspace-label">{"Study worklist"}</span>
        <div className="study active">
          <b>{"Chest X-ray"}</b>
          <span>{"DX · Ready for review"}</span>
        </div>
        <div className="study">
          <b>{"Obstetric ultrasound"}</b>
          <span>{"US · Images received"}</span>
        </div>
        <div className="study">
          <b>{"Musculoskeletal X-ray"}</b>
          <span>{"DX · Awaiting report"}</span>
        </div>
        <small>{"Example studies"}</small>
      </div>
      <div className="study-image">
        <img
          src="/assets/deck/trauma.webp"
          alt="Illustrative annotated chest imaging supplied in the DiagnoSee presentation"
          width="1536"
          height="1024"
          className=""
          loading="lazy"
          decoding="async"
        />
        <span>{"Imaging and clinical context, together."}</span>
      </div>
    </div>
  );
}
function Panel1() {
  return (
    <div className="product-panel">
      <div className="review-scan">
        <img
          src="/assets/deck/trauma.webp"
          alt="Chest imaging example for specialist review"
          width="1536"
          height="1024"
          className=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="review-list">
        <span className="workspace-label">{"Radiologist review"}</span>
        <h4>
          {"Review the study."}
          <br />
          {"Keep clinical control."}
        </h4>
        <ul>
          <li>{"Inspect images"}</li>
          <li>{"Review preliminary findings"}</li>
          <li>{"Edit or override"}</li>
        </ul>
        <p>{"AI-assisted output supports the radiologist’s assessment."}</p>
      </div>
    </div>
  );
}
function Panel2() {
  return (
    <div className="product-panel report-screen">
      <div className="report-paper">
        <span className="workspace-label">{"Structured reporting"}</span>
        <h4>{"Chest radiograph"}</h4>
        <dl>
          <dt>{"Clinical information"}</dt>
          <dd>{"Patient context available for review"}</dd>
          <dt>{"Findings"}</dt>
          <dd>{"Radiologist-reviewed observations"}</dd>
          <dt>{"Impression"}</dt>
          <dd>{"Assessment entered by the radiologist"}</dd>
        </dl>
        <div className="report-signature">
          {"Final report → Radiologist sign-off"}
        </div>
      </div>
      <div className="report-aside">
        <b>{"A report the care team can use."}</b>
        <p>
          {
            "Structured findings, specialist verification and a connected patient record."
          }
        </p>
      </div>
    </div>
  );
}
function Panel3() {
  return (
    <div className="product-panel follow-screen">
      <div>
        <span className="workspace-label">{"Referral & follow-up"}</span>
        <h4>{"Keep the next step visible."}</h4>
        <ol className="follow-timeline">
          <li>
            <b>{"Reviewed report"}</b>
            <span>{"Available to the care team"}</span>
          </li>
          <li>
            <b>{"Specialist referral"}</b>
            <span>{"Coordinate the appropriate review"}</span>
          </li>
          <li>
            <b>{"Patient follow-up"}</b>
            <span>{"Track progress and outcomes"}</span>
          </li>
        </ol>
      </div>
      <div className="follow-aside">
        {"Imaging"}
        <br />
        <span>{"↓"}</span>
        {"Reporting"}
        <br />
        <span>{"↓"}</span>
        {"Care coordination"}
      </div>
    </div>
  );
}
export const panels = [Panel0, Panel1, Panel2, Panel3];
