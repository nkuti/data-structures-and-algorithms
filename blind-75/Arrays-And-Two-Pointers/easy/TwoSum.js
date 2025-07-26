/**
 * || PROBLEM #   : Two Sum ||
 * dates attempted -- time:
 *      1: July 24, 2025 -- 20min
 *      2:
 * difficulty: easy
 *
 * Applicable pattern(s): Two Pointers
 *
 * || NOTES ||
 * Attempt #1, caused an infinite loop with my while loop, rusty
 *
 *
 *
 */

/** Problem description:
 *
 *Given an array of integers nums and an integer target, 
    return the indices i and j such that 
    nums[i] + nums[j] == target and i != j.

    You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

    Return the answer with the smaller index first. 
 */

// Show your work!

/**
 * ||*********************************************||
 *                 ATTEMPT 1
 * ||*********************************************||
 * */

const fn = (arrayOfIntegers, target) => {
  let pointerA = 0;
  let pointerB = arrayOfIntegers.length - 1;

  while (pointerA < pointerB) {
    const sum = arrayOfIntegers[pointerA] + arrayOfIntegers[pointerB];
    if (sum === target) {
      console.log([pointerA, pointerB]);
      return [pointerA, pointerB];
    }
    if (sum < target) pointerA++;

    if (sum > target) pointerB--;
  }

  console.log("SOLUTION: ", indexesWhereTheyAddUp);
};

fn([5, 5], 10);
fn([4, 5, 6], 10);
fn([3, 4, 5, 6], 7);

/**
 * ||*********************************************||
 *                 ATTEMPT 2
 * ||*********************************************||
 * */
