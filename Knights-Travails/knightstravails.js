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
    const board = [];

    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            board.push([i, j]);
        }
    }

    console.log(board);
};

const knightMoves = (start, end) => {};

gameBoard();
