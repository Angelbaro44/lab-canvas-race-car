// Canvas Set-Up
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Ball properties
var ballRadius = canvas.width/20;
// Paddle properties
var paddleHeight = canvas.height/6;
var paddleWidth = canvas.width/8;
var paddleX = (canvas.width-paddleWidth)/2;
// position and speed properties
var x = Math.floor((Math.random() * canvas.width) / 2);
var y = Math.floor((Math.random() * 50) + paddleHeight + 5);
var dx = 2;
var dy = -2;
// keypad & Score properties
var rightPressed = false;
var leftPressed = false;
var score = 0;
// Ball img storage
var loveball1 = new Image();   
loveball1.src = 'images/fire ball small.png'; 
var loveball2 = new Image();   
loveball2.src = 'images/fireball big.png'; 
var loveball3 = new Image();   
loveball3.src = 'images/real red fire.png'; 
var loveball4 = new Image();   
loveball4.src = 'images/real blue fire.png'; 
var loveball5 = new Image();   
loveball5.src = 'images/real purple fire.png'; 
var loveball6 = new Image();   
loveball6.src = 'images/real black fire.png'; 
// Player paddle img storeage
var rioluLeft = new Image();   
rioluLeft.src = 'images/riolu left.png'; 
var rioluRight = new Image();   
rioluRight.src = 'images/riolu right.png'; 
var rioluUp = new Image();   
rioluUp.src = 'images/riolu up-right.png'; 
var maylene = new Image();   
maylene.src ='images/hooh.png'; 
var canvasBack = new Image();   
canvasBack.src = 'images/18oiwrk32uilpgif.gif'; 
// keypad Event Listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//<!--------------------------------------------------------------!>

// Keypad Hold Down Event Executer
function keyDownHandler(e) {
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
  
}

// Keypad Hold Down Event Executer
function keyUpHandler(e) {
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
     if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
   
}

// 
function drawBall() {
    console.log(score)

    if( score >= 0){
    ctx.beginPath();
    ctx.drawImage(loveball1, x, y,ballRadius,ballRadius)
    ctx.fillStyle = loveball1;
    ctx.fill();
    ctx.closePath();}
      if( score > 3){
        ctx.beginPath();
        ctx.drawImage(loveball2, x, y,ballRadius,ballRadius)
        ctx.fillStyle = loveball2;
        ctx.fill();
        ctx.closePath();}
        if( score > 6){
            ctx.beginPath();
            ctx.drawImage(loveball3, x, y,ballRadius,ballRadius)
            ctx.fillStyle = loveball3;
            ctx.fill();
            ctx.closePath();}
            if( score >9 ){
                ctx.beginPath();
                ctx.drawImage(loveball4, x, y,ballRadius,ballRadius)
                ctx.fillStyle = loveball4;
                ctx.fill();
                ctx.closePath();}
                if( score > 12){
                    ctx.beginPath();
                    ctx.drawImage(loveball5, x, y,ballRadius,ballRadius)
                    ctx.fillStyle = loveball5;
                    ctx.fill();
                    ctx.closePath();} 
                    if( score > 18){
                        ctx.beginPath();
                        ctx.drawImage(loveball6, x, y,ballRadius,ballRadius)
                        ctx.fillStyle = loveball6;
                        ctx.fill();
                        ctx.closePath();} 
}

// 
function drawPaddle() {
    ctx.beginPath();
        //  ctx.clearRect(0, 0, canvas.width, canvas.height);
       // ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    if(leftPressed === true){
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(rioluLeft, paddleX, canvas.height-paddleHeight,paddleWidth,paddleHeight);
     ctx.fillStyle = rioluLeft;
     ctx.fill();
     ctx.closePath();
     console.log('helo left')}
  if(rightPressed === true){
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(rioluRight, paddleX, canvas.height-paddleHeight,paddleWidth,paddleHeight);
     ctx.fillStyle = rioluRight;
     ctx.fill();
     ctx.closePath();
     console.log('helo right')}
   if(rightPressed === leftPressed){
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(rioluUp, paddleX, canvas.height-paddleHeight,paddleWidth,paddleHeight);
        ctx.fillStyle = rioluUp;
        ctx.fill();
        ctx.closePath();
        console.log('helo up') }
}

// 
function drawPaddle2() {
    ctx.beginPath();
    ctx.drawImage(maylene, x - 20, 0 ,paddleWidth + 100,paddleHeight + 20);
    ctx.fillStyle = maylene;
    ctx.fill();
    ctx.closePath();
}

// 
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBack,0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle();
    drawPaddle2(); 
    document.querySelector("body > h1").innerText= score + ' FireBalls Blocked'
    console.log(y)
    if(score === 25 ){
        alert("Wow you won the game!!!! What a godly player O.o");
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
    }
    if(x + dx > canvas.width-ballRadius || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy < paddleHeight) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-paddleHeight) {
        if(x > paddleX -10  && x < paddleX + 10 + paddleWidth) {
            dx++;
            dy++;
            score++;
            console.log(score)
            dy = -dy;

        }
        else {
            // alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 8;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 8;
    }
    
    x += dx;
    y += dy;
}
// document.querySelector(section:nth-child(1)).addEventListener("click", ()=> interval = setInterval(draw, 10));
// document.querySelector("section").addEventListener("click", ()=> interval = setInterval(draw, 15));
document.querySelector("section").addEventListener("click", ()=> interval = setInterval(draw, 10));