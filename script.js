const Player = (mark) => {
  return { mark };
};

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const player_x = Player("X");
  const player_o = Player("O");

  return { board, player_x, player_o };
})();

const gameMain = (() => {
  const allCell = document.querySelectorAll(".board-box");

  let _player_x_turn = true;

  let currentPlayer = () =>
    _player_x_turn ? gameBoard.player_x.mark : gameBoard.player_o.mark;

  const switchTurn = () => {
    _player_x_turn = !_player_x_turn;
  };

  // iterate all the cells and add eventlistener to each one of them.
  let cells = Array.from(allCell);

  const checkWinner = () => {
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

    // some method will return true if there is a match combination, then we
    // check the combination using every, to check if all the index inside the
    // combination has the same mark using currentPlayer.
    return winCombination.some((combination) => {
      return combination.every((index) => {
        return cells[index].textContent === currentPlayer();
      });
    });
  };

  const getIndex = (cell) => {
    return (index = cells.indexOf(cell));
  };

  const restart = () => {
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];

    _player_x_turn = true;

    cells.forEach((cell) => {
      cell.textContent = "";
    });
  };

  cells.forEach((cell) =>
    cell.addEventListener("click", () => {
      if (cell.textContent !== "") {
        return null;
      } else if (_player_x_turn == true) {
        cell.textContent = gameBoard.player_x.mark;
      } else {
        cell.textContent = gameBoard.player_o.mark;
      }
      gameBoard.board.splice(getIndex(cell), 1, currentPlayer());
      displayController.winnerMsg();
      switchTurn();
    })
  );

  return { currentPlayer, checkWinner, restart };
})();

const displayController = (() => {
  const overlay = document.getElementById("overlay");
  const endMsg = document.getElementById("end-game-msg");
  const container = document.getElementById("container");

  const winnerMsg = () => {
    const checkCell = gameBoard.board.every((index) => index !== "");

    if (gameMain.checkWinner() == true) {
      container.classList.add("active");
      overlay.classList.add("active");
      endMsg.classList.add("active");
      endMsg.textContent = `Player ${gameMain.currentPlayer()} Wins`;
    } else if (checkCell == true) {
      container.classList.add("active");
      overlay.classList.add("active");
      endMsg.classList.add("active");
      endMsg.textContent = "It's a Draw";
    }
  };

  const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener("click", () => {
    gameMain.restart();
  });

  overlay.addEventListener("click", () => {
    container.classList.remove("active");
    overlay.classList.remove("active");
    endMsg.classList.remove("active");
    endMsg.textContent = "";
    gameMain.restart();
  });

  return { winnerMsg };
})();
