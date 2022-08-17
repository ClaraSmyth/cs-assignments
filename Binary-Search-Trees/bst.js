const node = (data = null, left = null, right = null) => {
    return {
        data,
        left,
        right,
    };
};

const tree = () => {
    let root = null;

    return {
        buildTree(arr) {
            const removeDuplicates = [...new Set(arr)];
            const sortedArr = removeDuplicates.sort((a, b) => a - b);
            console.log(sortedArr);
        },
    };
};

const test = tree();
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

test.buildTree(testArray);
