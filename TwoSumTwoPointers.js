/**Given an array arr[] of n integers and a target value, check if there exists a pair whose sum equals the target.This is a variation of the 2 - Sum problem. 
 *  Examples: 

    Input: arr[] = [0, -1, 2, -3, 1], target = -2
    Output: true
    Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

    Input: arr[] = [1, -2, 1, 0, 5], target = 0
    Output: false
    Explanation: There is no pair with sum equals to given target.
 * 
 * 
 * */

let arr = [0, -1, 2, -3, 1], target = -3
let left = 0, right = arr.length - 1;

function twoSum(arr, t) {
    arr.sort((a, b) => a - b)

    while (left < right) {
        if (arr[left] + arr[right] == 0) {
            return true
        } else if (arr[left] + arr[right] > t) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

let output = twoSum(arr, target)

console.log(output)


// This algo uses o(n × log(n)) as time complexity and 0(1) as space complexity

// console.log(arr.sort())
// console.log(arr.sort((a, b) => a - b))
