const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const toast = document.querySelector(".toast");
let toastTimer;

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
  localStorage.setItem("kaizen-brand-theme", theme);
};

const savedTheme = localStorage.getItem("kaizen-brand-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (preferredDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "light" ? "dark" : "light");
});

const showToast = (message) => {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1600);
};

document.querySelectorAll("[data-copy]").forEach((element) => {
  element.addEventListener("click", async () => {
    const value = element.dataset.copy;
    await navigator.clipboard.writeText(value);
    showToast(`${value} copied`);
  });
});

document.querySelector(".copy-tokens").addEventListener("click", async () => {
  const tokens = `--kaizen-violet: #6E40F3;
--kaizen-midnight: #281B55;
--kaizen-aquamarine: #66E6B5;
--kaizen-lavender: #F5F7FC;
--kaizen-light-lilac: #E3E3FB;
--kaizen-plum: #362265;
--kaizen-dark-plum: #201839;`;
  await navigator.clipboard.writeText(tokens);
  showToast("Core CSS tokens copied");
});
