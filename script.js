const filmImages = [
  "film/04915747-73AD-4AEB-B4D6-585E484DC21B_1_105_c.jpeg",
  "film/1A521654-C547-46A5-84D8-C48B64709896_1_105_c.jpeg",
  "film/370FD322-8E0C-40AB-82D3-2DDFE0004C2C_1_105_c.jpeg",
  "film/4648E160-6B7F-4D13-90A5-B66B9CFADDA2_1_105_c.jpeg",
  "film/7C1FE200-4AD4-4228-8C85-C4B3392FDFDF_1_105_c.jpeg",
  "film/8D3E0915-94A7-4D2B-B369-A7AB360B0489_1_102_o.jpeg",
  "film/A54253E9-6A2C-4FFC-AD8D-6D8CB6285F56_1_105_c.jpeg",
  "film/A5E5DB6E-2DCE-4F55-8CE2-13C5C73E761B_1_105_c.jpeg",
  "film/AE4EBDC0-3DA8-4CF3-B56E-5958DA26868B_1_105_c.jpeg",
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
  const randomDelay = () => 2000 + Math.random() * 3000;
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
