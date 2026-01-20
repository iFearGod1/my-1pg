// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

// Accordion
document.querySelectorAll("[data-accordion]").forEach((wrap) => {
  const buttons = wrap.querySelectorAll(".acc-item");

  buttons.forEach((btn) => {
    const panel = btn.nextElementSibling;
    const icon = btn.querySelector(".acc-icon");

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      buttons.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling.hidden = true;
        b.querySelector(".acc-icon").textContent = "+";
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        icon.textContent = "–";
      }
    });
  });
});
