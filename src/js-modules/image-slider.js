// * functions down here depends on this two variables  and i think it's not really a good idea due to global pollution

const elements = [];
let elementsIndex = 0;

function next(index, array) {
  if (index >= array.length - 1) {
    return 0;
  }
  elementsIndex += 1;
  return elementsIndex;
}

function previous() {
  if (elementsIndex === 0) {
    elementsIndex = elements.length - 1;
    return elementsIndex;
  }
  elementsIndex -= 1;
  return elementsIndex;
}

// * code above is tightly coupled, think of how you can come up with a loose coupled technique, aysus

/**
 * * function 'hideAllArrayItem' below is used to add a classList to an elements
 * * function 'showCurrentArrayItem' below is used to toggle classList of an element
 */

function hideAllArrayItem(array, classListVal) {
  return array.forEach((item) => item.classList.add(classListVal));
}

function showCurrentArrayItem(array, currentIndex, classListVal) {
  return array.at(currentIndex).classList.toggle(classListVal);
}

export { next, previous, hideAllArrayItem, showCurrentArrayItem };

// todo: make this code clean

// ? how to use this?
// * for next button use the next function together with hideAllArrayItem and showCurrentArrayitem
// * for previous button use the previous function together with hideAllArrayItem and showCurrentArrayitem
