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

            function buildSubtrees(arr) {
                if (arr.length < 1) return null;
                const middle = Math.floor(arr.length / 2);
                const firstHalf = arr.slice(0, middle);
                const secondHalf = arr.slice(middle + 1);

                let root = node(arr[middle]);
                root.left = buildSubtrees(firstHalf);
                root.right = buildSubtrees(secondHalf);

                return root;
            }

            root = buildSubtrees(sortedArr);

            // console.log('ARR', sortedArr);
            // console.log('First', firstHalf);
            // console.log('Second', secondHalf);
            console.log(root);
        },
    };
};

const test = tree();
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

test.buildTree(testArray);
