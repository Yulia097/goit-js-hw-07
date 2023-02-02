import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('gallery');
const cardsMarkup = listOfItems(items);

function listOfItems(items) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      <div class='gallery__item'>
        <a class='gallery__link' href='large-image.jpg'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </div>;
    })
    .join('');
}
console.log(galleryItems);
