//  Build a function mergeSort that takes in an array and returns a sorted
//  array, using a recursive merge sort methodology.

const merge = (arr1, arr2) => {
    const mergedArr = [];

    while (arr1.length > 0 || arr2.length > 0) {
        if (!arr1.length) {
            mergedArr.push(arr2.shift());
        } else if (!arr2.length) {
            mergedArr.push(arr1.shift());
        } else if (arr1[0] > arr2[0]) {
            mergedArr.push(arr2.shift());
        } else if (arr1[0] < arr2[0]) {
            mergedArr.push(arr1.shift());
        }
    }
    return mergedArr;
};

const mergeSort = (arr) => {
    if (arr.length < 1) return 'Invalid Array';
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle);

    const sortedFirstHalf = mergeSort(firstHalf);
    const sortedSecondHalf = mergeSort(secondHalf);

    return merge(sortedFirstHalf, sortedSecondHalf);
}   

const exampleArray = [8, 2, 6, 4, 5, 3, 7, 1];
console.log(mergeSort(exampleArray));