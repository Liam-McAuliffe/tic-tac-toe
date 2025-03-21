export const Gameboard = {
    board: ["", "", "", "", "", "", "", "", ""],

    changeBoard: function (marker, index) {
        this.board[index] = marker;
    },
};
