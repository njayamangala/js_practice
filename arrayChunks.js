/*

( [1,2,3,4,5] ) size 2output=> [1,2] [3,4] [5];
( [6,5,3,2,5,2,4,5]) size 3 => [6,5,3] [2,5,2] [4,5]

*/

let arr = [6,5,3,2,5,2,4,5,1,2,3,4,32,4,5];
let size = 3;
let ar =[]
let index =0
while(arr.length > size){
    let small = arr.splice(0,size)
    console.log(small)
}
console.log(arr)

