const elements = [];
let elementsIndex = 0;

function next() {
  if (elementsIndex >= elements.length - 1) {
    elementsIndex = 0;
    return elementsIndex;
  }
  elementsIndex -= 1;
  return elementsIndex;
}

function previous() {
  if (elementsIndex === 0) {
    elementsIndex = elements.length - 1;
    return elementsIndex;
  }
  elementsIndex += 1;
  return elementsIndex;
}

// how to use this function?
const nextBtn = document.querySelector('your next button');
const previousBtn = document.querySelector('your previous button');

nextBtn.addEventListener('click', () => {
  // you want to show all elements
  next();
  if (elementsIndex === 0) {
    elements.forEach((element) => element.classList.toggle('hide'));
  }
  // you want to show the next element so you hide the previous element
  elements.at(elementsIndex - 1).classList.toggle('hide');
});

previousBtn.addEventListener('click', () => {
  previous();
  //
  if (elementsIndex === elements.length - 1) {
    elements.forEach((element) => element.classList.toggle('hide'));
  }
  // you want to show the previous element so you hide the next element
  elements.at(elementsIndex).classList.toggle('hide');
});

export { next, previous };

// todo: since this is tightly coupled i don't want global to be polluted so make it clean
// todo: this functions alright but when you do it doesn't actually toggle the next img classList when using the previous function
