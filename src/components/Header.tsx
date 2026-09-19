"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Framework", "#framework"],
  ["Resources", "#resources"],
  ["Programs", "#programs"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="wise parenting home">
        <Image
          className="brand-logo"
          src="/images/wise-parenting-logo.png"
          alt=""
          width={1254}
          height={1254}
          priority
        />
        <span className="brand-copy">
          <strong>Wise Parenting</strong>
          <small>with Alizah Taha</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Primary navigation">
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <a className="button button-small" href="#programs" onClick={() => setOpen(false)}>Explore programs</a>
      </nav>
    </header>
  );
}
