const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const newGameButton = document.querySelector("#new-btn");
const messageContainer = document.querySelector(".msg-container");
const message = document.querySelector("#msg");

let playerO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

function showWinner(winner) {
  message.innerText = `Congratulations, winner is ${winner}`;
  messageContainer.classList.remove("hide");
};

function showWinner() {
  for (const pattern of winPatterns) {
    const pos1Val = boxes[pattern[0]].innerText;
    const pos2Val = boxes[pattern[1]].innerText;
    const pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};


