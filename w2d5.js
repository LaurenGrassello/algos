// const riverLevels1 = [15, 17, 30];
// const expected1 = 15; // 30 - 15 = 15

// const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
// const expected2 = 20; // 25 - 5 = 20

// const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
// const expected3 = 11; // 12 - 1 = 11

// const riverLevels4 = [1, 5];
// const expected4 = 4;

// const riverLevels5 = [5, 1];
// const expected5 = -1;

// const riverLevels6 = [9, 7, 7, 7];
// const expected6 = -1;

// const riverLevels7 = [42];
// const expected7 = -1;


// //create function that takes water levels
// //create two forloops to go through array using i and j
// //set const to hold 
// function measureWaterLevels(waterLevels) {
//     let w = 0;
//     for(let i=0; i<waterLevels.length; i++){
//         for(let j= i +1; j<waterLevels.length; j++){
//             let hold = waterLevels[i] - waterLevels[j];
//             if (hold<w){
//                 w = hold;
//             }
//         }
//     }
//     return hold
// }
// console.log(measureWaterLevels(riverLevels1))
// // bonus: 
// //https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

//have if statement that compares wL[i]-wL[j] and compare that to wl[i+1]-wL[j+1]
//return the greatest difference between i and j

function measureWaterLevels(waterLevels) {
    // variable to hold water level 
    let w = 0;
    let hold = 0;
    // loop through array 
    for (let i = 0; i < waterLevels.length; i++) {
            let hold = waterLevels[i+1] - waterLevels[i]
            w = hold
            while (hold < w) {
                i++
            }
        
        return w
    }
}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))