const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const year = document.querySelector("[data-year]");
const quoteForm = document.querySelector("[data-quote-form]");
const revealItems = document.querySelectorAll(".reveal");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", setHeaderState, { passive: true });
year.textContent = new Date().getFullYear();
setHeaderState();

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const urgency = String(formData.get("urgency") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const reference = String(formData.get("reference") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const channel = String(formData.get("channel") || "whatsapp");

    const requestText = [
      "Hola Nexora, quiero una cotización rápida.",
      "",
      `Nombre: ${name}`,
      `WhatsApp: ${phone || "No indicado"}`,
      `Servicio: ${service}`,
      `Urgencia: ${urgency || "No indicada"}`,
      `Presupuesto aproximado: ${budget || "No indicado"}`,
      `Referencia: ${reference || "No indicada"}`,
      `Idea: ${message}`,
    ].join("\n");

    if (channel === "email") {
      const subject = encodeURIComponent(`Cotización Nexora - ${service}`);
      const body = encodeURIComponent(requestText);
      window.location.href = `mailto:equiponexorahelp@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    if (channel === "telegram") {
      window.open("https://t.me/OficialNexora", "_blank", "noopener,noreferrer");
      return;
    }

    window.open(`https://wa.me/51987292169?text=${encodeURIComponent(requestText)}`, "_blank", "noopener,noreferrer");
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (window.lucide) {
  window.lucide.createIcons();
}
