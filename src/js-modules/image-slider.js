const elementSetter = function addMultipleElements({
  imagesToAdd,
  arrayOfImage,
}) {
  const addMultipleImages = () =>
    imagesToAdd.forEach((image) => {
      arrayOfImage.push(image);
    });
  return { addMultipleImages };
};

const arrayIndexPosition = () => {
  const arrayOfImages = [];
  let index = 0;

  const nextIndex = () => {
    if (index >= arrayOfImages.length - 1) {
      index = 0;
      return index;
    }
    index += 1;
    return index;
  };

  const previousIndex = () => {
    if (index === 0) {
      index = arrayOfImages.length - 1;
      return index;
    }
    index -= 1;
    return index;
  };

  return { nextIndex, previousIndex };
};

export { arrayIndexPosition, elementSetter };
