const boardBox = document.getElementById("board-box");
const allCell = document.querySelectorAll(".board-box");
const restartBtn = document.getElementById("restart");

// allCell.forEach((cell) =>
//   cell.addEventListener(
//     "click",
//     (e) => {
//       cell.textContent = "X";
//       console.log(e.target);
//     },
//     { once: true }
//   )
// );

// const Player = () => {

// };

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  // event click
  // take the index info from event click
  // restart function
})();

const gameController = (() => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // check the winner, show winner msg

  // check the draw
})();
