import { Gameboard } from "./gameBoard.js";
import { Gameflow } from "./gameFlow.js";

export const Render = {
    squares: document.querySelectorAll(".game-square"),
    text: document.getElementById("dynamicText"),

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
    },

    updateText: function (text) {
        this.text.innerHTML = text;
    },
};
