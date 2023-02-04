import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const cardsMarkup = listOfItems(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarkup);
galleryList.addEventListener('click', onGalleryClick);

function listOfItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='Image ${description}'
          />
        </a>
      </div>`;
    })
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  onShow: (instance) => {}, instance.show();
  // onClose: (instance) => {};
  // instance.close();
}
