const nums1 = [2, 11, 7, 15]
const targetSum1 = 9;
//order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9

const expected = [0, 2];
//nums[0] + nums[2] === targetSum

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, -2, 0];
const targetSum3 = 6;
const expected3 = [1, 5];


function twoSum(nums, targetSum){
    //given an unsorted array and a target sum
    //find out the possible combination that can add up to the target sum
    
    for(i = 0; i < nums.length -1; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === targetSum){
                return [i, j];
            }
        }

    }
}
console.log(twoSum(nums1, targetSum1));
console.log(twoSum(nums2, targetSum2));
console.log(twoSum(nums3, targetSum3));


function twoSumOneLoop(nums, targetSum){
    //given an unsorted array and a target sum
    //find out the possible combination that can add up to the target sum
    
    const numsToIndex = {};

    for(let i = 0; i < nums.length; i++){
        const numA = nums[i];
        const numB = targetSum - numA;

        if(numsToIndex.hasOwnProperty(numB)){
            const idxB = numsToIndex[numB];
            return [idxB, i];
        }
        numsToIndex[numA] = i;
    }
    return [];
}
console.log("**********************")
console.log(twoSumOneLoop(nums1, targetSum1));
console.log(twoSumOneLoop(nums2, targetSum2));
console.log(twoSumOneLoop(nums3, targetSum3));