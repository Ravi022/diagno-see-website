export const metadata = {
  title: "Bones and Muscles",
  description:
    "Flagging necessary programs, hospital departments and institutes for confirmatory assessment",
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
              {"X-RAY / DXA / USG / MRI"}
            </p>
            <h1>{"Bones and Muscles"}</h1>
            <p>
              {
                "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Bones and Muscles"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/msk.webp"
              alt="Bones and Muscles illustration from the presentation"
              width="2172"
              height="724"
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
              data-expand="/assets/deck/msk.webp"
              data-caption="Bones and Muscles — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/msk.webp"
                alt="Bones and Muscles clinical illustration"
                width="2172"
                height="724"
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
                  src="/assets/deck/msk-0.webp"
                  alt="Bone health illustration"
                  width="402"
                  height="178"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Bone health"}</h3>
              <p className="module-modality">{"X-ray / DXA / USG"}</p>
              <p>
                {
                  "Detects fractures, bone density changes and other osseous abnormalities."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/msk-1.webp"
                  alt="Muscles illustration"
                  width="348"
                  height="178"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Muscles"}</h3>
              <p className="module-modality">{"USG"}</p>
              <p>
                {
                  "Identifies tears, strains, hematomas and other muscle abnormalities."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/msk-2.webp"
                  alt="Tendons illustration"
                  width="375"
                  height="178"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Tendons"}</h3>
              <p className="module-modality">{"USG"}</p>
              <p>
                {
                  "Detects tendinopathy, partial or complete tears and inflammation."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/msk-3.webp"
                  alt="Ligaments illustration"
                  width="408"
                  height="178"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Ligaments"}</h3>
              <p className="module-modality">{"USG / X-ray / MRI"}</p>
              <p>{"Identifies sprains, tears and ligament injuries."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/msk-4.webp"
                  alt="Spine illustration"
                  width="354"
                  height="178"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Spine"}</h3>
              <p className="module-modality">{"X-ray / MRI / USG"}</p>
              <p>
                {
                  "Detects degenerative changes, disc abnormalities and spinal injuries."
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
              "Comprehensive AI-assisted assessment across bones, muscles, tendons, ligaments and spine for early detection and better patient outcomes."
            }
          </p>
          <div className="clinical-source-steps"></div>
          <div className="pills"></div>
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
        <a href="/solutions/thoracic-intelligence/">
          {"Thoracic Intelligence "}
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
