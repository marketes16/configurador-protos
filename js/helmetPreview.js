(function (global) {
  class HelmetPreview {
    constructor(svgRoot) {
      this.svgRoot = svgRoot;
    }

    setColors(shellHex, accentHex) {
      if (!this.svgRoot) return;

      if (shellHex) {
        this.svgRoot
          .querySelectorAll('[data-protos-role="shell"]')
          .forEach((el) => el.setAttribute("fill", shellHex));

        const dot = document.getElementById("previewShellDot");
        if (dot) dot.style.backgroundColor = shellHex;
      }

      if (accentHex) {
        this.svgRoot
          .querySelectorAll('[data-protos-role="accent"]')
          .forEach((el) => el.setAttribute("fill", accentHex));

        const dot = document.getElementById("previewAccentDot");
        if (dot) dot.style.backgroundColor = accentHex;
      }
    }

    setColorsFromForm() {
      const shellColorId = document.getElementById("shellColor").value;
      const accentColorId = document.getElementById("accentColor").value;

      const shellColorObj = (global.COLORS || []).find((c) => c.id === shellColorId);
      const accentColorObj = (global.COLORS || []).find((c) => c.id === accentColorId);

      const shellHex = shellColorObj ? shellColorObj.hex : null;
      const accentHex = accentColorObj ? accentColorObj.hex : null;

      this.setColors(shellHex, accentHex);
    }
  }

  global.HelmetPreview = HelmetPreview;
})(window);
