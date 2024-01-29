const elements = [];

const addMultipleElements = function addImages(array, elementsIn) {
  function pushAllImg() {
    return elementsIn.forEach((element) => {
      array.push(element);
    });
  }

  return { pushAllImg };
};

export { addMultipleElements, elements };

// todo: create a function for 'next' and 'previous'
