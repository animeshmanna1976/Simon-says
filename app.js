let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;                                   //game start
        levelUp();
    }

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");                  //btn flash
    }, 300);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");                  
    }, 300);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIndx=Math.floor(Math.random()*3);
    let randIndColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randIndColor}`);
    gameSeq.push(randIndColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },700);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn); 
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
