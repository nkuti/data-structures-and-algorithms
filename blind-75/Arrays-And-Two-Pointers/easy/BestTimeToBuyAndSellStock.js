/**
 * || PROBLEM #   : Best Time To Buy And Sell Stock  ||
 * fastest time: About 1 hour
 * difficulty: easy
 *
 * Applicable pattern(s): Sliding Window
 *
 * || NOTES ||
 *
 * Had to slow down and think about this one the first go around
 *
 *
 */

/** Problem description:
*
* You are given an integer array prices where prices[i] is 
* the price of NeetCoin on the ith day.

*  You may choose a single day to buy one NeetCoin and 
*  choose a different day in the future to sell it.

*  Return the maximum profit you can achieve. 
*  You may choose to not make any transactions, in which case the profit would be 0.
*
*
*/

// Show your work!

/**
 * ||*********************************************||
 *                 ATTEMPT 1
 * ||*********************************************||
 * */

const fn = (prices) => {
  let purchasePrice;
  let sellPrice;

  for (let i = 0; i < prices.length; i++) {
    if (!purchasePrice || prices[i] < purchasePrice) {
      purchasePrice = prices[i];
    } else {
      if (!sellPrice || prices[i] > sellPrice) {
        sellPrice = prices[i];
      }
    }
  }

  if (purchasePrice && sellPrice) {
    return sellPrice - purchasePrice;
  } else {
    return 0;
  }
};

// Examples
console.log(fn([10, 1, 5, 6, 7, 1])); // should be 6 --
console.log(fn([10, 8, 7, 5, 2])); // should be 0 --
