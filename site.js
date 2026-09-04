(function () {
  "use strict";

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = !open ? "Close" : "Menu";
    });
  }

  // Scroll reveal
  var targets = document.querySelectorAll(".reveal, .stack");
  if (!targets.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-lit"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-lit");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });
})();
