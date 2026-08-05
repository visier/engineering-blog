(() => {
  const lightbox = document.querySelector(".diagram-lightbox");
  const dialog = lightbox?.querySelector(".diagram-lightbox__dialog");
  const closeButton = lightbox?.querySelector(".diagram-lightbox__close");
  const enlargedImage = lightbox?.querySelector(".diagram-lightbox__image");

  if (!lightbox || !dialog || !closeButton || !enlargedImage) {
    return;
  }

  let activeButton;

  const closeLightbox = () => {
    if (lightbox.hidden) {
      return;
    }

    lightbox.hidden = true;
    enlargedImage.removeAttribute("src");
    enlargedImage.alt = "";
    document.body.classList.remove("diagram-lightbox-open");
    activeButton?.focus();
    activeButton = undefined;
  };

  const openLightbox = (button, image) => {
    activeButton = button;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;
    lightbox.hidden = false;
    document.body.classList.add("diagram-lightbox-open");
    closeButton.focus();
  };

  document.querySelectorAll("article.prose img").forEach((image) => {
    if (image.closest("a, button")) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "diagram-zoom";
    button.setAttribute(
      "aria-label",
      image.alt
        ? `View a larger version of the diagram: ${image.alt}`
        : "View a larger version of this diagram",
    );

    image.parentNode.insertBefore(button, image);
    button.append(image);
    button.addEventListener("click", () => openLightbox(button, image));
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "Tab") {
      event.preventDefault();
      closeButton.focus();
    }
  });
})();
