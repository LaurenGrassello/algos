// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [5];
//expected output: [2, 3, 4, 5, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];


function merge(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i])
            }
            else { 
                newArr.push(arr2[j]);
            }
        }
    }
    return newArr;
}
console.log(merge(sortedA3, sortedB3));




function mergeSort(arr) {
    //given an unsorted array, return a sorted array using mergeSort
    //HINT: keep separate the array until they are 2 sorted arrays
    //HINT2: You may need to have a recursive function
    //HINT3: Make use of the Merge function you created
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];