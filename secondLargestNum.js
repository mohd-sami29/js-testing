// Find second largest number without sorting.

let arr = [5, 3, 17, 100, 1, 4, 19];

const findSecondLargest = (arr) => {
    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 8
