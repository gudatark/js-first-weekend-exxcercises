// function findNextSquare(sq){
//     let root1;
//     let nextroot;
//     if(Math.sqrt(sq)%1 ===0){
//          root1=Math.sqrt(sq)
//          nextroot=root1+1
//     }else{
//         return -1;
//     }
//     return nextroot*nextroot;
// }

// console.log(findNextSquare (625));

function findNextSquare(sq){
    return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}
console.log(findNextSquare (114));