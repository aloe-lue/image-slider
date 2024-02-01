const elementSetter = ({ imagesToAdd, arrayOfImage }) => {
  const addMultipleImages = () =>
    imagesToAdd.forEach((image) => {
      arrayOfImage.push(image);
    });
  return { addMultipleImages };
};

const elementGetter = function getImageUsingNextAndPreviousFunction() {
  const images = [];
  let imagesIndex = 0;

  const getNextImage = () => {
    if (imagesIndex >= images.length - 1) {
      imagesIndex = 0;
      return imagesIndex;
    }
    imagesIndex += 1;
    return imagesIndex;
  };

  const getPreviousImage = () => {
    if (imagesIndex === 0) {
      imagesIndex = images.length - 1;
      return imagesIndex;
    }
    imagesIndex -= 1;
    return imagesIndex;
  };

  return { getNextImage, getPreviousImage, images };
};

export { elementGetter, elementSetter };
