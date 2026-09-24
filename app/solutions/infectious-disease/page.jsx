export const metadata = {
  title: "Infectious Disease",
  description:
    "Confirming severity of febrile disease as a point of care, prior to blood test report",
};
export default function Page() {
  return (
    <main id="main">
      <section className="solution-hero dark">
        <div className="wrap">
          <div>
            <a className="back-link" href="/solutions/">
              {"← All clinical solutions"}
            </a>
            <p className="eyebrow">
              <span></span>
              {"DENGUE / MALARIA"}
            </p>
            <h1>{"Infectious Disease"}</h1>
            <p>
              {
                "Confirming severity of febrile disease as a point of care, prior to blood test report"
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Infectious Disease"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/dengue.webp"
              alt="Infectious Disease illustration from the presentation"
              width="550"
              height="540"
              className=""
              loading="eager"
              decoding="async"
            />
            <figcaption>{"Illustrative clinical workflow"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"INTELLIGENT CLINICAL WORKFLOW"}
              </p>
              <h2>
                {
                  "Automation that accelerates workflow. Radiologists who command it."
                }
              </h2>
            </div>
            <p className="section-intro">
              {
                "Our proprietary models pre-draft reports in milliseconds, flagging critical anomalies for immediate review. Built with mandatory Human-in-the-Loop (HITL) architecture—the radiologist always has the final word."
              }
            </p>
          </div>
          <figure className="original-clinical">
            <button
              className="image-expand"
              data-expand="/assets/deck/infectious.webp"
              data-caption="Infectious Disease — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/infectious.webp"
                alt="Infectious Disease clinical illustration"
                width="1774"
                height="887"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore illustration ⤢"}</span>
            </button>
          </figure>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <div className="module-grid">
            <article>
              <div>
                <img
                  src="/assets/deck/dengue.webp"
                  alt="Dengue assessment illustration"
                  width="550"
                  height="540"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Dengue assessment"}</h3>
              <p className="module-modality">
                {"Ultrasound findings for clinical review"}
              </p>
              <p>
                {
                  "Detects key signs of severity, earlier. Enlarged liver (suggestive hepatomegaly); free fluid in abdomen (ascites), possible severe dengue; pleural effusion (right lower zone); gallbladder wall thickening (suggestive). AI highlights key ultrasound indicators of severe dengue to support early risk stratification."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/malaria.webp"
                  alt="Malaria assessment illustration"
                  width="551"
                  height="537"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Malaria assessment"}</h3>
              <p className="module-modality">
                {"Chest imaging for clinical review"}
              </p>
              <p>
                {
                  "Identifies pulmonary complications for timely intervention. Patchy opacities (suggestive malarial pneumonia); pleural effusion; no pneumothorax detected; cardiac size within normal limits. AI detects lung complications in malaria, enabling faster clinical decision-making."
                }
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <p className="clinical-source-intro">
            {
              "AI-assisted analysis of chest X-rays to detect imaging patterns associated with dengue, malaria and other febrile illnesses, enabling faster triage and clinical decision-making."
            }
          </p>
          <div className="clinical-source-steps">
            <article>
              <span>{"01"}</span>
              <h3>{"ANALYSE"}</h3>
              <p>
                {
                  "AI analyzes chest X-rays for imaging patterns associated with dengue, malaria and other febrile conditions."
                }
              </p>
            </article>
            <article>
              <span>{"02"}</span>
              <h3>{"FLAG"}</h3>
              <p>
                {
                  "Highlights potential findings such as pleural effusion, lung consolidation or other abnormalities."
                }
              </p>
            </article>
            <article>
              <span>{"03"}</span>
              <h3>{"REVIEW"}</h3>
              <p>{"Radiologist reviews and confirms the findings."}</p>
            </article>
            <article>
              <span>{"04"}</span>
              <h3>{"ENABLE ACTION"}</h3>
              <p>{"Supports faster triage and timely clinical management."}</p>
            </article>
          </div>
          <div className="pills">
            <span>{"Faster triage"}</span>
            <span>{"Better patient prioritization"}</span>
            <span>{"Strengthened outbreak response"}</span>
            <span>{"Supports public health surveillance"}</span>
          </div>
          <details className="source-artwork">
            <summary>{"Explore the clinical workflow illustration"}</summary>
            <button
              className="image-expand"
              data-expand="/assets/deck/febrile-module.webp"
              data-caption="Illustrative clinical workflow from the presentation"
            >
              <img
                src="/assets/deck/febrile-module.webp"
                alt="Infectious Disease workflow illustration"
                width="2172"
                height="724"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Expand illustration ⤢"}</span>
            </button>
          </details>
        </div>
      </section>
      <section className="section">
        <div className="wrap original-referral">
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
          <h2>
            {
              "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
            }
          </h2>
          <a className="button text" href="/workflow/">
            {"How DiagnoSee Works "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </section>
      <div className="next-solution wrap">
        <span>{"EXPLORE THE NEXT SOLUTION"}</span>
        <a href="/solutions/icu-trauma/">
          {"ICU and Trauma "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </div>
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
