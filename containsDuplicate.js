/*********************************************************************** 
Source LeetCode
217 Contains Duplicate
(https://leetcode.com/problems/contains-duplicate/)
Date 2022-04-02

Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

 * @param {number[]} nums
 * @return {boolean}
************************************************************************/

// 1st Try: Go through every index to check for duplicate
 var containsDuplicate = function(nums) {
    for(let i = 0; i< nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// TEST
// Output: true
console.log(containsDuplicate([1,2,3,1]));
// Output: false
console.log(containsDuplicate([1,2,3,4]));
// Output: true
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));