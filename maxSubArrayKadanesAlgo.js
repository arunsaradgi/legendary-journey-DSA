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


function KadanesAlgo(arr) {
    let maxSum = arr[0]; // maximum subarray we have seen
    let currSum = 0; // running sum of current subarray

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        maxSum = Math.max(currSum, maxSum)

        if (currSum < 0) {
            currSum = 0
        }
    }
    return maxSum
}

const arr = [5, 4, 1, 7, 8];
console.log(KadanesAlgo(arr))



