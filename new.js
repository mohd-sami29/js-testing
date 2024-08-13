let arr = [1, 2, 3, 4, 5, 6];
let batchSize = 2;

const batchArrayDynamic2 = (arr, batchSize) => {
    let n = arr.length;
    let result = [];
    let batchArr = [];

    for (let i = 0; i < n; i++) {
        batchArr.push(arr[i]);
        console.log(batchArr);
        
        if ((i + 1) % batchSize === 0 || i === n - 1) {
            result.push(batchArr);
            batchArr = [];
        }
    }

    console.log(result);
    return result;
};

batchArrayDynamic2(arr, batchSize);
