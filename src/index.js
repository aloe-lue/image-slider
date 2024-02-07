import './image-slider-style/style.css';
import {
  arrayIndexPosition,
  elementSetter,
  imagePosition,
  fillTheRightCircleButton,
  moveAllTheImages,
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

    fillTheRightCircleButton({
      index: nextIndex,
      buttons: circleButtons,
      classListVal: 'active_button',
      dataAttribute: 'data-slide-index',
    }).fillCircle();

    moveAllTheImages({
      arrayOfImages: imagesIndexPosition.arrayOfImages,
      imageWidth: imagePosition({ imageWidth: 100, index: nextIndex })
        .positionGetter,
      unit: 'ch',
    }).moveHorizontally();
  });

  arrowBack.addEventListener('click', () => {
    const previousIndex = imagesIndexPosition.previousIndex();

    fillTheRightCircleButton({
      index: previousIndex,
      buttons: circleButtons,
      classListVal: 'active_button',
      dataAttribute: 'data-slide-index',
    }).fillCircle();

    moveAllTheImages({
      arrayOfImages: imagesIndexPosition.arrayOfImages,
      imageWidth: imagePosition({ imageWidth: 100, index: previousIndex })
        .positionGetter,
      unit: 'ch',
    }).moveHorizontally();
  });

  circleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonAtrribute = button.getAttribute('data-slide-index');
      const indexGetter = imagesIndexPosition.customIndex({
        indexPosition: buttonAtrribute,
      });

      fillTheRightCircleButton({
        index: indexGetter,
        buttons: circleButtons,
        classListVal: 'active_button',
        dataAttribute: 'data-slide-index',
      }).fillCircle();

      moveAllTheImages({
        arrayOfImages: imagesIndexPosition.arrayOfImages,
        imageWidth: imagePosition({ imageWidth: 100, index: indexGetter })
          .positionGetter,
        unit: 'ch',
      }).moveHorizontally();
    });
  });

  const forwardMovement = function useThisFunctionMoveImagesEveryFiveSeconds() {
    const nextIndex = imagesIndexPosition.nextIndex();

    fillTheRightCircleButton({
      index: nextIndex,
      buttons: circleButtons,
      classListVal: 'active_button',
      dataAttribute: 'data-slide-index',
    }).fillCircle();

    moveAllTheImages({
      arrayOfImages: imagesIndexPosition.arrayOfImages,
      imageWidth: imagePosition({ imageWidth: 100, index: nextIndex })
        .positionGetter,
      unit: 'ch',
    }).moveHorizontally();
  };

  setInterval(forwardMovement, 5000);
});
