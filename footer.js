// footer.js — single source of truth for site footer
// To update contact links, edit ONLY this file.

(function () {
  const html = `
    <footer>
      <div class="container">
        <div class="contact-row">
          <span class="contact-label">Get in touch</span>
          <a href="https://www.linkedin.com/in/kr369/" target="_blank" class="contact-link">LinkedIn ↗</a>
          <a href="https://github.com/kcrachapudi"      target="_blank" class="contact-link">GitHub ↗</a>
          <a href="mailto:kcrachapudi@gmail.com"        class="contact-link">Email ↗</a>
        </div>
        <p class="footer-copy">© 2026 Kalyan Rachapudi · Built with GitHub Pages</p>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("beforeend", html);
})();
