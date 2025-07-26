/**
 * || PROBLEM #   : Maximum Sub Array ||
 * dates attempted -- time:
 *      1: several hours, and chatGPT help
 *      2:
 * difficulty: medium
 *
 * Applicable pattern(s): kadane algorithm
 *
 * || NOTES ||
 *
 * On attempt 1 the thought process was "if the next number the pointer
 * hits doesn't contribute to the total, we don't slide the window" which FAILS
 * Then I tried to do "check from i to beginning of array, i to end, and track the highest sum"
 * This ALSO FAILS, because the array could be entirely in the middle.
 *
 * Asked chatGPT and looked up the relevant algorithm
 *
 *
 */

/** Problem description:
 *
 *  Given an array of integers nums, find the subarray with 
 *  the largest sum and return the sum.

 *  A subarray is a contiguous non-empty sequence of elements within an array.
 *
 */

// Show your work!

/**
 * ||*********************************************||
 *                 ATTEMPT 1
 * ||*********************************************||
 * */

const fn = (arrayOfNums) => {
  let currentSum = arrayOfNums[0];
  let largestSum = arrayOfNums[0];

  for (let i = 1; i < arrayOfNums.length; i++) {
    if (currentSum + arrayOfNums[i] > arrayOfNums[i]) {
      currentSum = currentSum + arrayOfNums[i];
    } else {
      currentSum = arrayOfNums[i]; // start new subarray
    }

    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
  }

  return largestSum;
};

/**
 * ||*********************************************||
 *                 ATTEMPT 2
 * ||*********************************************||
 * */

const fn2 = () => {};

// Examples

console.log(fn([2, -3, 4, -2, 2, 1, -1, 4])); //should be 8
//console.log(fn([-1])); //should be -1
