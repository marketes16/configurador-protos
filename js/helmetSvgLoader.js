(function (global) {
  class HelmetSvgLoader {
    static async loadSvgLayer(url, groupId) {
      try {
        const resp = await fetch(url);
        const text = await resp.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const svgRoot = svgDoc.documentElement;

        const inner = svgRoot.innerHTML;
        const group = document.getElementById(groupId);
        if (group) {
          group.innerHTML = inner;
          if (groupId === "helmetBaseLayer") {
            group.setAttribute("fill", "none");
          }
        }
      } catch (err) {
        console.error("Error cargando SVG", url, err);
      }
    }

    static async loadAllHelmetLayers() {
      await Promise.all([
        HelmetSvgLoader.loadSvgLayer("./svgs/capa1.svg", "helmetBaseLayer"),
        HelmetSvgLoader.loadSvgLayer("./svgs/capa2.svg", "helmetAccentLayer"),
        HelmetSvgLoader.loadSvgLayer("./svgs/capa3.svg", "helmetShellLayer"),
      ]);
    }

    static markHelmetColorRoles(svg) {
      if (!svg) return;

      const shellLayer = svg.querySelector("#helmetShellLayer");
      const accentLayer = svg.querySelector("#helmetAccentLayer");

      if (shellLayer) {
        shellLayer
          .querySelectorAll("path,polygon,rect,circle,ellipse")
          .forEach((el) => {
            el.dataset.protosRole = "shell";
          });
      }

      if (accentLayer) {
        accentLayer
          .querySelectorAll("path,polygon,rect,circle,ellipse")
          .forEach((el) => {
            el.dataset.protosRole = "accent";
          });
      }
    }

    static tuneVisorMesh() {
      const baseLayer = document.getElementById("helmetBaseLayer");
      if (!baseLayer) return;

      const meshGroup = baseLayer.querySelector('g[mask^="url(#mask0_"]');
      if (!meshGroup) return;

      meshGroup.setAttribute("opacity", "0.55");

      const svgRoot = baseLayer.closest("svg");
      if (svgRoot) {
        baseLayer.removeChild(meshGroup);
        svgRoot.appendChild(meshGroup);
      }
    }
  }

  global.HelmetSvgLoader = HelmetSvgLoader;
})(window);
