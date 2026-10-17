/* Atta Ur Rehman — Portfolio interactions */

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Animated skill bars
  var bars = document.querySelectorAll(".bar i[data-level]");
  if ("IntersectionObserver" in window && bars.length) {
    var bio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-level") + "%";
            bio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach(function (b) { bio.observe(b); });
  } else {
    bars.forEach(function (b) { b.style.width = b.getAttribute("data-level") + "%"; });
  }

  // Work page filter tabs
  var tabs = document.querySelectorAll(".tab");
  var items = document.querySelectorAll(".work-item");
  if (tabs.length && items.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var f = tab.getAttribute("data-filter");
        items.forEach(function (item) {
          var show = f === "all" || item.getAttribute("data-cat") === f;
          item.classList.toggle("hidden", !show);
        });
      });
    });
  }

  // Contact form -> WhatsApp with prefilled message
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name").value.trim();
      var type = document.getElementById("cf-type").value;
      var msg = document.getElementById("cf-msg").value.trim();
      var text =
        "Assalam-o-Alaikum! I am " + (name || "a website visitor") + ".\n" +
        "Project type: " + type + "\n" +
        "Details: " + (msg || "-");
      window.open("https://wa.me/923322964709?text=" + encodeURIComponent(text), "_blank");
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
