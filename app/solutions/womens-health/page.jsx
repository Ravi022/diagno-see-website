export const metadata = {
  title: "Women’s Health",
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
              {"MULTI-ORGAN IMAGING"}
            </p>
            <h1>{"Women’s Health"}</h1>
            <p>
              {
                "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Women’s Health"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/women.webp"
              alt="Women’s Health illustration from the presentation"
              width="1402"
              height="1122"
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
              data-expand="/assets/deck/women.webp"
              data-caption="Women’s Health — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/women.webp"
                alt="Women’s Health clinical illustration"
                width="1402"
                height="1122"
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
                  src="/assets/deck/women-breast.webp"
                  alt="Breast USG illustration"
                  width="240"
                  height="172"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Breast USG"}</h3>
              <p className="module-modality">{"Breast imaging"}</p>
              <p>{"Detects suspicious masses and abnormal lesions early."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/women-thyroid.webp"
                  alt="Thyroid USG illustration"
                  width="237"
                  height="172"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Thyroid USG"}</h3>
              <p className="module-modality">{"Thyroid imaging"}</p>
              <p>{"Identifies thyroid nodules and risk features."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/women-pelvis.webp"
                  alt="Pelvis USG illustration"
                  width="238"
                  height="172"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Pelvis USG"}</h3>
              <p className="module-modality">{"Pelvic imaging"}</p>
              <p>{"Detects ovarian, uterine and pelvic abnormalities."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/women-bone.webp"
                  alt="Bone health illustration"
                  width="240"
                  height="172"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Bone health"}</h3>
              <p className="module-modality">{"DXA / X-ray"}</p>
              <p>{"Assesses bone density and flags osteoporosis risk."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/women-urinary.webp"
                  alt="Urinary tract USG illustration"
                  width="240"
                  height="172"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Urinary tract USG"}</h3>
              <p className="module-modality">{"Urinary imaging"}</p>
              <p>{"Identifies renal, ureteric and bladder abnormalities."}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <p className="clinical-source-intro">
            {
              "Comprehensive imaging support across every stage of a woman’s health journey."
            }
          </p>
          <div className="clinical-source-steps"></div>
          <div className="pills">
            <span>
              {"Early detection and risk assessment at the point of care"}
            </span>
          </div>
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
        <a href="/solutions/mens-health/">
          {"Men’s Health "}
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
