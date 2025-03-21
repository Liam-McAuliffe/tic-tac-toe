import { Player } from "./player.js";
import { Gameboard } from "./gameBoard.js";
import { Render } from "./render.js";

export const Gameflow = {
    player1: Player.createNewPlayer("Player 1", "X"),
    player2: Player.createNewPlayer("Player 2", "O"),
    currentPlayer: null,

    init: function () {
        Render.addEventListener();
        this.currentPlayer = this.player1;
    },

    startGame: function () {
        if (!Gameboard.board.every((square) => square === "")) return;

        if (this.currentPlayer.marker === "O") {
            this.updateTurn();
        }
        Render.getNewNames();
        Render.updateText(this.player1.name + " goes first.");
    },
    makeMove: function (index) {
        if (Gameboard.board[index] !== "" || Render.text.innerHTML === "")
            return;

        Gameboard.changeBoard(this.currentPlayer.marker, index);
        Render.updateBoard();

        if (this.checkWin()) {
            this.resetGame();
            Render.updateText(this.currentPlayer.name + " Won!");
            return;
        }

        if (this.checkDraw()) {
            Render.updateText("Draw");
            this.resetGame();
            return;
        }
        this.updateTurn();
    },

    updateTurn: function () {
        this.currentPlayer =
            this.currentPlayer === this.player1
                ? (this.currentPlayer = this.player2)
                : this.player1;
        Render.updateText(this.currentPlayer.name + "'s turn");
    },
    checkWin: function () {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return winningCombos.some((combo) => {
            const [a, b, c] = combo;
            return (
                Gameboard.board[a] &&
                Gameboard.board[a] === Gameboard.board[b] &&
                Gameboard.board[a] === Gameboard.board[c]
            );
        });
    },
    checkDraw: function () {
        return (
            Gameboard.board.every((square) => square !== "") && !this.checkWin()
        );
    },
    resetGame: function () {
        Gameboard.board = ["", "", "", "", "", "", "", "", ""];
        Render.updateBoard();
        this.currentPlayer = this.player1;
        Render.updateText("");
    },
};
