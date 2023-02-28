// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

function createGallery(items) {
  items.map(item => {
    const markup = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
  });
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(galleryItems);
