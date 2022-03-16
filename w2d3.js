const squareMatrix1 = [
    [1, 2, 3], //arr[0][0]. arr[0][2]
    [4, 5, 6], //arr[1][1]. arr[1][1]
    [9, 8, 9], //arr[2][2]. arr[2][0]
];
const expected1 = 2;


//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
    [1, 2, 3, 4, 5], //arr[0][0]. arr[0][arr.length-1]
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0


function diagonalDifference(sqrMatrix) {
    let x = sqrMatrix.length;
    let sumL = 0;
    let sumR = 0;

    for(let i = 0; i<x; i++){
        for(let j = 0; j<x; j++){
            if(i === j){
                sumL += sqrMatrix[i][j];
            }
            if(i + j === x-1){
                sumR += sqrMatrix[i][j]
            }
        }
    }
return Math.abs(sumL - sumR)
}
console.log(diagonalDifference(squareMatrix1));


// group code
//   function diagonalDifference(arr) {
//     let j = arr.length -1;
//     let sumL =0;
//     let sumR =0;
//     let expected;
    
//     for(i = 0; i < arr.length; i++){
//       sumL += arr[i][i]
//       sumR += arr[i][j]
//       j--
//     }
//     expected = sumR - sumL
//     if(Math.sign(expected) === -1){
//       expected * (-1)
//     }
//     return expected;
//   }
//   console.log(diagonalDifference(squareMatrix1))
//   console.log(diagonalDifference(squareMatrix2))