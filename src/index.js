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
      `button[data-slide-index="${parseInt(nextIndex, 10)}"]`,
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
      `button[data-slide-index="${parseInt(previousIndex, 10)}"]`,
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

  circleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // you want to remove all the active button so the right one would be toggle
      circleButtons.forEach((element) => {
        element.classList.remove('active_button');
      });

      button.classList.toggle('active_button');

      // you want to change the index value
      const buttonAtrribute = button.getAttribute('data-slide-index');
      const indexGetter = imagesIndexPosition.customIndex(buttonAtrribute);

      imagesIndexPosition.arrayOfImages.forEach((image) => {
        image.setAttribute(
          'style',
          `transform: translateX(-${
            imagePosition({ imageWidth: 100, index: indexGetter })
              .positionGetter
          }ch)`,
        );
      });
    });
  });

  // todo: create a function that automatically advances the image using setInterval run this function for every 5 seconds
});
