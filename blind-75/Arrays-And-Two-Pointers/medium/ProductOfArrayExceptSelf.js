/**
 * || PROBLEM : Product of Array Except Self ||
 * dates attempted -- time:
 *      1: Jul 28, 2025 -- LITERALLY ALL EVENING
 *      2:
 * difficulty: medium
 *
 * Applicable pattern(s):
 *
 * || NOTES ||
 *
 * This one humbled me. I couldn't understand why the prefix and suffix arrays needed
 *  a 1 at the start/end, but now I understand it's because there was nothing to multiply
 * on that side. Had to look up the solution for sure.
 *
 */

/** Problem description:
 *
 * Given an integer array nums, return an array output where output[i] is 
 * the product of all the elements of nums except nums[i].

 * Each product is guaranteed to fit in a 32-bit integer.

 * Follow-up: Could you solve it in O(n)O(n) time without 
 * using the division operation?
 * 
 */

// Show your work!

/**
 * ||*********************************************||
 *                 ATTEMPT 1
 * ||*********************************************||
 * */

const fn = (numsArray) => {
  let leftSideProducts = [1];
  let rightSideProducts = [1];
  let finalArray = [];

  let leftProductSoFar = 1;
  let rightProductSoFar = 1;

  for (let i = 1; i < numsArray.length; i++) {
    leftProductSoFar *= numsArray[i - 1];
    leftSideProducts.push(leftProductSoFar);
  }

  for (let i = numsArray.length - 2; i >= 0; i--) {
    rightProductSoFar *= numsArray[i + 1];
    rightSideProducts.unshift(rightProductSoFar);
  }

  for (let i = 0; i < numsArray.length; i++) {
    finalArray.push(leftSideProducts[i] * rightSideProducts[i]);
  }

  return finalArray;
};

/**
 * ||*********************************************||
 *                 ATTEMPT 2
 * ||*********************************************||
 * */

const fn2 = () => {};

// Examples

console.log(fn([1, 2, 4, 6])); //should be [48, 24, 12, 8]
//console.log(fn([-1, 0, 1, 2, 3])); //should be [0, -6, 0, 0, 0]
