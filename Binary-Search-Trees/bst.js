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
        root() {
            return root;
        },

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
        },

        insert(data) {
            let currentNode = root;
            let previousNode = null;

            while (currentNode !== null) {
                if (currentNode.data === data) return console.log(`Already exists: ${data}`);

                previousNode = currentNode;

                if (currentNode.data > data) {
                    currentNode = currentNode.left;
                } else if (currentNode.data < data) {
                    currentNode = currentNode.right;
                }
            }

            currentNode = node(data);

            if (currentNode.data < previousNode.data) {
                previousNode.left = currentNode;
            } else {
                previousNode.right = currentNode;
            }
        },

        delete(data) {
            let currentNode = root;
            let previousNode = null;

            while (currentNode.data !== data) {
                previousNode = currentNode;
                if (currentNode.data > data) {
                    if (currentNode.left === null) return console.log(`Doesn't exist: ${data}`);
                    currentNode = currentNode.left;
                } else if (currentNode.data < data) {
                    if (currentNode.right === null) return console.log(`Doesn't exist: ${data}`);
                    currentNode = currentNode.right;
                }
            }

            // If the deleted node has 0 or 1 child
            if (currentNode.data < previousNode.data) {
                if (currentNode.left === null && currentNode.right === null) previousNode.left = null;

                if (currentNode.left === null && currentNode.right !== null) previousNode.left = currentNode.right;

                if (currentNode.left !== null && currentNode.right === null) previousNode.left = currentNode.left;
            } else {
                if (currentNode.left === null && currentNode.right === null) previousNode.right = null;

                if (currentNode.left === null && currentNode.right !== null) previousNode.right = currentNode.right;

                if (currentNode.left !== null && currentNode.right === null) previousNode.right = currentNode.left;
            }

            // If the deleted node had 2 children
            if (currentNode.left !== null && currentNode.right !== null) {
                let successor = currentNode.right;

                while (successor.left !== null) {
                    successor = successor.left;
                }

                this.delete(successor.data);

                currentNode.data = successor.data;
            }
        },

        find(data) {
            let currentNode = root;

            while (currentNode.data !== data) {
                if (currentNode.data > data) {
                    currentNode = currentNode.left;
                } else if (currentNode.data < data) {
                    currentNode = currentNode.right;
                }
            }

            return currentNode;
        },

        levelOrder() {
            let queue = [root];
            let result = [];

            while (queue.length > 0) {
                let currentNode = queue.shift();

                if (currentNode.left !== null) queue.push(currentNode.left);
                if (currentNode.right !== null) queue.push(currentNode.right);

                result.push(currentNode);
            }

            return result;
        },

        preOrder(currentNode = root, result = []) {
            if (currentNode === null) return;

            result.push(currentNode.data);
            this.preOrder(currentNode.left, result);
            this.preOrder(currentNode.right, result);

            return result;
        },

        inOrder(currentNode = root, result = []) {
            if (currentNode === null) return;

            this.inOrder(currentNode.left, result);
            result.push(currentNode.data);
            this.inOrder(currentNode.right, result);

            return result;
        },

        postOrder(currentNode = root, result = []) {
            if (currentNode === null) return;

            this.postOrder(currentNode.left, result);
            this.postOrder(currentNode.right, result);
            result.push(currentNode.data);

            return result;
        },

        height(node = root) {
            if (node === null) return -1;
            return Math.max(this.height(node.left), this.height(node.right)) + 1;
        },
    };
};

const test = tree();
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

test.buildTree(testArray);
test.insert(6);
// test.delete(4);
prettyPrint(test.root());
console.log(test.height());
// console.log(test.levelOrder());
// console.log(test.preOrder());
// console.log(test.inOrder());
// console.log(test.postOrder());
// console.log(test.find(5));
