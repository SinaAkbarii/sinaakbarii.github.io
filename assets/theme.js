(function () {
  "use strict";

  var STORAGE_KEY = "sakbari-theme";
  var root = document.documentElement;
  var media = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function storedTheme() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function setMetaColor(theme) {
    var meta = document.getElementById("theme-color-meta");
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#15171A" : "#FFFFFF");
    }
  }

  function updateButton(theme) {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    var next = theme === "dark" ? "light" : "dark";
    var label = "Switch to " + next + " mode";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    setMetaColor(theme);
    updateButton(theme);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {}
    }
  }

  function systemTheme() {
    return media && media.matches ? "dark" : "light";
  }

  function initialise() {
    var current = root.getAttribute("data-theme") || storedTheme() || systemTheme();
    applyTheme(current, false);

    var button = document.getElementById("theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next, true);
      });
    }

    if (media) {
      var handleSystemChange = function (event) {
        if (!storedTheme()) {
          applyTheme(event.matches ? "dark" : "light", false);
        }
      };

      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", handleSystemChange);
      } else if (typeof media.addListener === "function") {
        media.addListener(handleSystemChange);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }
})();
