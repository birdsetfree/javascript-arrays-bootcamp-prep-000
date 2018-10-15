var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array, element) {
  return [array, ...element];
}

function removeElementFromEndOfArray (array, element) {
  return array.slice(0,array.lenght - 1)
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop()
  return array
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop()
  return array
}