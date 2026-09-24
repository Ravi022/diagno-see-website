export const metadata = {
  title: "Men’s Health",
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
              {"URINARY SYSTEM / USG"}
            </p>
            <h1>{"Men’s Health"}</h1>
            <p>
              {
                "Flagging necessary programs, hospital departments and institutes for confirmatory assessment"
              }
            </p>
            <button
              className="button white demo-trigger"
              type="button"
              data-interest="Men’s Health"
            >
              {"Prepare a solution briefing"}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
          <figure>
            <img
              src="/assets/deck/men.webp"
              alt="Men’s Health illustration from the presentation"
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
              data-expand="/assets/deck/men.webp"
              data-caption="Men’s Health — clinical illustration from the DiagnoSee presentation"
              aria-label="Expand clinical illustration"
            >
              <img
                src="/assets/deck/men.webp"
                alt="Men’s Health clinical illustration"
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
                  src="/assets/deck/men-0.webp"
                  alt="Kidney USG illustration"
                  width="268"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Kidney USG"}</h3>
              <p className="module-modality">{"Renal imaging"}</p>
              <p>
                {"Detects stones, masses, cysts and structural abnormalities."}
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-1.webp"
                  alt="Ureter USG illustration"
                  width="280"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Ureter USG"}</h3>
              <p className="module-modality">{"Ureteric imaging"}</p>
              <p>{"Identifies dilatation, obstruction and calculi."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-2.webp"
                  alt="Urinary bladder USG illustration"
                  width="280"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Urinary bladder USG"}</h3>
              <p className="module-modality">{"Bladder imaging"}</p>
              <p>
                {
                  "Detects wall thickening, stones, masses and residual urine volume."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-3.webp"
                  alt="Prostate USG illustration"
                  width="281"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Prostate USG"}</h3>
              <p className="module-modality">{"Prostate imaging"}</p>
              <p>
                {"Assesses prostate size, enlargement and suspicious lesions."}
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-4.webp"
                  alt="Testis & scrotal USG illustration"
                  width="288"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Testis & scrotal USG"}</h3>
              <p className="module-modality">{"Scrotal imaging"}</p>
              <p>
                {
                  "Detects masses, torsion, varicocele, hydrocele and inflammation."
                }
              </p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-5.webp"
                  alt="Adrenal gland USG illustration"
                  width="283"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Adrenal gland USG"}</h3>
              <p className="module-modality">{"Adrenal imaging"}</p>
              <p>{"Identifies adrenal masses and incidental findings."}</p>
            </article>
            <article>
              <div>
                <img
                  src="/assets/deck/men-6.webp"
                  alt="Urethra USG illustration"
                  width="269"
                  height="130"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{"Urethra USG"}</h3>
              <p className="module-modality">{"Urethral imaging"}</p>
              <p>{"Helps evaluate urethral strictures and abnormalities."}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <p className="clinical-source-intro">
            {
              "Comprehensive AI-assisted assessment across key organs for early detection and better patient outcomes."
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
        <a href="/solutions/cancer/">
          {"Cancer "}
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
