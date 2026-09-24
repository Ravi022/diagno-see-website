import Dashboard from "@/components/Dashboard";
export const metadata = {
  title: "The connected diagnostic platform",
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
            {"Platform"}
          </p>
          <h1>{"One Platform. Every Layer of Diagnostic Care."}</h1>
          <p>
            {
              "DiagnoSee brings imaging, AI intelligence, specialist expertise, and operational visibility together in one secure platform—designed to scale from individual facilities to population-wide healthcare networks."
            }
          </p>
          <a className="button white" href="#programme">
            {"Explore programme visibility"}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
        <div className="hero-coordinate">{"DIAGNOSEE / CONNECTED CARE"}</div>
      </section>
      <nav className="section-nav" aria-label="Platform sections">
        <div className="wrap">
          <a href="#connect">{"Connect"}</a>
          <a href="#interpret">{"Interpret"}</a>
          <a href="#refer">{"Refer"}</a>
          <a href="#track">{"Track"}</a>
          <a href="#act">{"Act"}</a>
          <a href="#programme">{"Programme dashboard"}</a>
        </div>
      </nav>
      <section className="pillar-detail soft" id="connect">
        <div className="wrap">
          <div className="pillar-number">{"01"}</div>
          <div>
            <p className="eyebrow">{"CONNECT"}</p>
            <h2>{"Bring the diagnostic network together."}</h2>
            <p>
              {
                "Connect imaging devices, facilities, specialists and healthcare systems through one secure platform."
              }
            </p>
            <div className="pills">
              <span>{"Imaging connectivity"}</span>
              <span>{"Facility network"}</span>
              <span>{"Interoperability"}</span>
              <span>{"ABDM"}</span>
            </div>
          </div>
          <figure>
            <div className="signal-diagram specification">
              <p className="spec-title">{"Connect"}</p>
              <ul>
                <li>{"Imaging connectivity"}</li>
                <li>{"Facility network"}</li>
                <li>{"Interoperability"}</li>
                <li>{"ABDM"}</li>
              </ul>
            </div>
            <figcaption>{"Connect / DiagnoSee platform"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="pillar-detail" id="interpret">
        <div className="wrap">
          <div className="pillar-number">{"02"}</div>
          <div>
            <p className="eyebrow">{"INTERPRET"}</p>
            <h2>{"Turn every scan into structured insight."}</h2>
            <p>
              {
                "Enable structured imaging workflows, specialist reporting and AI- assisted interpretation while keeping clinicians in control"
              }
            </p>
            <div className="pills">
              <span>{"Structured reporting"}</span>
              <span>{"AI assistance"}</span>
              <span>{"Specialist review"}</span>
            </div>
          </div>
          <figure>
            <div className="signal-diagram specification">
              <p className="spec-title">{"Interpret"}</p>
              <ul>
                <li>{"Structured reporting"}</li>
                <li>{"AI assistance"}</li>
                <li>{"Specialist review"}</li>
              </ul>
            </div>
            <figcaption>{"Interpret / DiagnoSee platform"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="pillar-detail soft" id="refer">
        <div className="wrap">
          <div className="pillar-number">{"03"}</div>
          <div>
            <p className="eyebrow">{"REFER"}</p>
            <h2>{"Move the right cases to the right expertise"}</h2>
            <p>
              {
                "Identify cases requiring specialist attention and enable seamless referral and consultation across the network"
              }
            </p>
            <div className="pills">
              <span>{"Specialist access"}</span>
              <span>{"Referral workflows"}</span>
              <span>{"Alerts & notifications"}</span>
            </div>
          </div>
          <figure>
            <div className="signal-diagram specification">
              <p className="spec-title">{"Refer"}</p>
              <ul>
                <li>{"Specialist access"}</li>
                <li>{"Referral workflows"}</li>
                <li>{"Alerts & notifications"}</li>
              </ul>
            </div>
            <figcaption>{"Refer / DiagnoSee platform"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="pillar-detail" id="track">
        <div className="wrap">
          <div className="pillar-number">{"04"}</div>
          <div>
            <p className="eyebrow">{"TRACK"}</p>
            <h2>{"Know what happens to every case"}</h2>
            <p>
              {
                "Track reporting, referrals, follow-ups and turnaround times across facilities- individuals to programmes."
              }
            </p>
            <div className="pills">
              <span>{"Case tracking"}</span>
              <span>{"Follow-up"}</span>
              <span>{"Turnaround time"}</span>
              <span>{"Network visibility"}</span>
            </div>
          </div>
          <figure>
            <div className="signal-diagram specification">
              <p className="spec-title">{"Track"}</p>
              <ul>
                <li>{"Case tracking"}</li>
                <li>{"Follow-up"}</li>
                <li>{"Turnaround time"}</li>
                <li>{"Network visibility"}</li>
              </ul>
            </div>
            <figcaption>{"Track / DiagnoSee platform"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="pillar-detail soft" id="act">
        <div className="wrap">
          <div className="pillar-number">{"05"}</div>
          <div>
            <p className="eyebrow">{"ACT"}</p>
            <h2>{"Turn visibility into action"}</h2>
            <p>
              {
                "Give teams the information they need to act sooner; strengthen delivery across health systems"
              }
            </p>
            <div className="pills">
              <span>{"Actionable insights"}</span>
              <span>{"Care coordination"}</span>
              <span>{"Programme intelligence"}</span>
            </div>
          </div>
          <figure>
            <div className="signal-diagram specification">
              <p className="spec-title">{"Act"}</p>
              <ul>
                <li>{"Actionable insights"}</li>
                <li>{"Care coordination"}</li>
                <li>{"Programme intelligence"}</li>
              </ul>
            </div>
            <figcaption>{"Act / DiagnoSee platform"}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"CARE CONTINUITY"}
              </p>
              <h2>{"From Diagnosis to Follow-up"}</h2>
            </div>
            <p className="section-intro">
              {
                "Track the diagnostic journey beyond the report – from identified findings and referrals to follow-up and outcomes across facilities and health programmes."
              }
            </p>
          </div>
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
      <details className="dashboard-demonstration" id="programme">
        <summary>
          {"Explore a dashboard demonstration "}
          <span>{"Uses sample data"}</span>
        </summary>
        <section className="section dark" id="programme-demo">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span></span>
                  {"PROGRAMME DASHBOARD"}
                </p>
                <h2>
                  {"From individual cases"}
                  <br />
                  <span>{"to system-level visibility."}</span>
                </h2>
              </div>
              <p className="section-intro">
                {
                  "Explore an illustrative programme overview. Change the programme and dates to see cases, referral progress and facility activity."
                }
              </p>
            </div>
            <Dashboard />
            <div className="dashboard-value">
              <span>{"Monitor programme progress"}</span>
              <span>{"Identify cases needing attention"}</span>
              <span>{"Compare facility activity"}</span>
              <span>{"Support informed decisions"}</span>
            </div>
          </div>
        </section>
      </details>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span></span>
                {"THE INFRASTRUCTURE GAP"}
              </p>
              <h2>{"Why connection matters."}</h2>
            </div>
            <p className="section-intro">
              {
                "Limited specialist availability, reporting delays and informal image sharing can interrupt the patient’s diagnostic journey."
              }
            </p>
          </div>
          <figure className="challenge-figure">
            <div className="signal-diagram specification">
              <p className="spec-title">{"Connect the gaps"}</p>
              <ul>
                <li>{"Specialist access"}</li>
                <li>{"Timely reporting"}</li>
                <li>{"Secure image sharing"}</li>
              </ul>
            </div>
            <figcaption>
              {
                "Illustrative scenario from the supplied platform presentation, not a verified national estimate."
              }
            </figcaption>
          </figure>
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
