//quicksort

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        
        // Recursively apply the function to the left
        quickSort(arr, left, pivotIndex - 1);
        
        // Recursively apply the function to the right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// Pivot helper function
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start to swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

// Test with unsorted array
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));