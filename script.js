let container = document.querySelector(".container")
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let winnerPer = document.querySelector(".winner");
let count = 0;

let turnO = true;

const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.style.color="aqua";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        if(count===9){
            matchDraw();
        }
        checkWinner();
    });
});

const disableBtns = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const enabledBtns = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const newGame = () =>{
    turnO = true;
    enabledBtns();
    msgContainer.classList.add("hide");
};

const finalWinner = (winner) =>{
    winnerPer.innerText = `Congratulation the winner is : ${winner}`;
    container.classList.add("hide");
    resetBtn.classList.add("hide");
    msgContainer.classList.remove("hide");
    disableBtns();
};

const matchDraw = () =>{
    winnerPer.innerText = "Match Draw. Please start New Game";
    container.classList.add("hide");
    resetBtn.classList.add("hide");
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(pattern of winnerPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                finalWinner(pos1Val);
            }

        }
    }
};

newBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",newGame);