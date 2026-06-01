function initHeaderScroll() {
  const header = document.querySelector("header");
  if (!header || !header.classList.contains("header--shop")) return;

  function onScroll() {
    if (window.scrollY === 0) {
      header.classList.add("top");
      header.classList.remove("scrolled");
    } else {
      header.classList.add("scrolled");
      header.classList.remove("top");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("toast--visible");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 2800);
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initLangButtons();
});
