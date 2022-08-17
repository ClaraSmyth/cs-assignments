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
            let removeDuplicates = [...new Set(arr)];
        },
    };
};

const test = tree();
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

test.buildTree(testArray);
