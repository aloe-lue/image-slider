const elementSetter = function addMultipleElements({
  imagesToAdd,
  arrayOfImage,
  numberOfImages,
  parent,
  dataAttribute,
  initialClassList,
}) {
  // you want to add all images to an array
  const addMultipleImages = () =>
    imagesToAdd.forEach((image) => {
      arrayOfImage.push(image);
    });

  const addMultipleButtons = () =>
    numberOfImages.forEach((image, index) => {
      const button = document.createElement('button');

      if (index === 0) {
        button.classList.toggle(initialClassList);
      }

      // you want to use the it's index as a way to jump to that images
      button.innerText = `${index}`;
      button.setAttribute(`${dataAttribute}`, `${index}`);

      parent.appendChild(button);
    });

  return {
    addMultipleImages,
    addMultipleButtons,
  };
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
