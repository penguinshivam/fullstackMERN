let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];
let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
    document.querySelector("body").style.backgroundColor = "white";
  }

});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randIdx=Math.floor(Math.random()*4);
  let randColour=btns[randIdx];
  let randbtn = document.querySelector(`.${randColour}`)

  console.log(randIdx);
  gameSeq.push(randColour);

  
  gameFlash(randbtn);
}
function checkAns(idx){
  if (userSeq[idx]===gameSeq[idx]) {
    if (userSeq.length==gameSeq.length) {
      setTimeout(levelUp,1000);
    }
    
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    
    reset();
  }
}

function btnPress(){
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);
  // console.log(this);
  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}
function reset(){
  userSeq=[];
  gameSeq=[];
  level=0;
  started=false;

}