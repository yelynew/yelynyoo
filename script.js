// Theme toggle (follows the OS until the visitor picks one) and
// active-section highlighting in the nav. Nothing else.

const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const label = document.querySelector(".theme-label");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function syncThemeUI() {
  const theme = currentTheme();
  const next = theme === "dark" ? "light" : "dark";
  if (label) label.textContent = next === "dark" ? "Dark" : "Light";
  toggle?.setAttribute("aria-label", `Switch to ${next} theme`);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#131312" : "#f6f5f1");
}

toggle?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("yy-theme", next);
  } catch (e) {
    /* storage unavailable — theme still applies for this visit */
  }
  syncThemeUI();
});

systemDark.addEventListener?.("change", syncThemeUI);
syncThemeUI();

// Active section in nav
const links = [...document.querySelectorAll('.site-nav a[href^="#"], .tabbar a[href^="#"]')];
const sections = [...new Set(links.map((a) => a.getAttribute("href")))]
  .map((href) => document.querySelector(href))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

// Installable web app: cache the site for offline use (HTTPS or localhost only).
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* offline support is optional */
    });
  });
}
