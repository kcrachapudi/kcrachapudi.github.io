// nav.js — single source of truth for site navigation
// To add/rename a page or update your name, edit ONLY this file.
(function () {
  const links = [
    { href: "index.html",            label: "Home" },
    { href: "biomedtech.html",       label: "BioMedTech" },
    { href: "fintech.html",          label: "FinTech" },
    { href: "data-analytics.html",   label: "Data Analytics" },
    { href: "data-engineering.html", label: "Data Engineering" },
    { href: "observability.html",    label: "Observability & SIEM" },
    { href: "devops.html",           label: "DevOps" },
    { href: "infrastructure.html",   label: "Infrastructure" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = links
    .map(l => {
      const active = (l.href === current || (current === "" && l.href === "index.html"))
        ? ' class="active"' : "";
      return `<a href="${l.href}"${active}>${l.label}</a>`;
    })
    .join("");

  const eduActive = current === "education.html" ? ' nav-edu-active' : '';

  const html = `
    <nav>
      <div class="nav-inner">
        <div class="nav-left">
          <a href="index.html" class="nav-logo">Kalyan Rachapudi</a>
          <a href="education.html" class="nav-edu${eduActive}">Education &amp; Certifications</a>
        </div>
        <div class="nav-links">${navLinks}</div>
      </div>
    </nav>`;

  document.body.insertAdjacentHTML("afterbegin", html);
})();
