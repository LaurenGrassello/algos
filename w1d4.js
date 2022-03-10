const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
    let i, j, temp;
    for (i = 1; i < nums.length; i++) {
        temp = nums[i];
        j = i;
        while (j >= 0 && nums[j - 1] > temp) {
            let temp1 = nums[j]
            nums[j] = nums[j - 1]
            nums[j - 1] = temp1
            j--
        }
    }
    return nums;
}

console.log(insertionSort(numsRandomOrder))