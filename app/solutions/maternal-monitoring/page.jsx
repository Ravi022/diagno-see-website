export const metadata = {
  title: "Maternal monitoring",
  description:
    "Automated foetal measurements (BPD, HC, AC, FL) to immediately detect Foetal Growth Restriction (FGR) and High-Risk Pregnancies.",
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
              {"ULTRASOUND / USG"}
            </p>
            <h1>{"Maternal monitoring"}</h1>
            <p>
              {
                "Automated foetal measurements (BPD, HC, AC, FL) to immediately detect Foetal Growth Restriction (FGR) and High-Risk Pregnancies."
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Maternal monitoring"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/maternal.webp"
              alt="Maternal monitoring illustration from the presentation"
              width="554"
              height="480"
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
              data-expand="/assets/deck/maternal.webp"
              data-caption="Maternal monitoring — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/maternal.webp"
                alt="Maternal monitoring clinical illustration"
                width="554"
                height="480"
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
          <p className="clinical-source-intro">
            {
              "AI-assisted analysis of ultrasound scans to automatically identify key fetal structures, estimate biometric parameters and flag potential abnormalities — enabling faster, more consistent and reliable reporting."
            }
          </p>
          <div className="clinical-source-steps">
            <article>
              <span>{"01"}</span>
              <h3>{"ANALYSE"}</h3>
              <p>
                {
                  "AI analyses ultrasound images and detects key anatomical structures."
                }
              </p>
            </article>
            <article>
              <span>{"02"}</span>
              <h3>{"MEASURE"}</h3>
              <p>
                {
                  "Automatically estimates biometric parameters (e.g., BPD, HC, AC, FL)."
                }
              </p>
            </article>
            <article>
              <span>{"03"}</span>
              <h3>{"FLAG"}</h3>
              <p>{"Highlights potential abnormalities for priority review."}</p>
            </article>
            <article>
              <span>{"04"}</span>
              <h3>{"REVIEW"}</h3>
              <p>{"Radiologist reviews, confirms and finalises the report."}</p>
            </article>
            <article>
              <span>{"05"}</span>
              <h3>{"ENABLE ACTION"}</h3>
              <p>{"Supports timely clinical decisions and follow-up care."}</p>
            </article>
          </div>
          <div className="pills">
            <span>{"Faster reporting"}</span>
            <span>{"Early risk detection"}</span>
            <span>{"Improved maternal & fetal outcomes"}</span>
            <span>{"Scalable across facilities and programmes"}</span>
          </div>
          <details className="source-artwork">
            <summary>{"Explore the clinical workflow illustration"}</summary>
            <button
              className="image-expand"
              data-expand="/assets/deck/maternal-module.webp"
              data-caption="Illustrative clinical workflow from the presentation"
            >
              <img
                src="/assets/deck/maternal-module.webp"
                alt="Maternal monitoring workflow illustration"
                width="1983"
                height="793"
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
        <a href="/solutions/infectious-disease/">
          {"Infectious Disease "}
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
