const riverLevels1 = [15, 17, 30];
const expected1 = 15; //30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [23, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; //12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4; 

const riverLevels5 = [5, 1];
expected = -1; 

function measureWaterLevels(waterLevels){
    //find the largest rise in water levels during a day
    let difference = 0
    let low = waterLevels[0]
    for(let i = 0; i <waterLevels.length; i++){
        if(difference < waterLevels[i] - low){
            difference = waterLevels[i] - low
        }
        if(waterLevels[i] < waterLevels[i - 1]){
            low = waterLevels[i]
        }
    }
    return difference === 0? -1: difference
}
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));