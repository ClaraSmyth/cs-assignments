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

const gameBoard = (start, end) => {
    const queue = [];

    let startNode = node(...start);
    let endNode = node(...end);

    possibleMoves.forEach((move) => {
        if (
            startNode.x + move[0] >= 0 &&
            startNode.x + move[0] < 8 &&
            startNode.y + move[1] >= 0 &&
            startNode.y + move[1] < 8
        ) {
            let x = startNode.x + move[0];
            let y = startNode.y + move[1];
            queue.push(node(x, y, startNode));
        }
    });

    console.log(startNode);
    console.log(queue);
};

const knightMoves = (start, end) => {};

gameBoard([3, 3], [4, 3]);
