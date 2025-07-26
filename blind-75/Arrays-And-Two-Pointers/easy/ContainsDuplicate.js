/**
 * || PROBLEM #   : CONTAINS DUPLICATE  ||
 * dates attempted:
 *      1: July 24, 2025 -- 16min
 *      2:
 * difficulty: easy
 *
 * Applicable pattern(s): Two Pointer
 *
 * || NOTES ||
 *
 *
 *
 *
 */

/** Problem description:
 *
 * Given an integer array nums, return true
 * if any value appears more than once in the array,
 * otherwise return false.
 *
 */

// Show your work!

/**
 * ||*********************************************||
 *                 ATTEMPT 1
 * ||*********************************************||
 * */

const fn = (arrayOfIntegers) => {
  let pointerA = 0;
  let pointerB = arrayOfIntegers.length - 1;

  let duplicatesExist = false;

  while (pointerA < pointerB) {
    if (
      arrayOfIntegers[pointerA] === arrayOfIntegers[pointerA + 1] ||
      arrayOfIntegers[pointerB] === arrayOfIntegers[pointerB - 1]
    ) {
      duplicatesExist = true;
      return duplicatesExist;
    }

    pointerA++;
    pointerB--;
  }

  return duplicatesExist;
};

/**
 * ||*********************************************||
 *                 ATTEMPT 2
 * ||*********************************************||
 * */

const fn2 = () => {};

//Examples

console.log(fn([1, 2, 3, 3]));
console.log(fn([1, 2, 3, 4]));

console.log(fn([1, 2, 3, 4, 4, 5, 6, 7]));
