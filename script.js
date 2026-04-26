(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var label = document.querySelector(".theme-toggle-text");
  var storageKey = "theme-preference";

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (label) {
      label.textContent = theme === "dark" ? "Light" : "Dark";
    }
  }

  var savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "light";
      var next = current === "dark" ? "light" : "dark";
      setTheme(next);
      localStorage.setItem(storageKey, next);
    });
  }
})();
