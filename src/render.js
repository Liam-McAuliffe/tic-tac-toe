import { Gameboard } from "./gameBoard.js";
import { Gameflow } from "./gameFlow.js";

export const Render = {
    squares: document.querySelectorAll(".game-square"),
    text: document.getElementById("dynamicText"),
    startButton: document.getElementById("startGame"),
    resetButton: document.getElementById("resetGame"),

    getNewNames: function () {
        Gameflow.player1.name = document.getElementById("playerOneName").value;
        Gameflow.player2.name = document.getElementById("playerTwoName").value;
    },
    updateBoard: function () {
        const board = Gameboard.board;
        this.squares.forEach((square, index) => {
            square.textContent = Gameboard.board[index];
        });
    },

    addEventListener: function () {
        this.squares.forEach((square, index) => {
            square.addEventListener("click", () => {
                Gameflow.makeMove(index);
            });
        });
        this.startButton.addEventListener("click", () => {
            Gameflow.startGame();
        });
        this.resetButton.addEventListener("click", () => {
            Gameflow.resetGame();
        });
    },

    updateText: function (text) {
        this.text.innerHTML = text;
    },
};
