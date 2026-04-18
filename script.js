const filmImages = [
  "film/04915747-73AD-4AEB-B4D6-585E484DC21B_1_105_c.jpeg",
  "film/04C04220-E08F-43FC-BA4E-F5982FC47570_1_105_c.jpeg",
  "film/072B9B3F-99A2-41B9-884F-4DFEB0C1189F_1_105_c.jpeg",
  "film/0F3DF4DC-5388-4897-B1EA-1DAAB3684E02_4_5005_c.jpeg",
  "film/0FDE51C4-7552-4258-AF8E-FB9825C4B961_4_5005_c.jpeg",
  "film/137A9E41-1D55-4FD1-B49D-724AA435B152_4_5005_c.jpeg",
  "film/1390D0C1-0366-484A-9D2A-6175897346E8_1_105_c.jpeg",
  "film/1A521654-C547-46A5-84D8-C48B64709896_1_105_c.jpeg",
  "film/1DC02486-E008-40DD-BA4C-55C459E574AA_1_105_c.jpeg",
  "film/207A3394-AB18-4052-911B-453824EF3608_1_105_c.jpeg",
  "film/26640109-048C-4822-86F8-155A84F7F386_4_5005_c.jpeg",
  "film/2667C634-BFF0-419A-8610-2E1B3F8820E0_1_105_c.jpeg",
  "film/370FD322-8E0C-40AB-82D3-2DDFE0004C2C_1_105_c.jpeg",
  "film/38F25E44-7431-4C4A-BE03-9CB95BC8C6A8_4_5005_c.jpeg",
  "film/3BAB1DBF-DB13-4572-A00C-0294698FC3C6_1_105_c.jpeg",
  "film/403FBEC4-D671-4C10-9892-D1235624572C_4_5005_c.jpeg",
  "film/41122951-0B71-4B6F-BD83-FC1117EC5D19_1_105_c.jpeg",
  "film/4648E160-6B7F-4D13-90A5-B66B9CFADDA2_1_105_c.jpeg",
  "film/4BAA65DA-D384-46B6-8DC1-0CA736C017B0_1_105_c.jpeg",
  "film/4DA77990-2AEC-470E-A4C8-1A61C627CCA4_1_105_c.jpeg",
  "film/4DAEBA49-0962-4091-8682-0B8F5FF6799D_1_105_c.jpeg",
  "film/4F69AB4F-2807-437C-AC36-D968A5C936D8_1_105_c.jpeg",
  "film/508AD8CF-5F96-4B11-B085-AA87F6D04ED5_1_105_c.jpeg",
  "film/5C03A09A-704E-410F-A5D7-799633D82A2E_1_105_c.jpeg",
  "film/6A49AC02-80A6-4139-9FE4-956F5BA316F0_1_105_c.jpeg",
  "film/6A4DDA3F-1E20-43CB-B9FB-F69E7B9E79AD_1_105_c.jpeg",
  "film/73CDEABF-FA73-4E51-9460-83F6273A657F_1_105_c.jpeg",
  "film/7C1FE200-4AD4-4228-8C85-C4B3392FDFDF_1_105_c.jpeg",
  "film/80C2111A-10B8-4D5D-AD15-76D12A7D83F9_1_105_c.jpeg",
  "film/8A7623A9-02D5-44A5-A741-E71A5D057CF2_1_105_c.jpeg",
  "film/8AAA9E7F-701D-4055-8678-9567FE634D1F_4_5005_c.jpeg",
  "film/A49897A4-0052-4BD6-8027-34FEB8F55039_1_105_c.jpeg",
  "film/A4ECEDE7-8C87-4D67-A701-C2120486DA50_1_105_c.jpeg",
  "film/A5E5DB6E-2DCE-4F55-8CE2-13C5C73E761B_1_105_c.jpeg",
  "film/ADDA66C3-A531-44C3-A3E5-E5A2A1D9DD3E_1_105_c.jpeg",
  "film/AE4EBDC0-3DA8-4CF3-B56E-5958DA26868B_1_105_c.jpeg",
  "film/B1FFA3DC-2C83-468C-BF3D-002D3435083B_1_105_c.jpeg",
  "film/B75B5AD5-6118-4117-A8E1-8ACF8488A793_1_102_o.jpeg",
  "film/C0722E81-CE1D-4CCE-AC45-C97AF17712B4_1_105_c.jpeg",
  "film/C2137161-4B45-457E-985D-3461D0005D1A_1_105_c.jpeg",
  "film/C30894BB-4E13-4392-9CDF-F1EA85D7C1E6_1_102_a.jpeg",
  "film/C415067A-1275-4396-A689-9387BF06B3F8_1_105_c.jpeg",
  "film/C54313AC-F28E-41AB-A235-90D7DEB82373_1_105_c.jpeg",
  "film/CBB2A2CC-A375-44A5-AB8F-85B72FF1BB99_1_105_c.jpeg",
  "film/CF25555D-7010-40C5-BA00-ADD3C455630C_1_105_c.jpeg",
  "film/DSCF3068.JPG",
  "film/DSCF3075.JPG",
  "film/DSCF3111.jpg",
  "film/DSCF3172.JPG",
  "film/DSCF3189.JPG",
  "film/DSCF3237.JPG",
  "film/DSCF3260.JPG",
  "film/DSCF3304.JPG",
  "film/DSCF3330.jpg",
  "film/DSCF3415.JPG",
  "film/E8F3F897-BF0D-4789-BDCA-A156F7CA289F_1_105_c.jpeg",
  "film/EAFF1B18-E65A-4C1E-BB21-6FC9223C44B6_1_105_c.jpeg",
  "film/F2C56266-4E51-4747-8DF6-3D38B7C4F2A1_4_5005_c.jpeg",
  "film/F7425FD0-6777-401A-BB2B-74337B151611_1_105_c.jpeg",
  "film/FDBC5615-BA8A-4EF0-B04E-981887999402_1_105_c.jpeg",
  "film/FF7AD7A2-005B-49FC-90F4-B0A98E759EB3_1_105_c.jpeg",
  "film/daisies-1.jpeg",
  "film/daisies-2.jpeg",
  "film/daisies-3.jpeg",
  "film/daisies-4.jpeg",
  "film/daisies-5.jpeg",
  "film/daisies-6.jpeg",
  "film/daisies-7.jpeg",
  "film/preu-1.jpeg",
];

const panels = Array.from(
  document.querySelectorAll("[data-rotating-panel] img")
);

if (panels.length) {
  const randomDelay = () => 3000 + Math.random() * 2000;
  const pickNextImage = (currentSrc, activeImages) => {
    const currentName = currentSrc.split("/").pop();
    const options = filmImages.filter(
      (image) => image !== currentName && !activeImages.has(image)
    );

    if (!options.length) {
      const fallbackOptions = filmImages.filter((image) => image !== currentName);

      if (!fallbackOptions.length) {
        return currentName;
      }

      return fallbackOptions[
        Math.floor(Math.random() * fallbackOptions.length)
      ];
    }

    return options[Math.floor(Math.random() * options.length)];
  };

  panels.forEach((img, index) => {
    img.src = filmImages[index % filmImages.length];
  });

  const schedulePanelSwap = (img) => {
    window.setTimeout(() => {
      const activeImages = new Set(
        panels
          .filter((panelImg) => panelImg !== img)
          .map((panelImg) => panelImg.getAttribute("src") || "")
          .filter(Boolean)
      );
      const nextImage = pickNextImage(img.getAttribute("src") || "", activeImages);

      img.style.opacity = "0.18";

      window.setTimeout(() => {
        img.src = nextImage;
        img.style.opacity = "1";
      }, 220);

      schedulePanelSwap(img);
    }, randomDelay());
  };

  panels.forEach((img) => {
    schedulePanelSwap(img);
  });
}

const poemStrips = Array.from(document.querySelectorAll("[data-poem-strip]"));

poemStrips.forEach((strip) => {
  const gallery = strip.closest(".poem-gallery");

  if (!gallery) {
    return;
  }

  const leftArrow = gallery.querySelector(".poem-arrow-left");
  const rightArrow = gallery.querySelector(".poem-arrow-right");
  const step = () => Math.max(strip.clientWidth * 0.72, 240);

  leftArrow?.addEventListener("click", () => {
    strip.scrollBy({ left: -step(), behavior: "smooth" });
  });

  rightArrow?.addEventListener("click", () => {
    strip.scrollBy({ left: step(), behavior: "smooth" });
  });
});

const navDropdowns = Array.from(document.querySelectorAll("[data-nav-dropdown]"));

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  const menu = dropdown.querySelector(".nav-dropdown-menu");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (menu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox?.querySelector(".lightbox-image");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
const expandableImages = Array.from(
  document.querySelectorAll("[data-expandable-image]")
);

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.setAttribute("src", "");
  lightboxImage.setAttribute("alt", "");
};

if (lightbox && lightboxImage) {
  expandableImages.forEach((panel) => {
    panel.addEventListener("click", () => {
      const image = panel.querySelector("img");

      if (!image) {
        return;
      }

      lightboxImage.setAttribute("src", image.getAttribute("src") || "");
      lightboxImage.setAttribute("alt", image.getAttribute("alt") || "");
      lightbox.hidden = false;
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
