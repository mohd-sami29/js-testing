// Find number of duplicates, in given array.

let arr=[9,2,5,1,7,2,6,4,3,1,8,6,4,5,3];
const findDuplicate=(arr)=>{
    let counter=0
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
           if( arr[i]===arr[j]) counter++ 
        }
    }
    return console.log(`${counter} duplicate found`); 
}

findDuplicate(arr)