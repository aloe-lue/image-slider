import './image-slider-style/style.css';
// you may want to import all of the test functions that you have created during test so they can be used and therefore make the slider sliding
import {
  arrayIndexPosition,
  elementSetter,
  imagePosition,
} from './js-modules/image-slider';

// you may start setting all of the images in an array so they can be slide
window.addEventListener('DOMContentLoaded', () => {
  // select two buttons with the attribute class of arrow_back and arrow_forward
  const arrowForward = document.querySelector('button[class="arrow_forward"]');
  const arrowBack = document.querySelector('button[class="arrow_back"]');

  // select all pictures in image slider container namely div with an attribute class of hero_image then using the symbol of greater than
  const imagesInImagesSlider = document.querySelectorAll(
    'div[class="hero_image"] > figure',
  );

  // assign the function to this variable
  const imagesIndexPosition = arrayIndexPosition();

  // put all of the images in imagesToAdd and the variable name of arrayOfImage is the arrayOfImages
  elementSetter({
    imagesToAdd: imagesInImagesSlider,
    arrayOfImage: imagesIndexPosition.arrayOfImages,
  }).addMultipleImages();

  arrowForward.addEventListener('click', () => {
    // you want to namespace imagesIndexPosition and the function you want to invoke
    const nextIndex = imagesIndexPosition.nextIndex();

    // you want to loop images to set attribute on them with the same style property of translate with it's value
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

  /**
   * todo: create a function that creates a buttons depending on the numbers of images on image slider
   * ? use it for clicking the buttons to advance to that image and can be an indication of where the index of image is
   */
});
