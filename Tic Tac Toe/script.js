let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainter = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');

let turn0 = true;

const winPatterns =[
    [0,1,2],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    [2,4,6]
];

const resetGame = () => {
            turn0 = true;    
            enableBoxes();
            msgContainter.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked..!");
        if(turn0){
            box.innerText = "0";
            turn0 = false;

        }
        else{
         box.innerText = "x";
            turn0 = true;
        }
            box.disabled = true;

            checkWinner();
    });
});

const enableBoxes = () =>{
    for(let box of boxes)
        box.disabled = false;
    box.innerText = "";
};

const disableBoxes = () =>{
    for(let box of boxes)
        box.disabled =true;
};

const showWinner = (winner) => {
      msg.innerText = `Congraulations..!  The Wninner is ${winner}`;
      msgContainter.classList.remove("hide");
      disableBoxes();
};


const checkWinner = () => {                                                                                                              

        for(let patterns of winPatterns){
            let posVal1 = boxes[patterns[0]].innerText;
            let posVal2 = boxes[patterns[1]].innerText;
            let posVal3 = boxes[patterns[2]].innerText;

            if(posVal1 != "" && posVal2 != ""  && posVal3 != ""){
                if(posVal1 === posVal2 && posVal2 === posVal3){
                    console.log("Winner is  ", posVal1);
                    
                    showWinner(posVal1);
                }
            }
        }
    };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);