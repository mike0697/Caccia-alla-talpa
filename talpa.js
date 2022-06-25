

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const altezza = 10;
const base = 10;

const NLATO = 48;

let righe = new Array();
let punti = 0;

// initialize array ground
for(let i=0; i<10; i++){
    righe[i] = new Array();
    for(let j=0; j<10; j++){
        righe[i][j] = 0;
    }
}

console.log(righe);

const img = new Image();
img.src = "ground.png";
img.addEventListener('load', function() {
    //context.drawImage(img, 0,0);
    fillGround();
    let a1 = Math.floor(Math.random()*10);
    let a2 = Math.floor(Math.random()*10);
    addMole(a1,a2);
  }, false);

let fillGround = function(){
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            righe[i][j] = 0;
            context.drawImage(img, (NLATO * i) , (NLATO * j) );
        };
    };
};

let addGroundCasel = function(x, y){
    if(img.complete)
    {
        context.drawImage(img, (NLATO * x) , (NLATO * y) );
    };
}

const moleImg = new Image();
moleImg.src = "mole.png";

const zuccaImg = new Image();
zuccaImg.src = "zucca.png";

let addMole = function(e,l){
    //righe[e][l] = 1;
    //primo ciclo
    

    let talpaOrNot = Math.floor(Math.random()*10);
    if(talpaOrNot >= 3)
    { //allora creo la talpa
        righe[e][l] = 1;
        moleImg.addEventListener('load', function(){
            context.drawImage(moleImg, NLATO * e, NLATO * l);
        }, false);

        if(moleImg.complete)
        {  
        context.drawImage(moleImg, NLATO * e, NLATO * l);
        };
    }
    else
    { //creo la zucca
        righe[e][l] = -1;
        zuccaImg.addEventListener('load', function(){
            context.drawImage(zuccaImg, NLATO * e, NLATO * l);
        }, false);

        if(zuccaImg.complete)
        {
            context.drawImage(zuccaImg, NLATO * e, NLATO * l);
        };
    };
};

let mousex = 0;
let mousey= 0;

canvas.addEventListener('click', function() {
    if(punti < 0 || punti >= 1000){
        return;
    }
    mousex = event.pageX - canvas.getBoundingClientRect().left;
    mousex = Math.floor(mousex/NLATO);
    console.log("x = " + mousex);
    mousey = event.pageY - canvas.getBoundingClientRect().top;
    mousey = Math.floor(mousey/NLATO);
    console.log("y = " + mousey);
    //console.log(canvas.getBoundingClientRect());

    if(righe[mousex][mousey] === 1){
        punti += 100;
        addGroundCasel(mousex, mousey);
        //displayNewMole();
        //righe[randInt][randInt2] = 1;
    }
    if(righe[mousex][mousey] === -1){
        punti -= 200;
        addGroundCasel(mousex, mousey);
        //displayNewMole();
        //righe[randInt][randInt2] = 1;
    }
    console.log(righe);

}, false);


let displayNewMole = function(){
    if(punti < 0 || punti >= 1000){
        return;
    }
    
    let randInt = Math.floor(Math.random()*10);
    let randInt2 = Math.floor(Math.random()*10);
    if(righe[randInt][randInt2] === 0){
        addMole(randInt,randInt2);
    }else
    {
        let randInt = Math.floor(Math.random()*10);
        let randInt2 = Math.floor(Math.random()*10);
        if(righe[randInt][randInt2] === 0){
            addMole(randInt,randInt2);
        };
    };
};
    

let timer1 = setInterval(displayNewMole, 2700);

let timer2 = setInterval(function(){
    let p1 = document.getElementById("xp");
    p1.textContent = "punti : "+ punti;
},100);

