function validSolution(board){
    //define function that checks each row if only unique values are represented
    for (let i = 0;i<board.length;i++) {
        if (board[i].length !== new Set(board[i]).size) {
            return false;
        }
    }
    //create a traversed board and check for zeros
    let boardTraverse = [];
    for (let i = 0;i<board.length;i++) {
        let arr = [];
        for (let j = 0;j<board[i].length;j++) {
            if (board[j][i] === 0) return false;
            arr.push(board[j][i]);
        }
        boardTraverse.push(arr)
    }
    //check traversed for validity
    for (let i = 0;i<boardTraverse.length;i++) {
        if (boardTraverse[i].length !== new Set(boardTraverse[i]).size) {
            return false;
        }
    }
    //create a 3x3 block grid
    let arr3x3 = [];
    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board.length; j += 3) {
            let arr = [];
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    arr.push(board[i + k][j + l]);
                }
            }
            console.log(arr);
            arr3x3.push(arr);
        }
    }
    //check 3x3 for validity
    for (let i = 0;i<arr3x3.length;i++) {
        if (arr3x3[i].length !== new Set(arr3x3[i]).size) {
            return false;
        }
    }
    // check the 3x3 boxes for correctness
    return true;
}
console.log(validSolution([ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
    [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
    [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
    [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ] ]))

// console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]))

// console.log(validSolution([[1, 2, 3],[4,5,6],[7,8,9]]));
console.log(validSolution([ 
    [ 1, 2, 6, 3, 4, 7, 5, 9, 8 ],
    [ 7, 3, 5, 8, 1, 9, 6, 4, 2 ],
    [ 1, 9, 4, 2, 7, 5, 8, 6, 3 ],
    [ 3, 1, 7, 5, 8, 4, 2, 6, 9 ],
    [ 7, 5, 9, 1, 6, 2, 4, 3, 8 ],
    [ 4, 8, 2, 9, 3, 6, 7, 1, 5 ],
    [ 1, 4, 8, 7, 5, 9, 3, 2, 6 ],
    [ 5, 6, 1, 4, 2, 3, 9, 8, 7 ],
    [ 2, 7, 3, 6, 9, 1, 8, 5, 4 ]]));
