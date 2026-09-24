export const metadata = {
  title: "Thoracic Intelligence",
  description:
    "Auto-detection of consolidation, nodules, and cavities on Chest X-Rays for rapid Tuberculosis and pneumonia triaging. Alarming possible heart failure/ cancer",
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
              {"CHEST X-RAY / CXR"}
            </p>
            <h1>{"Thoracic Intelligence"}</h1>
            <p>
              {
                "Auto-detection of consolidation, nodules, and cavities on Chest X-Rays for rapid Tuberculosis and pneumonia triaging. Alarming possible heart failure/ cancer"
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Thoracic Intelligence"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/thoracic.webp"
              alt="Thoracic Intelligence illustration from the presentation"
              width="435"
              height="453"
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
              data-expand="/assets/deck/thoracic.webp"
              data-caption="Thoracic Intelligence — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/thoracic.webp"
                alt="Thoracic Intelligence clinical illustration"
                width="435"
                height="453"
                className=""
                loading="lazy"
                decoding="async"
              />
              <span>{"Explore illustration ⤢"}</span>
            </button>
          </figure>
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
        <a href="/solutions/maternal-monitoring/">
          {"Maternal monitoring "}
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
