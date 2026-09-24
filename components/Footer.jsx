export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div>
            <a href="/" className="brand">
              <img
                src="/assets/logo.webp"
                alt="DiagnoSee home"
                width="896"
                height="280"
                className=""
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>
              {"Connecting Imaging to Actionable Care."}
              <br />
              {"Strengthening Healthcare."}
            </p>
          </div>
          <div>
            <h3>{"Explore"}</h3>
            <a href="/platform/">{"The platform"}</a>
            <a href="/workflow/">{"Connected workflow"}</a>
            <a href="/platform/#programme">{"Programme visibility"}</a>
            <a href="/company/">{"Our company"}</a>
          </div>
          <div>
            <h3>{"Clinical solutions"}</h3>
            <a href="/solutions/thoracic-intelligence/">
              {"Thoracic intelligence"}
            </a>
            <a href="/solutions/maternal-monitoring/">
              {"Maternal monitoring"}
            </a>
            <a href="/solutions/infectious-disease/">{"Infectious disease"}</a>
            <a href="/solutions/">{"All eight solutions ↗"}</a>
          </div>
          <div className="footer-purpose">
            <h3>{"One connected care continuum."}</h3>
            <p>
              {
                "From frontline imaging to specialist decisions, referrals and follow-up."
              }
            </p>
            <button className="text-button demo-trigger">
              {"Prepare a briefing "}
              <span aria-hidden="true">{"↗"}</span>
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            {"© "}
            <span className="year">{"2026"}</span>
            {" DiagnoSee"}
          </span>
          <span>
            {"Connecting Imaging to Actionable Care. Strengthening Healthcare."}
          </span>
          <a href="#top">{"Back to top ↑"}</a>
        </div>
      </div>
    </footer>
  );
}
