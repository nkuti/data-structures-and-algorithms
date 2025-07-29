/**
 * || PROBLEM : Product of Array Except Self ||
 * dates attempted -- time:
 *      1: Jul 28, 2025 --
 *      2:
 * difficulty: medium
 *
 * Applicable pattern(s):
 *
 * || NOTES ||
 *
 *
 *
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
  /**
   *  Prefix has to start with 1
   *  since there's nothing to the left to multiply
   * so we want the elements on the right by themselves
   */
  let leftSideProducts = [1];
  /**
   * Suffix has to end with 1,
   * because there's nothing to the right to multiply
   * so we want the elements on the left by themselves
   */
  let rightSideProducts = [1];
  let finalArray = [];

  let leftProductSoFar = 1;
  let rightProductSoFar = 1;

  for (let i = 1; i < numsArray.length; i++) {
    leftProductSoFar *= numsArray[i - 1];
    leftSideProducts.push(leftProductSoFar);
  }

  for (let i = numsArray.length - 2; i >= 0; i--) {
    console.log("i =", i, numsArray[i + 1], rightProductSoFar);
    rightProductSoFar *= numsArray[i + 1];
    rightSideProducts.unshift(rightProductSoFar);
  }

  for (let i = 0; i < numsArray.length; i++) {
    finalArray.push(leftSideProducts[i] * rightSideProducts[i]);
  }

  console.log(leftSideProducts, rightSideProducts);
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
