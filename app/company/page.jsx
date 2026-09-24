export const metadata = {
  title: "Building the modern diagnostic enterprise",
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
            {"Company"}
          </p>
          <h1>{"Building the Modern Diagnostic Enterprise."}</h1>
          <p>
            {
              "DiagnoSee was founded on a singular premise: delivering world-class radiology shouldn't be constrained by heavy IT costs, slow reporting cycles, or radiologist burnout."
            }
          </p>
        </div>
        <div className="hero-coordinate">{"DIAGNOSEE / CONNECTED CARE"}</div>
      </section>
      <section className="section">
        <div className="wrap company-original">
          <div>
            <img
              src="/assets/hero-v2.webp"
              alt="Conceptual illustration of a diagnostic reading room"
              width="1672"
              height="941"
              className=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span></span>
              {"DiagnoSee"}
            </p>
            <p className="company-copy">
              {
                "We are a team of clinicians, deep-learning engineers, and healthcare technologists building the secure, cloud-native infrastructure required to make diagnostic centers faster, smarter, and infinitely scalable. We design tools that work for doctors, seamlessly blending AI with everyday clinical workflows."
              }
            </p>
          </div>
        </div>
      </section>
      <section className="mission-section dark">
        <div className="wrap">
          <p className="eyebrow">
            <span></span>
            {"OUR MISSION"}
          </p>
          <h2>
            {
              "To empower healthcare networks with scalable, secure, and clinically validated AI infrastructure that accelerates diagnosis and drives operational excellence."
            }
          </h2>
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
