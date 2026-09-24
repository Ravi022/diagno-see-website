import ProductPreview from "@/components/ProductPreview";
import Walkthrough from "@/components/Walkthrough";
export const metadata = {
  title: "Connecting Imaging to Actionable Care. Strengthening Healthcare.",
  description:
    "DiagnoSee connects imaging, AI-assisted analysis, radiologist review, referrals and follow-up in one diagnostic platform.",
};
export default function Page() {
  return (
    <main id="main">
      <section className="ppt-hero">
        <div className="wrap">
          <div className="ppt-hero-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"Built for Strengthening Healthcare"}
              </p>
              <h1>
                {"Connecting Imaging"}
                <br />
                {"to "}
                <span>{"Actionable Care."}</span>
                <br />
                {"Strengthening Healthcare."}
              </h1>
            </div>
            <div className="ppt-hero-actions">
              <a className="button primary" href="/platform/">
                {"Explore the Platform"}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              <a className="button text" href="#how-it-works">
                {"How DiagnoSee Works"}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </div>
          </div>
          <div className="ppt-hero-stage">
            <div className="ppt-stage-copy">
              <p>
                {
                  "DiagnoSee brings imaging, AI intelligence, specialist expertise, and operational visibility together in one secure platform—designed to scale from individual facilities to population-wide healthcare networks."
                }
              </p>
              <ol className="ppt-stage-pillars">
                <li>
                  <a href="/platform/#connect">
                    <span>{"01"}</span>
                    {"Connect"}
                    <b>{"↗"}</b>
                  </a>
                </li>
                <li>
                  <a href="/platform/#interpret">
                    <span>{"02"}</span>
                    {"Interpret"}
                    <b>{"↗"}</b>
                  </a>
                </li>
                <li>
                  <a href="/platform/#refer">
                    <span>{"03"}</span>
                    {"Refer"}
                    <b>{"↗"}</b>
                  </a>
                </li>
                <li>
                  <a href="/platform/#track">
                    <span>{"04"}</span>
                    {"Track"}
                    <b>{"↗"}</b>
                  </a>
                </li>
                <li>
                  <a href="/platform/#act">
                    <span>{"05"}</span>
                    {"Act"}
                    <b>{"↗"}</b>
                  </a>
                </li>
              </ol>
            </div>
            <div className="hero-product">
              <ProductPreview />
            </div>
          </div>
        </div>
      </section>
      <section className="section ppt-platform">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"Platform"}
              </p>
              <h2>{"One Platform. Every Layer of Diagnostic Care."}</h2>
            </div>
            <p className="section-intro">
              {"Built for One Hospital. Designed for an Entire Network."}
            </p>
          </div>
          <div className="ppt-pillars">
            <a className="ppt-pillar" href="/platform/#connect">
              <span className="pillar-label">{"01 / CONNECT"}</span>
              <h3>{"Bring the diagnostic network together."}</h3>
              <p>
                {
                  "Connect imaging devices, facilities, specialists and healthcare systems through one secure platform."
                }
              </p>
            </a>
            <a className="ppt-pillar" href="/platform/#interpret">
              <span className="pillar-label">{"02 / INTERPRET"}</span>
              <h3>{"Turn every scan into structured insight."}</h3>
              <p>
                {
                  "Enable structured imaging workflows, specialist reporting and AI- assisted interpretation while keeping clinicians in control"
                }
              </p>
            </a>
            <a className="ppt-pillar" href="/platform/#refer">
              <span className="pillar-label">{"03 / REFER"}</span>
              <h3>{"Move the right cases to the right expertise"}</h3>
              <p>
                {
                  "Identify cases requiring specialist attention and enable seamless referral and consultation across the network"
                }
              </p>
            </a>
            <a className="ppt-pillar" href="/platform/#track">
              <span className="pillar-label">{"04 / TRACK"}</span>
              <h3>{"Know what happens to every case"}</h3>
              <p>
                {
                  "Track reporting, referrals, follow-ups and turnaround times across facilities- individuals to programmes."
                }
              </p>
            </a>
            <a className="ppt-pillar" href="/platform/#act">
              <span className="pillar-label">{"05 / ACT"}</span>
              <h3>{"Turn visibility into action"}</h3>
              <p>
                {
                  "Give teams the information they need to act sooner; strengthen delivery across health systems"
                }
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="section ppt-clinical">
        <div className="wrap">
          <div className="ppt-clinical-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"INTELLIGENT CLINICAL WORKFLOW"}
              </p>
              <h2>
                {"Automation that accelerates workflow."}
                <br />
                <span>{"Radiologists who command it."}</span>
              </h2>
            </div>
            <p>
              {
                "Our proprietary models pre-draft reports in milliseconds, flagging critical anomalies for immediate review. Built with mandatory Human-in-the-Loop (HITL) architecture—the radiologist always has the final word."
              }
            </p>
          </div>
          <div className="ppt-solutions">
            <a
              className="ppt-solution"
              href="/solutions/thoracic-intelligence/"
            >
              <div>
                <img
                  src="/assets/lungs.webp"
                  alt="Thoracic Intelligence conceptual illustration"
                  width="1536"
                  height="1024"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Thoracic Intelligence"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/maternal-monitoring/">
              <div>
                <img
                  src="/assets/maternal-care.webp"
                  alt="Maternal monitoring conceptual illustration"
                  width="1536"
                  height="1024"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Maternal monitoring"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/infectious-disease/">
              <div>
                <img
                  src="/assets/deck/dengue.webp"
                  alt="Infectious Disease conceptual illustration"
                  width="550"
                  height="540"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Infectious Disease"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/icu-trauma/">
              <div>
                <img
                  src="/assets/deck/trauma.webp"
                  alt="ICU and Trauma conceptual illustration"
                  width="1536"
                  height="1024"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"ICU and Trauma"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/womens-health/">
              <div>
                <img
                  src="/assets/deck/women.webp"
                  alt="Women’s Health conceptual illustration"
                  width="1402"
                  height="1122"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Women’s Health"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/mens-health/">
              <div>
                <img
                  src="/assets/urinary.webp"
                  alt="Men’s Health conceptual illustration"
                  width="1536"
                  height="1024"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Men’s Health"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/cancer/">
              <div>
                <img
                  src="/assets/deck/thoracic.webp"
                  alt="Cancer conceptual illustration"
                  width="435"
                  height="453"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Cancer"}
                <span>{"↗"}</span>
              </h3>
            </a>
            <a className="ppt-solution" href="/solutions/bones-muscles/">
              <div>
                <img
                  src="/assets/knee.webp"
                  alt="Bones and Muscles conceptual illustration"
                  width="1536"
                  height="1024"
                  className=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>
                {"Bones and Muscles"}
                <span>{"↗"}</span>
              </h3>
            </a>
          </div>
        </div>
      </section>
      <Walkthrough />
      <section className="section ppt-continuity">
        <div className="wrap ppt-care-grid">
          <div>
            <p className="eyebrow">
              <span></span>
              {"DiagnoSee"}
            </p>
            <h2>{"From Diagnosis to Follow-up"}</h2>
            <p>
              {
                "Track the diagnostic journey beyond the report – from identified findings and referrals to follow-up and outcomes across facilities and health programmes."
              }
            </p>
            <div className="ppt-care-labels">
              <span>{"TB Screening"}</span>
              <span>{"Emergency help"}</span>
              <span>{"Bone health"}</span>
              <span>{"Maternal care"}</span>
              <span>{"Women’s health"}</span>
              <span>{"Cancer alarms"}</span>
              <span>{"NCD Screening"}</span>
              <span>{"Infection"}</span>
            </div>
            <a className="button text" href="/platform/">
              {"Explore the Platform"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
          <figure>
            <img
              src="/assets/care-continuity.webp"
              alt="Conceptual illustration of a clinician discussing care with a patient"
              width="1672"
              height="940"
              className=""
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div className="wrap ppt-care-detail">
          <div className="care-editorial">
            <article>
              <img
                src="/assets/deck/care-imaging.webp"
                alt="IMAGING CASE illustration from the presentation"
                width="914"
                height="578"
                className=""
                loading="lazy"
                decoding="async"
              />
              <p className="eyebrow">{"IMAGING CASE"}</p>
              <h3>{"Patient is scanned at a facility."}</h3>
              <p></p>
              <div className="pills">
                <span>{"Patient registration"}</span>
                <span>{"Imaging via DICOM"}</span>
                <span>{"Data securely captured"}</span>
                <span>{"Facility connected"}</span>
              </div>
            </article>
            <article>
              <img
                src="/assets/deck/care-findings.webp"
                alt="FINDING / ALARM illustration from the presentation"
                width="1185"
                height="565"
                className=""
                loading="lazy"
                decoding="async"
              />
              <p className="eyebrow">{"FINDING / ALARM"}</p>
              <h3>{"AI and radiologist identify key findings."}</h3>
              <p></p>
              <div className="pills">
                <span>{"AI-assisted findings"}</span>
                <span>{"Standardized reporting"}</span>
                <span>{"Critical alarms / tags"}</span>
                <span>{"Radiologist review"}</span>
              </div>
            </article>
            <article>
              <img
                src="/assets/deck/care-referral.webp"
                alt="REFERRAL illustration from the presentation"
                width="921"
                height="588"
                className=""
                loading="lazy"
                decoding="async"
              />
              <p className="eyebrow">{"REFERRAL"}</p>
              <h3>{"Move the right cases to the right expertise."}</h3>
              <p></p>
              <div className="pills">
                <span>{"Specialist access"}</span>
                <span>{"Referral workflows"}</span>
                <span>{"Alerts & notifications"}</span>
              </div>
            </article>
            <article>
              <img
                src="/assets/deck/care-followup.webp"
                alt="FOLLOW-UP & OUTCOME illustration from the presentation"
                width="1080"
                height="515"
                className=""
                loading="lazy"
                decoding="async"
              />
              <p className="eyebrow">{"FOLLOW-UP & OUTCOME"}</p>
              <h3>{"Track patient progress to ensure better care."}</h3>
              <p></p>
              <div className="pills">
                <span>{"Patient tracking"}</span>
                <span>{"Timely reminders"}</span>
                <span>{"Improved outcomes"}</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section ppt-challenges" id="impact">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"Healthcare"}
              </p>
              <h2>
                {
                  "The Gaps in the healthcare infrastructure shouldn't cost lives."
                }
              </h2>
            </div>
            <p className="section-intro">
              {
                "Across vast rural populations, severe radiologist shortages lead to informal WhatsApp consultations, misdiagnoses, and critical reporting delays. The infrastructure is broken."
              }
            </p>
          </div>
          <div className="ppt-challenge-grid">
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
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4c2 1 3 3 3 6"></path>
              </svg>
              <h3>{"1 Radiologist Per 100,000 People"}</h3>
              <p>
                {
                  "Rural areas face an extreme radiologist deficit, leaving district hospitals completely unequipped to handle complex imaging."
                }
              </p>
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
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <h3>{"3-Week Reporting Delays"}</h3>
              <p>
                {
                  "Tuberculosis and high-risk pregnancy scans take weeks to be manually reported, leading to devastating treatment delays."
                }
              </p>
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
              <h3>{"Unregulated Sharing"}</h3>
              <p>
                {
                  "Clinicians resort to sending photos of X-rays via WhatsApp, violating patient privacy and sacrificing diagnostic quality."
                }
              </p>
            </article>
          </div>
          <p className="footnote">
            {
              "Illustrative scenario from the presentation; not a verified national estimate."
            }
          </p>
        </div>
      </section>
      <section className="section ppt-dashboard">
        <div className="wrap">
          <div>
            <p className="eyebrow">
              <span></span>
              {"PROGRAMME DASHBOARD"}
            </p>
            <h2>{"From individual cases to system-level visibility."}</h2>
            <a className="button text" href="/platform/#programme">
              {"Explore the Platform"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
          <div className="ppt-dashboard-image">
            <img
              src="/assets/deck/programme-dashboard.webp"
              alt="Programme dashboard illustration supplied in the presentation"
              width="2080"
              height="756"
              className=""
              loading="lazy"
              decoding="async"
            />
            <small>{"Illustrative programme data."}</small>
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
