"use strict";

import galleryItems from "./gallery-items.js";

const jsGallery = document.querySelector(".js-gallery")
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");

for (let image of galleryItems) jsGallery.insertAdjacentHTML("beforeEnd",
  `<li>
    <a
    class="gallery__link"
    href="${image.original}"
    >
    <img src="${image.preview}" 
    alt="${image.description}" 
    data-source="${image.original}"
    class="gallery__image">
    </a>
    </li>`
);

function openModal(e) {
  e.preventDefault();
  lightbox.classList.add("is-open");
  lightboxImage.src = e.target.dataset.source;
}

function closeModal() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = '';
}

jsGallery.addEventListener("click", openModal);
lightboxButton.addEventListener("click", closeModal);