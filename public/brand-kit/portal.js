const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const foundationGrid = document.querySelector("#foundation-grid");
const componentGrid = document.querySelector("#component-grid");
const specimenTemplate = document.querySelector("#specimen-template");
const previewDialog = document.querySelector(".preview-dialog");
const dialogFrame = document.querySelector(".dialog-frame");
const dialogGroup = document.querySelector(".dialog-group");
const dialogTitle = document.querySelector(".dialog-title");
const openPage = document.querySelector(".open-page");
const foundationGroups = new Set(["Brand", "Colors", "Type", "Spacing"]);

let manifest;
let activeFoundationGroup = "all";

const syncFrameTheme = (frame) => {
  try {
    frame.contentDocument.documentElement.dataset.theme = root.dataset.theme;
  } catch {
    // A preview may still be loading or use a restricted document.
  }
};

const syncAllFrames = () => {
  document.querySelectorAll("iframe").forEach(syncFrameTheme);
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeLabel.textContent = theme === "light" ? "Dark" : "Light";
  themeToggle.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark mode" : "Switch to light mode",
  );
  localStorage.setItem("kaizen-design-system-theme", theme);
  window.setTimeout(syncAllFrames, 0);
};

const savedTheme = localStorage.getItem("kaizen-design-system-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "light" ? "dark" : "light");
});

const viewportHeight = (viewport) => {
  const height = Number(viewport?.split("x")[1]) || 240;
  return Math.max(170, Math.min(height + 2, 480));
};

const openPreview = (card) => {
  dialogGroup.textContent = card.group;
  dialogTitle.textContent = card.name;
  dialogFrame.src = `./${card.path}`;
  openPage.href = `./${card.path}`;
  previewDialog.showModal();
};

const createCard = (card) => {
  const fragment = specimenTemplate.content.cloneNode(true);
  const article = fragment.querySelector(".specimen-card");
  const group = fragment.querySelector(".specimen-group");
  const title = fragment.querySelector(".specimen-title");
  const subtitle = fragment.querySelector(".specimen-subtitle");
  const frame = fragment.querySelector(".specimen-frame");
  const previewButton = fragment.querySelector(".preview-button");

  article.dataset.group = card.group;
  group.textContent = card.group;
  title.textContent = card.name;
  subtitle.textContent = card.subtitle;
  frame.src = `./${card.path}`;
  frame.title = `${card.name} specimen`;
  frame.style.height = `${viewportHeight(card.viewport)}px`;
  frame.addEventListener("load", () => syncFrameTheme(frame));
  previewButton.addEventListener("click", () => openPreview(card));

  return fragment;
};

const renderFoundations = () => {
  foundationGrid.replaceChildren();
  manifest.cards
    .filter((card) => foundationGroups.has(card.group))
    .filter(
      (card) =>
        activeFoundationGroup === "all" || card.group === activeFoundationGroup,
    )
    .forEach((card) => foundationGrid.append(createCard(card)));
};

const renderComponents = () => {
  componentGrid.replaceChildren();
  manifest.cards
    .filter((card) => card.group === "Components")
    .forEach((card) => componentGrid.append(createCard(card)));
};

document.querySelectorAll("[data-group-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFoundationGroup = button.dataset.groupFilter;
    document.querySelectorAll("[data-group-filter]").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    renderFoundations();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  previewDialog.close();
});

previewDialog.addEventListener("click", (event) => {
  if (event.target === previewDialog) {
    previewDialog.close();
  }
});

previewDialog.addEventListener("close", () => {
  dialogFrame.src = "about:blank";
});

const loadManifest = async () => {
  const response = await fetch("./_ds_manifest.json");
  if (!response.ok) {
    throw new Error(
      `Unable to load design system manifest (${response.status})`,
    );
  }

  manifest = await response.json();
  document.querySelector("[data-component-count]").textContent =
    manifest.components.length;
  renderFoundations();
  renderComponents();
};

loadManifest().catch((error) => {
  foundationGrid.innerHTML =
    '<p class="load-error">The design system manifest could not be loaded.</p>';
  componentGrid.innerHTML =
    '<p class="load-error">Component previews are temporarily unavailable.</p>';
  console.error(error);
});
