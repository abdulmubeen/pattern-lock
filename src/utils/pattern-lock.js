import PatternLock from "@phenax/pattern-lock-js/build/PatternLock";

export const customTheme = {
  default: {
    colors: {
      accent: "#73937E", // Accent color for node
      primary: "#585563", // Primary node and line color
      bg: "#ceb992", // Canvas background color
    },
    dimens: {
      node_radius: 7, // Radius of the outer ring of a node
      line_width: 5, // Thickness of the line joining nodes
      node_core: 3, // Radius of the inner circle of a node
      node_ring: 1, // Outer ring thickness
    },
  },
  success: {
    colors: {
      accent: "#51e980", // Green accent on successful match
    },
  },
  failure: {
    colors: {
      accent: "#e74c3c", // Red accent on an unsuccessful match
    },
  },
};
let patternLock = undefined;

const Pattern = (screenType) => {
  patternLock = PatternLock({
    $canvas: document.querySelector(".pattern-canvas"),
    width: 300,
    height: 350,
    grid: [3, 3],
  });
  patternLock.setTheme(customTheme);
  if (screenType === "set") {
    patternLock.onComplete(({ hash }) => {
      if (hash.length !== 0) {
        localStorage.setItem("SetScreen", hash);
      }
    });
  } else if (screenType === "confirm") {
    patternLock.onComplete(({ hash }) => {
      if (hash.length !== 0) {
        localStorage.setItem("ConfirmScreen", hash);
      }
    });
  } else if (screenType === "login") {
    patternLock.onComplete(({ hash }) => {
      if (hash.length !== 0) {
        localStorage.setItem("LoginScreen", hash);
      }
    });
  } else if (screenType === "reset") {
    patternLock.onComplete(({ hash }) => {
      if (hash.length !== 0) {
        localStorage.setItem("ResetScreen", hash);
      }
    });
  } else if (screenType === "reset2") {
    patternLock.onComplete(({ hash }) => {
      if (hash.length !== 0) {
        localStorage.setItem("ResetScreen2", hash);
      }
    });
  }
};

export const destroyPattern = () => {
  patternLock.destroy();
};

export default Pattern;
