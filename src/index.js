import './image-slider-style/style.css';
import {
  arrayIndexPosition,
  elementSetter,
  imagePosition,
} from './js-modules/image-slider';

window.addEventListener('DOMContentLoaded', () => {
  const arrowForward = document.querySelector('button[class="arrow_forward"]');
  const arrowBack = document.querySelector('button[class="arrow_back"]');
  const imagesInImagesSlider = document.querySelectorAll(
    'div[class="hero_image"] > figure',
  );

  const imagesIndexPosition = arrayIndexPosition();

  elementSetter({
    imagesToAdd: imagesInImagesSlider,
    arrayOfImage: imagesIndexPosition.arrayOfImages,
  }).addMultipleImages();

  const circles = document.querySelector('nav[class="circles"]');

  elementSetter({
    numberOfImages: imagesIndexPosition.arrayOfImages,
    parent: circles,
    dataAttribute: 'data-slide-index',
    initialClassList: 'active_button',
  }).addMultipleButtons();

  const circleButtons = document.querySelectorAll('button[data-slide-index]');

  arrowForward.addEventListener('click', () => {
    const nextIndex = imagesIndexPosition.nextIndex();

    circleButtons.forEach((button) => {
      button.classList.remove('active_button');
    });
    const circleButton = document.querySelector(
      `button[data-slide-index="${nextIndex}"]`,
    );
    circleButton.classList.toggle('active_button');

    imagesIndexPosition.arrayOfImages.forEach((image) => {
      image.setAttribute(
        'style',
        `transform: translateX(-${
          imagePosition({
            imageWidth: 100,
            index: nextIndex,
          }).positionGetter
        }ch)`,
      );
    });
  });

  arrowBack.addEventListener('click', () => {
    const previousIndex = imagesIndexPosition.previousIndex();

    circleButtons.forEach((button) => {
      button.classList.remove('active_button');
    });
    const circleButton = document.querySelector(
      `button[data-slide-index="${previousIndex}"]`,
    );
    circleButton.classList.toggle('active_button');

    imagesIndexPosition.arrayOfImages.forEach((image) => {
      image.setAttribute(
        'style',
        `transform: translateX(-${
          imagePosition({
            imageWidth: 100,
            index: previousIndex,
          }).positionGetter
        }ch)`,
      );
    });
  });
});
