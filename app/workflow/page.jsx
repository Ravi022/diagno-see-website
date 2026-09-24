import WorkflowExplorer from "@/components/WorkflowExplorer";
export const metadata = {
  title: "From scans to specialists",
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
            {"Workflow"}
          </p>
          <h1>{"One Connected Workflow. From Scans to Specialists."}</h1>
          <p>
            {
              "DiagnoSee connects frontline imaging, AI-assisted analysis, intelligent triage, specialist review, and interoperable health delivery in one connected workflow."
            }
          </p>
        </div>
        <div className="hero-coordinate">{"DIAGNOSEE / CONNECTED CARE"}</div>
      </section>
      <section className="section dark workflow-section">
        <div className="wrap">
          <WorkflowExplorer />
        </div>
      </section>
      <section className="workflow-detail soft" id="capture">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/capture-original.webp"
              data-caption="Capture — workflow from the presentation"
            >
              <img
                src="/assets/deck/capture-original.webp"
                alt="Capture workflow from the presentation"
                width="1482"
                height="742"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"01"}</span>
            <p className="eyebrow">
              <span></span>
              {"POINT OF CARE"}
            </p>
            <h2>{"Register & scan at frontline clinics."}</h2>
            <p>
              {
                "Patients register using their ABHA ID. X-ray (DX) or ultrasound (USG) studies are captured directly on local equipment, keeping patient identity and clinical context connected from the start."
              }
            </p>
            <div className="pills">
              <span>{"ABHA-linked registration"}</span>
              <span>{"X-ray & ultrasound capture"}</span>
              <span>{"Connected patient record"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {
                  "A registered patient and an imaging study ready for the network."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-detail" id="route">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/route-original.webp"
              data-caption="Route — workflow from the presentation"
            >
              <img
                src="/assets/deck/route-original.webp"
                alt="Route workflow from the presentation"
                width="1520"
                height="767"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"02"}</span>
            <p className="eyebrow">
              <span></span>
              {"ZERO-FOOTPRINT CLOUD"}
            </p>
            <h2>{"Stream DICOM securely to the cloud."}</h2>
            <p>
              {
                "Medical images are encrypted and transmitted through lightweight edge gateways into the central DiagnoSee cloud PACS. The architecture reduces dependence on heavy on-premise imaging servers."
              }
            </p>
            <div className="pills">
              <span>{"Lightweight edge gateway"}</span>
              <span>{"Encrypted transmission"}</span>
              <span>{"Centralised cloud PACS"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {
                  "A study available to authorised specialists through the web viewer."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-detail soft" id="analyse">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/analyse-original.webp"
              data-caption="Analyse — workflow from the presentation"
            >
              <img
                src="/assets/deck/analyse-original.webp"
                alt="Analyse workflow from the presentation"
                width="1595"
                height="740"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"03"}</span>
            <p className="eyebrow">
              <span></span>
              {"AI PRE-DRAFTING"}
            </p>
            <h2>{"Let AI extract measurements & findings."}</h2>
            <p>
              {
                "AI-assisted analysis organises thoracic findings such as consolidation and nodules, alongside obstetric biometry including BPD, HC, AC and FL. Findings populate a structured preliminary checklist for specialist review."
              }
            </p>
            <div className="pills">
              <span>{"Thoracic findings"}</span>
              <span>{"Obstetric biometry"}</span>
              <span>{"Structured preliminary checklist"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {
                  "A preliminary report with findings and measurements for clinical review."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-detail" id="escalate">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/escalate-original.webp"
              data-caption="Escalate — workflow from the presentation"
            >
              <img
                src="/assets/deck/escalate-original.webp"
                alt="Escalate workflow from the presentation"
                width="1480"
                height="752"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"04"}</span>
            <p className="eyebrow">
              <span></span>
              {"INTELLIGENT TRIAGE"}
            </p>
            <h2>{"Prioritize critical & high-risk cases."}</h2>
            <p>
              {
                "High-risk flags, including suspected TB-related findings, ectopic pregnancy and foetal growth restriction, bring urgent studies to the attention of the specialist team and support prioritisation of the worklist."
              }
            </p>
            <div className="pills">
              <span>{"Clinical risk flags"}</span>
              <span>{"Priority worklist"}</span>
              <span>{"Urgent review pathways"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {
                  "The cases needing attention are visible to the right care team."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-detail soft" id="sign-off">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/sign-off-original.webp"
              data-caption="Sign-off — workflow from the presentation"
            >
              <img
                src="/assets/deck/sign-off-original.webp"
                alt="Sign-off workflow from the presentation"
                width="1500"
                height="750"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"05"}</span>
            <p className="eyebrow">
              <span></span>
              {"HUMAN-IN-THE-LOOP"}
            </p>
            <h2>{"Review, refine, and sign with full authority."}</h2>
            <p>
              {
                "Remote radiologists review AI findings in the zero-footprint web viewer, edit or override the preliminary output, and apply a verified digital signature. The radiologist retains final authority over the report."
              }
            </p>
            <div className="pills">
              <span>{"Web-based specialist viewer"}</span>
              <span>{"Edit & override controls"}</span>
              <span>{"Verified digital sign-off"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {"A report reviewed and signed by a qualified radiologist."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-detail" id="deliver">
        <div className="wrap">
          <figure>
            <button
              className="image-expand"
              data-expand="/assets/deck/deliver-original.webp"
              data-caption="Deliver — workflow from the presentation"
            >
              <img
                src="/assets/deck/deliver-original.webp"
                alt="Deliver workflow from the presentation"
                width="1467"
                height="652"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore workflow ⤢"}</span>
            </button>
          </figure>
          <div>
            <span className="large-step">{"06"}</span>
            <p className="eyebrow">
              <span></span>
              {"INTEROPERABLE HEALTH GRID"}
            </p>
            <h2>{"Sync structured data with ABDM & registries."}</h2>
            <p>
              {
                "The integration architecture maps verified reports to FHIR R4 bundles using LOINC, SNOMED CT and UCUM. It is designed to connect with ABDM, Nikshay and hospital EHRs, subject to the agreed implementation scope."
              }
            </p>
            <div className="pills">
              <span>{"FHIR R4 structured reports"}</span>
              <span>{"ABDM & Nikshay pathways"}</span>
              <span>{"Hospital EHR integration"}</span>
            </div>
            <div className="step-output">
              <b>{"What moves forward"}</b>
              <p>
                {
                  "A structured report available to support referrals, treatment and follow-up."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"INTEROPERABILITY"}
              </p>
              <h2>
                {"A report that can move."}
                <br />
                <span>{"A record that stays connected."}</span>
              </h2>
            </div>
            <p className="section-intro">
              {
                "Structured health data connects the signed report with the systems that support the patient’s next step."
              }
            </p>
          </div>
          <div className="interop-grid">
            <article>
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
              <h3>{"Structured reports"}</h3>
              <p>
                {
                  "FHIR R4 bundles bring the verified report into a consistent exchange format."
                }
              </p>
              <div className="pills">
                <span>{"FHIR R4"}</span>
                <span>{"LOINC"}</span>
                <span>{"SNOMED CT"}</span>
                <span>{"UCUM"}</span>
              </div>
            </article>
            <article>
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
                <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6zM8 12l3 3 5-6"></path>
              </svg>
              <h3>{"Secure synchronisation"}</h3>
              <p>
                {
                  "Encrypted transfer, authentication and audit visibility support the integration workflow."
                }
              </p>
              <div className="pills">
                <span>{"Encryption"}</span>
                <span>{"Authentication"}</span>
                <span>{"Audit logging"}</span>
              </div>
            </article>
            <article>
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
                <rect x="8" y="8" width="8" height="8" rx="2"></rect>
                <path d="M12 2v6m0 8v6M2 12h6m8 0h6M4 4l4 4m8 8 4 4m0-16-4 4M8 16l-4 4"></path>
              </svg>
              <h3>{"Connected destinations"}</h3>
              <p>
                {
                  "Plan delivery to the health systems and programme registries used by the care network."
                }
              </p>
              <div className="pills">
                <span>{"ABDM"}</span>
                <span>{"Nikshay"}</span>
                <span>{"Hospital EHRs"}</span>
              </div>
            </article>
          </div>
          <p className="footnote">
            {
              "Integration availability and scope are confirmed for each implementation."
            }
          </p>
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
