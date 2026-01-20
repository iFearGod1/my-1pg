// script.js — clean + only what we need (accordion + year + smooth scroll)

(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for same-page anchors
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  });

  // Nutrition accordion (only inside [data-accordion])
  const acc = document.querySelector("[data-accordion]");
  if (!acc) return;

  const items = Array.from(acc.querySelectorAll(".acc-item"));

  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel || !panel.classList.contains("acc-panel")) return;

      const isOpen = btn.getAttribute("aria-expanded") === "true";

      // close all
      items.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.nextElementSibling;
        if (p && p.classList.contains("acc-panel")) {
          p.style.display = "none";
          const icon = b.querySelector(".acc-icon");
          if (icon) icon.textContent = "+";
        }
      });

      // open clicked if it was closed
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        panel.style.display = "block";
        const icon = btn.querySelector(".acc-icon");
        if (icon) icon.textContent = "–";
      }
    });
  });
})();
