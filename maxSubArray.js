/**
 * Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.
Note: A subarray is a continuous part of an array.

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray [-2] has the largest sum -2.

Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.
 */
const arr = [5, 4, 1, 7, 8];

function maxSubArraySum(arr) {
    let sum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
            sum = Math.max(currSum, sum)
        }
    }
    return sum;
}

console.log(maxSubArraySum(arr))

//O(n^2) Time and O(1) Space

