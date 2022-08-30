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
        return endNode.x === node.x && endNode.y === node.y;
    });

    if (result[0] === undefined) {
        const nextNode = queue.shift();
        result = gameBoard([nextNode.x, nextNode.y], end, queue, startNode);
    }

    return result;
};

const knightMoves = (start, end) => {};

gameBoard([3, 3], [4, 3]);

console.log(gameBoard([3, 3], [4, 3]));
