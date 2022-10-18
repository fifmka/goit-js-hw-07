import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const GalleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
                <a class= "gallery__link" href = "${item.original}">
                    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/> 
                </a>
             </div>`
    )
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", GalleryMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}">
`);

  instance.show();
  document.addEventListener("keydown", onEscPress);

  function onEscPress(event) {
    if (event.key !== "Escape") {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", onEscPress);
  }
}
console.log(galleryItems);
