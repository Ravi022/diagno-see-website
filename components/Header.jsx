"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  ["Platform", "/platform/"],
  ["Workflow", "/workflow/"],
  ["Solutions", "/solutions/"],
  ["Company", "/company/"],
  ["Impact", "/#impact"],
];
export default function Header() {
  const [open, setOpen] = useState(false),
    [progress, setProgress] = useState(0),
    [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    let frame;
    const update = () => {
      const range = document.documentElement.scrollHeight - innerHeight;
      setProgress(range > 0 ? Math.min(100, (scrollY / range) * 100) : 0);
      setScrolled(scrollY > 110);
    };
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("keydown", key);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
        <div className="header-inner">
          <a href="/" className="brand" aria-label="DiagnoSee home">
            <img src="/assets/logo.webp" alt="DiagnoSee" />
          </a>
          <nav
            className={"main-nav" + (open ? " open" : "")}
            id="main-nav"
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                aria-current={
                  path.startsWith(href.replace(/\/$/, "")) &&
                  href !== "/#impact"
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <button className="button header-cta demo-trigger" type="button">
            Request a Demo <span aria-hidden="true">↗</span>
          </button>
          <button
            className="menu-toggle"
            aria-controls="main-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="reading-progress" style={{ width: progress + "%" }} />
      </header>
    </>
  );
}
