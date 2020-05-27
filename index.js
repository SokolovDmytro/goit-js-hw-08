"use strict";

import galleryItems from './gallery-items.js';

const jsGallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
let currentItem = null;

function createGallery(items) {
  return items
    .map(({
      preview,
      original,
      description
    }) => {
      return `
    <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    })
    .join('');
}
jsGallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));

jsGallery.addEventListener('click', showModal);

function showModal(e) {
  if (e.target.nodeName !== 'IMG') return;
  currentItem = e.target.closest('li');
  e.preventDefault();
  lightbox.classList.add('is-open');
  lightboxImage.setAttribute('src', e.target.dataset.source);
  lightboxImage.setAttribute('alt', e.target.alt);
  lightbox.addEventListener('click', handelLightboxClick);
  closeBtn.addEventListener('click', closeModal);
}

function handelLightboxClick(evn) {
  if (evn.target.nodeName === 'IMG') return;
  closeModal();
}

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.setAttribute('src', '');
  lightboxImage.setAttribute('alt', '');
  lightbox.removeEventListener('click', handelLightboxClick);
  closeBtn.removeEventListener('click', closeModal);
}