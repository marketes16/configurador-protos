(function (global) {
  // === Datos de configuración ===
  const COLORS = [
    { id: "20", name: "Amarillo neón", code: "PR-COLOR-20", hex: "#FFFF00" },
    { id: "60", name: "Naranja", code: "PR-COLOR-60", hex: "#FF6B00" },
    { id: "10", name: "Rojo", code: "PR-COLOR-10", hex: "#E30613" },
    { id: "40", name: "Azul", code: "PR-COLOR-40", hex: "#0066CC" },
    { id: "30", name: "Verde", code: "PR-COLOR-30", hex: "#00A859" },
    { id: "90", name: "Blanco", code: "PR-COLOR-90", hex: "#FFFFFF" },
    { id: "80", name: "Negro", code: "PR-COLOR-80", hex: "#000000" },
    { id: "31", name: "Negro mate", code: "PR-COLOR-31", hex: "#1A1A1A" },
    { id: "67", name: "Naranja neón", code: "PR-COLOR-67", hex: "#FF4500" },
    { id: "68", name: "Rojo-Naranja neón", code: "PR-COLOR-68", hex: "#FF2400" },
    { id: "85", name: "Verde neón", code: "PR-COLOR-85", hex: "#39FF14" },
    { id: "115", name: "Rosa neón", code: "PR-COLOR-115", hex: "#FF10F0" },
    { id: "110", name: "Rosa", code: "PR-COLOR-110", hex: "#FF69B4" },
    { id: "45", name: "Azul metálico", code: "PR-COLOR-45", hex: "#4169E1" },
    { id: "11", name: "Carbono", code: "PR-COLOR-11", hex: "#2C2C2C" },
    { id: "77", name: "Luminiscente", code: "PR-COLOR-77", hex: "#B4FF00" },
    { id: "91", name: "Blanco reflectante", code: "PR-COLOR-91", hex: "#F0F0F0" },
    { id: "92", name: "Negro reflectante", code: "PR-COLOR-92", hex: "#262626" },
    { id: "94", name: "Azul claro reflectante", code: "PR-COLOR-94", hex: "#87CEEB" },
    { id: "95", name: "Amarillo reflectante", code: "PR-COLOR-95", hex: "#FFD700" },
    { id: "96", name: "Naranja reflectante", code: "PR-COLOR-96", hex: "#FFA500" },
    { id: "97", name: "Rubí reflectante", code: "PR-COLOR-97", hex: "#E0115F" },
    { id: "98", name: "Verde reflectante", code: "PR-COLOR-98", hex: "#50C878" },
    { id: "99", name: "Plata reflectante", code: "PR-COLOR-99", hex: "#C0C0C0" },
  ];

  const VISORS = {
    g16: {
      id: "g16",
      label: "Visor metálico G16 (ART. 204064)",
      sku: "PR-VISOR-G16-204064",
      allowsCustomization: true,
      hint: "Malla metálica con 16 aperturas/cm². Mayor protección frente a impactos gruesos.",
    },
    f39: {
      id: "f39",
      label: "Visor metálico F39 (ART. 204063)",
      sku: "PR-VISOR-F39-204063",
      allowsCustomization: true,
      hint: "Malla metálica con 39 aperturas/cm². Mayor visibilidad y ventilación.",
    },
    clear: {
      id: "clear",
      label: "Visor transparente Clear (ART. 204071)",
      sku: "PR-VISOR-CLEAR-204071",
      allowsCustomization: false,
      hint: "Pantalla transparente para trabajos con buena iluminación y sin proyecciones gruesas.",
    },
    none: {
      id: "none",
      label: "Sin visor adicional",
      sku: "PR-VISOR-NONE",
      allowsCustomization: false,
      hint: "Se mantiene únicamente la protección básica del casco sin visor frontal adicional.",
    },
  };

  const ACCESSORIES = {
    neck: {
      id: "neck",
      label: "Neck Protector (ART. 204065)",
      sku: "PR-ACC-NECK-204065",
    },
    btcom: {
      id: "btcom",
      label: "BT-COM (ART. 205200)",
      sku: "PR-ACC-BTCOM-205200",
    },
    goggles: {
      id: "goggles",
      label: "Gafas de seguridad integradas (ART. 204090)",
      sku: "PR-ACC-GOGGLES-204090",
      image: "./img/gafas-de-seguridad-integradas.jpg",
    },
    maclip: {
      id: "maclip",
      label: "Maclip Light (linterna frontal) (ART. 204074/204078)",
      sku: "PR-ACC-MACLIP-204074",
    },
    crashAbsorber: {
      id: "crashAbsorber",
      label: "CrashAbsorber (ART. 204080)",
      sku: "PR-ACC-CRASHABSORBER-204080",
    },
    actioncam: {
      id: "actioncam",
      label: "Soporte Actioncam (ART. 204047)",
      sku: "PR-ACC-ACTIONCAM-204047",
    },
    earmuffs: {
      id: "earmuffs",
      label: "Protección auditiva DB27 (ART. 204067)",
      sku: "PR-ACC-EARMUFFS-204067",
    },
    clipon: {
      id: "clipon",
      label: "Clip-on Clear - protector sobre visor metálico (ART. 204072)",
      sku: "PR-ACC-CLIPON-204072",
    },
    wallmount: {
      id: "wallmount",
      label: "Soporte de pared y transporte (ART. 205400)",
      sku: "PR-ACC-WALLMOUNT-205400",
    },
    klimaair: {
      id: "klimaair",
      label: "KlimaAIR® Set - almohadillas de reemplazo (ART. 204060)",
      sku: "PR-ACC-KLIMAAIR-204060",
    },
  };

  const MODELS = {
    forest: {
      id: "forest",
      label: "PROTOS® Forest",
      description: "Trabajo forestal extremo. Siempre incluye visor metálico de serie.",
      sizes: [
        { id: "std", label: "54–62 cm (Standard)", shellSkuPrefix: "PR-FOREST-STD" },
        { id: "lg", label: "56–64 cm (Large)", shellSkuPrefix: "PR-FOREST-LG" },
      ],
      visorsAllowed: ["g16", "f39"],
      baseVisor: "g16",
      accessoriesAllowed: [
        "neck",
        "btcom",
        "goggles",
        "maclip",
        "actioncam",
        "earmuffs",
        "clipon",
        "wallmount",
        "klimaair",
      ],
      includedAccessories: [],
      includedFeatures: ["Visor metálico G16 o F39", "Protección auditiva integral EN 352-3"],
    },
    arborist: {
      id: "arborist",
      label: "PROTOS® Arborist",
      description: "Premium class. Equipamiento completo para trabajos en altura.",
      sizes: [
        { id: "std", label: "54–62 cm (Standard)", shellSkuPrefix: "PR-ARBORIST-STD" },
        { id: "lg", label: "56–64 cm (Large)", shellSkuPrefix: "PR-ARBORIST-LG" },
      ],
      visorsAllowed: ["g16", "f39"],
      baseVisor: "g16",
      accessoriesAllowed: [
        "neck",
        "btcom",
        "goggles",
        "maclip",
        "crashAbsorber",
        "actioncam",
        "earmuffs",
        "clipon",
        "wallmount",
        "klimaair",
      ],
      includedAccessories: ["crashAbsorber"],
      includedFeatures: [
        "Visor metálico G16 o F39",
        "CrashAbsorber (absorción 5x)",
        "MaClip chin strap",
        "Protección auditiva integral",
      ],
    },
    climber: {
      id: "climber",
      label: "PROTOS® Climber",
      description: "Operaciones en altitud, rescate técnico y montañismo.",
      sizes: [{ id: "std", label: "54–62 cm (Standard)", shellSkuPrefix: "PR-CLIMBER-STD" }],
      visorsAllowed: ["clear", "none"],
      accessoriesAllowed: [
        "goggles",
        "maclip",
        "crashAbsorber",
        "actioncam",
        "wallmount",
        "klimaair",
      ],
      includedAccessories: ["crashAbsorber"],
      includedFeatures: ["CrashAbsorber (absorción 5x)", "MaClip chin strap", "Certificación EN 12492"],
    },
    industry: {
      id: "industry",
      label: "PROTOS® Industry",
      description: "Construcción, ingeniería civil, mantenimiento. Máxima versatilidad.",
      sizes: [{ id: "std", label: "54–62 cm (Standard)", shellSkuPrefix: "PR-INDUSTRY-STD" }],
      visorsAllowed: ["g16", "f39", "clear", "none"],
      accessoriesAllowed: [
        "neck",
        "btcom",
        "goggles",
        "maclip",
        "actioncam",
        "earmuffs",
        "wallmount",
        "klimaair",
      ],
      includedAccessories: [],
      includedFeatures: ["Ventilación ajustable", "Sistema modular completo"],
    },
  };

  // Exponer datos para otros módulos si lo necesitan
  global.COLORS = COLORS;

  let helmetPreview = null;

  function updateHelmetPreview() {
    if (!helmetPreview) return;
    helmetPreview.setColorsFromForm();
  }

  function populateModelSelect() {
    const modelSelect = document.getElementById("model");
    Object.values(MODELS).forEach((model) => {
      const opt = document.createElement("option");
      opt.value = model.id;
      opt.textContent = model.label;
      opt.dataset.description = model.description || "";
      modelSelect.appendChild(opt);
    });
  }

  function createColorPicker(containerId, inputId) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    container.innerHTML = "";
    COLORS.forEach((color) => {
      const option = document.createElement("div");
      option.className = "color-option";
      option.dataset.colorId = color.id;
      option.onclick = () => selectColor(containerId, inputId, color.id);
      const swatch = document.createElement("div");
      swatch.className = "color-swatch";
      swatch.style.backgroundColor = color.hex;
      if (color.hex === "#FFFFFF" || color.hex === "#F0F0F0") {
        swatch.style.border = "2px solid #ccc";
      }
      const label = document.createElement("div");
      label.className = "color-label";
      label.textContent = color.name;
      const code = document.createElement("div");
      code.className = "color-code";
      code.textContent = color.id;
      option.appendChild(swatch);
      option.appendChild(label);
      option.appendChild(code);
      container.appendChild(option);
    });
  }

  function selectColor(containerId, inputId, colorId) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    container
      .querySelectorAll(".color-option")
      .forEach((opt) => opt.classList.remove("selected"));
    const selectedOption = container.querySelector(`[data-color-id="${colorId}"]`);
    if (selectedOption) selectedOption.classList.add("selected");
    input.value = colorId;
    updateHelmetPreview();
    updateShellSku();
    updateSummary();
  }

  function applyCombo(shellId, accentId) {
    selectColor("shellColorPicker", "shellColor", shellId);
    selectColor("accentColorPicker", "accentColor", accentId);
    document.querySelectorAll(".combo-btn").forEach((btn) => btn.classList.remove("active"));
    const activeBtn = document.querySelector(
      `[data-shell="${shellId}"][data-accent="${accentId}"]`
    );
    if (activeBtn) activeBtn.classList.add("active");
  }

  function updateSizeAndShell(modelId) {
    const sizeSelect = document.getElementById("size");
    const baseShellInput = document.getElementById("baseShell");
    sizeSelect.innerHTML = "";
    baseShellInput.value = "";
    if (!modelId || !MODELS[modelId]) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "Selecciona un modelo primero";
      sizeSelect.appendChild(opt);
      return;
    }
    const model = MODELS[modelId];
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Selecciona talla";
    sizeSelect.appendChild(placeholder);
    model.sizes.forEach((size) => {
      const opt = document.createElement("option");
      opt.value = size.id;
      opt.textContent = size.label;
      opt.dataset.shellSkuPrefix = size.shellSkuPrefix;
      sizeSelect.appendChild(opt);
    });
  }

  function updateVisorSelect(modelId) {
    const visorSelect = document.getElementById("visor");
    const visorIncluded = document.getElementById("visorIncluded");
    const visorIncludedText = document.getElementById("visorIncludedText");
    const visorInfo = document.getElementById("visorInfo");
    const visorCustomSection = document.getElementById("visorCustomSection");

    visorSelect.innerHTML = "";
    visorIncluded.style.display = "none";
    visorCustomSection.style.display = "none";

    if (!modelId || !MODELS[modelId]) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "Selecciona un modelo primero";
      visorSelect.appendChild(opt);
      visorInfo.textContent = "Según el modelo, solo se muestran visores compatibles.";
      return;
    }

    const model = MODELS[modelId];
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Selecciona visor";
    visorSelect.appendChild(placeholder);

    model.visorsAllowed.forEach((visorId) => {
      const visor = VISORS[visorId];
      if (!visor) return;
      const opt = document.createElement("option");
      opt.value = visor.id;
      opt.textContent = visor.label;
      opt.dataset.sku = visor.sku;
      opt.dataset.allowsCustomization = visor.allowsCustomization;
      opt.title = visor.hint || visor.label;
      visorSelect.appendChild(opt);
    });

    if (model.baseVisor && (model.id === "forest" || model.id === "arborist")) {
      visorIncluded.style.display = "block";
      visorIncludedText.textContent =
        " Elige entre visor G16 (16 aperturas/cm²) o F39 (39 aperturas/cm²). Uno de ellos está incluido en el precio base del casco.";
      visorInfo.textContent =
        "Ambas opciones tienen la misma certificación EN 1731 S. La diferencia está en el tamaño de la malla metálica.";
    } else if (model.id === "climber") {
      visorInfo.textContent =
        "Este modelo admite visor transparente Clear o puede usarse sin visor adicional.";
    } else if (model.id === "industry") {
      visorInfo.textContent =
        "Modelo versátil: compatible con visores metálicos, transparente o sin visor.";
    }

    visorSelect.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      const allowsCustomization = selectedOption.dataset.allowsCustomization === "true";
      if (allowsCustomization) {
        visorCustomSection.style.display = "block";
      } else {
        visorCustomSection.style.display = "none";
        document.getElementById("visorCustomFile").value = "";
        document.getElementById("visorCustomNotes").value = "";
        const previews = document.querySelectorAll(".upload-preview");
        previews.forEach((p) => p.remove());
      }
    });
  }

  function updateAccessories(modelId) {
    const container = document.getElementById("accessoriesContainer");
    const includedInfo = document.getElementById("includedAccessoriesInfo");
    const includedList = document.getElementById("includedList");

    container.innerHTML = "";
    includedList.innerHTML = "";

    if (!modelId || !MODELS[modelId]) {
      container.textContent = "Selecciona un modelo para ver accesorios compatibles.";
      includedInfo.style.display = "none";
      return;
    }

    const model = MODELS[modelId];

    if (model.includedFeatures && model.includedFeatures.length > 0) {
      includedInfo.style.display = "block";
      model.includedFeatures.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        includedList.appendChild(li);
      });
    } else {
      includedInfo.style.display = "none";
    }

    model.accessoriesAllowed.forEach((accId) => {
      const acc = ACCESSORIES[accId];
      if (!acc) return;
      const label = document.createElement("label");
      label.className = "accessory-item";
      label.title = `${acc.label}${acc.sku ? " · " + acc.sku : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "accessories";
      checkbox.value = acc.id;
      checkbox.dataset.sku = acc.sku;
      const isIncluded = model.includedAccessories && model.includedAccessories.includes(acc.id);
      if (isIncluded) {
        checkbox.checked = true;
        checkbox.disabled = true;
        label.classList.add("selected");
      }

      const thumb = document.createElement("div");
      thumb.className = "accessory-thumb";
      if (acc.image) {
        const img = document.createElement("img");
        img.src = acc.image;
        img.alt = acc.label;
        thumb.appendChild(img);
      } else {
        const placeholder = document.createElement("span");
        placeholder.textContent = "ACC";
        placeholder.style.fontSize = "0.7rem";
        placeholder.style.color = "#6b7280";
        thumb.appendChild(placeholder);
      }

      const info = document.createElement("div");
      info.className = "accessory-info";

      const title = document.createElement("div");
      title.className = "accessory-title";
      title.textContent = acc.label;

      const meta = document.createElement("div");
      meta.className = "accessory-meta";
      meta.textContent = acc.sku || acc.id;

      info.appendChild(title);
      info.appendChild(meta);

      if (isIncluded) {
        const tag = document.createElement("span");
        tag.className = "accessory-tag";
        tag.textContent = "Incluido de serie";
        info.appendChild(tag);
      }

      label.appendChild(checkbox);
      label.appendChild(thumb);
      label.appendChild(info);
      container.appendChild(label);
    });
  }

  function updateShellSku() {
    const modelId = document.getElementById("model").value;
    const sizeSelect = document.getElementById("size");
    const shellColorId = document.getElementById("shellColor").value;
    const accentColorId = document.getElementById("accentColor").value;
    const baseShellInput = document.getElementById("baseShell");

    if (!modelId || !MODELS[modelId]) {
      baseShellInput.value = "";
      return;
    }

    const selectedSizeOption = sizeSelect.options[sizeSelect.selectedIndex];
    if (!selectedSizeOption || !selectedSizeOption.dataset.shellSkuPrefix) {
      baseShellInput.value = "";
      return;
    }

    const prefix = selectedSizeOption.dataset.shellSkuPrefix;
    const shellPart = shellColorId ? `C${shellColorId}` : "CXX";
    const accentPart = accentColorId ? `A${accentColorId}` : "AXX";
    baseShellInput.value = `${prefix}-${shellPart}-${accentPart}`;
  }

  function updateSummary() {
    const modelId = document.getElementById("model").value;
    const sizeId = document.getElementById("size").value;
    const shellColorId = document.getElementById("shellColor").value;
    const accentColorId = document.getElementById("accentColor").value;
    const visorId = document.getElementById("visor").value;
    const notes = document.getElementById("customNotes").value || "";
    const baseShellSku = document.getElementById("baseShell").value;
    const visorCustomNotes = document.getElementById("visorCustomNotes").value || "";
    const visorCustomFile = document.getElementById("visorCustomFile").files[0];

    const model = MODELS[modelId] || null;
    const sizeObj = model ? model.sizes.find((s) => s.id === sizeId) : null;
    const shellColor = COLORS.find((c) => c.id === shellColorId) || null;
    const accentColor = COLORS.find((c) => c.id === accentColorId) || null;
    const visor = VISORS[visorId] || null;

    const accessoriesChecked = Array.from(
      document.querySelectorAll("input[name='accessories']:checked")
    ).map((chk) => {
      const accData = ACCESSORIES[chk.value];
      return {
        id: chk.value,
        label: accData ? accData.label : chk.value,
        sku: chk.dataset.sku || (accData ? accData.sku : null),
        included: chk.disabled,
      };
    });

    const config = {
      model: model
        ? { id: model.id, label: model.label, description: model.description }
        : null,
      size: sizeObj ? { id: sizeObj.id, label: sizeObj.label } : null,
      baseShell: {
        sku: baseShellSku || null,
        shellColor: shellColor
          ? { id: shellColor.id, name: shellColor.name, sku: shellColor.code }
          : null,
        accentColor: accentColor
          ? { id: accentColor.id, name: accentColor.name, sku: accentColor.code }
          : null,
      },
      visor: visor
        ? {
            id: visor.id,
            label: visor.label,
            sku: visor.sku,
            includedInPrice: model && model.baseVisor ? true : false,
            customization: visorCustomNotes
              ? {
                  notes: visorCustomNotes,
                  fileAttached: visorCustomFile ? visorCustomFile.name : null,
                }
              : null,
          }
        : null,
      accessories: accessoriesChecked,
      includedFeatures: model ? model.includedFeatures : [],
      notes: notes,
    };

    const jsonStr = JSON.stringify(config, null, 2);
    document.getElementById("summaryJson").textContent = jsonStr;
    document.getElementById("normalizedConfig").value = jsonStr;
  }

  function resetConfiguration() {
    const form = document.getElementById("protos-configurator");
    form.reset();
    document.getElementById("model").value = "";
    updateSizeAndShell("");
    updateVisorSelect("");
    updateAccessories("");
    document.getElementById("baseShell").value = "";
    document.getElementById("modelDescription").textContent =
      "Define el uso principal: forestal, escalada, industria, etc.";

    document.querySelectorAll(".upload-preview").forEach((p) => p.remove());
    document
      .querySelectorAll(".color-option")
      .forEach((opt) => opt.classList.remove("selected"));
    document.getElementById("shellColor").value = "";
    document.getElementById("accentColor").value = "";
    document.getElementById("previewShellDot").style.backgroundColor = "#CCCCCC";
    document.getElementById("previewAccentDot").style.backgroundColor = "#888888";
    document.querySelectorAll(".combo-btn").forEach((btn) => btn.classList.remove("active"));

    (async () => {
      const svg = document.getElementById("helmetPreview");
      if (!svg) {
        updateSummary();
        return;
      }

      await global.HelmetSvgLoader.loadAllHelmetLayers();
      global.HelmetSvgLoader.tuneVisorMesh();
      global.HelmetSvgLoader.markHelmetColorRoles(svg);
      helmetPreview = new global.HelmetPreview(svg);
      updateSummary();
    })();
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const svg = document.getElementById("helmetPreview");

    await global.HelmetSvgLoader.loadAllHelmetLayers();
    global.HelmetSvgLoader.tuneVisorMesh();
    global.HelmetSvgLoader.markHelmetColorRoles(svg);

    helmetPreview = new global.HelmetPreview(svg);

    populateModelSelect();
    createColorPicker("shellColorPicker", "shellColor");
    createColorPicker("accentColorPicker", "accentColor");
    updateSizeAndShell("");
    updateVisorSelect("");
    updateAccessories("");
    updateSummary();

    document.getElementById("model").addEventListener("change", () => {
      const modelId = document.getElementById("model").value;
      const model = MODELS[modelId];
      const descElement = document.getElementById("modelDescription");
      descElement.textContent =
        model && model.description
          ? model.description
          : "Define el uso principal: forestal, escalada, industria, etc.";
      updateSizeAndShell(modelId);
      updateVisorSelect(modelId);
      updateAccessories(modelId);
      updateShellSku();
      updateSummary();
    });

    document.getElementById("size").addEventListener("change", () => {
      updateShellSku();
      updateSummary();
    });

    document.getElementById("visor").addEventListener("change", updateSummary);
    document
      .getElementById("visorCustomNotes")
      .addEventListener("input", updateSummary);
    document.getElementById("visorCustomFile").addEventListener("change", (e) => {
      updateSummary();
      const file = e.target.files[0];
      if (file) {
        const preview = document.createElement("div");
        preview.className = "upload-preview";
        preview.style.display = "block";
        preview.style.marginTop = "0.5rem";
        preview.style.padding = "0.5rem";
        preview.style.background = "#f8f9fa";
        preview.style.borderRadius = "4px";
        preview.style.fontSize = "0.8rem";
        preview.innerHTML = `<strong style="color: #2e7d32;">✓ Archivo cargado:</strong> ${
          file.name
        } (${(file.size / 1024).toFixed(2)} KB)`;
        const oldPreview = e.target.parentElement.querySelector(".upload-preview");
        if (oldPreview) oldPreview.remove();
        e.target.parentElement.appendChild(preview);
      }
    });
    document.getElementById("customNotes").addEventListener("input", updateSummary);

    document.querySelectorAll(".combo-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const shellId = btn.dataset.shell;
        const accentId = btn.dataset.accent;
        applyCombo(shellId, accentId);
      });
    });

    document
      .getElementById("accessoriesContainer")
      .addEventListener("change", (e) => {
        if (e.target && e.target.name === "accessories") {
          const label = e.target.closest(".accessory-item");
          if (label) {
            if (e.target.checked) {
              label.classList.add("selected");
            } else {
              label.classList.remove("selected");
            }
          }
          updateSummary();
        }
      });

    document.getElementById("resetBtn").addEventListener("click", resetConfiguration);

    document
      .getElementById("protos-configurator")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        alert(
          "Configuración preparada. Revisa el JSON normalizado para integrarlo con tu ecommerce."
        );
      });
  });
})(window);
