const node = (x = null, y = null, parentNode = null) => {
    return {
        x,
        y,
        parentNode,
    };
};

const possibleMoves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
];

const gameBoard = (start, end, queue = [], parentNode = null) => {
    let startNode = node(...start, parentNode);
    let endNode = node(...end, parentNode);

    possibleMoves.forEach((move) => {
        if (
            startNode.x + move[0] >= 0 &&
            startNode.x + move[0] < 8 &&
            startNode.y + move[1] >= 0 &&
            startNode.y + move[1] < 8
        ) {
            const x = startNode.x + move[0];
            const y = startNode.y + move[1];
            queue.push(node(x, y, startNode));
        }
    });

    let result = queue.filter((node) => {
        return node.x === endNode.x && node.y === endNode.y;
    });

    if (result[0] === undefined) {
        const nextNode = queue.shift();
        result = gameBoard([nextNode.x, nextNode.y], end, queue, nextNode.parentNode);
    }

    return result;
};

const knightMoves = (start, end) => {
    const move = gameBoard(start, end);

    let currentNode = move[0];
    let count = 0;
    let path = '';

    while (currentNode !== null) {
        path = `[${currentNode.x}, ${currentNode.y}]\n${path}`;
        currentNode = currentNode.parentNode;
        count++;
    }

    console.log(`You made it in ${count - 1} moves!`);
    console.log("Here's your path:");
    console.log(path);
};

knightMoves([4, 4], [5, 4]);
// Returns:
// You made it in 3 moves!
// Here's your path:
// [4, 4]
// [5, 6]
// [7, 5]
// [5, 4]
