const elementSetter = function addMultipleElements({
  imagesToAdd,
  arrayOfImage,
}) {
  // you want to add all images to an array
  const addMultipleImages = () =>
    imagesToAdd.forEach((image) => {
      arrayOfImage.push(image);
    });
  return { addMultipleImages };
};

const arrayIndexPosition = () => {
  // used to calculate the array length and later be used to manipulated images when using the image position function
  const arrayOfImages = [];
  // inialized default value
  let index = 0;

  // every time forward btn is clicked, increase index value by 1 and is restricted by the lengths of an array
  const nextIndex = () => {
    if (index >= arrayOfImages.length - 1) {
      index = 0;
      return index;
    }
    index += 1;
    return index;
  };

  // every time back btn is clicked, decrease index value by 1 and is restricted by the lengths of an array
  const previousIndex = () => {
    if (index === 0) {
      index = arrayOfImages.length - 1;
      return index;
    }
    index -= 1;
    return index;
  };

  return { nextIndex, previousIndex, arrayOfImages };
};

const imagePosition =
  function calculateImageWidthAndIndexToGetThePositionOfAllTheImages({
    imageWidth,
    index,
  }) {
    // use this result value to translate horizontally all selected images to one place
    const positionGetter = imageWidth * index;

    return {
      positionGetter,
    };
  };

export { arrayIndexPosition, elementSetter, imagePosition };
