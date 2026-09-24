export const metadata = {
  title: "Clinical solutions",
  description:
    "Connected imaging, AI-assisted workflows, specialist review and continuity of care with DiagnoSee.",
};
export default function Page() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">
            <span></span>
            {"INTELLIGENT CLINICAL WORKFLOW"}
          </p>
          <h1>
            {
              "Automation that accelerates workflow. Radiologists who command it."
            }
          </h1>
          <p>
            {
              "Our proprietary models pre-draft reports in milliseconds, flagging critical anomalies for immediate review. Built with mandatory Human-in-the-Loop (HITL) architecture—the radiologist always has the final word."
            }
          </p>
          <div className="pills">
            <span>{"AI-assisted pre-drafting"}</span>
            <span>{"Critical findings"}</span>
            <span>{"Mandatory human review"}</span>
          </div>
        </div>
        <div className="hero-coordinate">{"DIAGNOSEE / CONNECTED CARE"}</div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="clinical-directory">
            <a href="/solutions/thoracic-intelligence/">
              <div>
                <h3>{"Thoracic Intelligence"}</h3>
                <p>
                  {
                    "Auto-detection of consolidation, nodules, and cavities on Chest X-Rays for rapid Tuberculosis and pneumonia triaging. Alarming possible heart failure/ cancer"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/maternal-monitoring/">
              <div>
                <h3>{"Maternal monitoring"}</h3>
                <p>
                  {
                    "Automated foetal measurements (BPD, HC, AC, FL) to immediately detect Foetal Growth Restriction (FGR) and High-Risk Pregnancies."
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/infectious-disease/">
              <div>
                <h3>{"Infectious Disease"}</h3>
                <p>
                  {
                    "Confirming severity of febrile disease as a point of care, prior to blood test report"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/icu-trauma/">
              <div>
                <h3>{"ICU and Trauma"}</h3>
                <p>
                  {
                    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/womens-health/">
              <div>
                <h3>{"Women’s Health"}</h3>
                <p>
                  {
                    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/mens-health/">
              <div>
                <h3>{"Men’s Health"}</h3>
                <p>
                  {
                    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/cancer/">
              <div>
                <h3>{"Cancer"}</h3>
                <p>
                  {
                    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
            <a href="/solutions/bones-muscles/">
              <div>
                <h3>{"Bones and Muscles"}</h3>
                <p>
                  {
                    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
                  }
                </p>
              </div>
              <span aria-hidden="true">{"→"}</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"CLINICIAN AUTHORITY"}
              </p>
              <h2>
                {"Every report."}
                <br />
                {"Under expert control."}
              </h2>
            </div>
            <p className="section-intro">
              {
                "AI organises preliminary findings. Qualified radiologists review the imaging, edit or override the output and retain final authority over the signed report."
              }
            </p>
          </div>
          <div className="authority-flow">
            <article>
              <span>{"01"}</span>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 12h10"></path>
              </svg>
              <h3>{"Analyse"}</h3>
              <p>
                {
                  "Bring image findings and measurements into a structured preliminary assessment."
                }
              </p>
            </article>
            <article>
              <span>{"02"}</span>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 16h14l-2-3V9a5 5 0 0 0-10 0v4zm5 4h4"></path>
              </svg>
              <h3>{"Flag"}</h3>
              <p>{"Highlight findings that need timely clinical attention."}</p>
            </article>
            <article>
              <span>{"03"}</span>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4c2 1 3 3 3 6"></path>
              </svg>
              <h3>{"Review"}</h3>
              <p>
                {
                  "Let the radiologist confirm, refine or override the preliminary findings."
                }
              </p>
            </article>
            <article>
              <span>{"04"}</span>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8m-8 4h6"></path>
              </svg>
              <h3>{"Enable action"}</h3>
              <p>
                {
                  "Connect the verified report to relevant care pathways and follow-up."
                }
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="cta-section" id="contact">
        <div className="wrap cta-inner">
          <p className="eyebrow">
            <span></span>
            {"DiagnoSee"}
          </p>
          <h2>{"Ready to digitize your state's diagnostic infrastructure?"}</h2>
          <p>
            {
              "Join the leading government bodies and enterprise hospitals modernizing their radiology workflows. Deploy the DiagnoSee Grid today."
            }
          </p>
          <button className="button white demo-trigger" type="button">
            {"Request Demo"}
            <span aria-hidden="true">{"↗"}</span>
          </button>
          <p className="cta-function-note">
            {"Prepare a brief to share with your DiagnoSee contact."}
          </p>
        </div>
      </section>
    </main>
  );
}
