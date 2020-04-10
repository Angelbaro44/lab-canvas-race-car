var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = canvas.width/30;
var paddleHeight = canvas.height/6;
var paddleWidth = canvas.width/8;
var paddleX = (canvas.width-paddleWidth)/2;
var x = canvas.width/2;
var y = Math.floor((Math.random() * 50) + paddleHeight + 5);
var dx = 2;
var dy = -2;

var rightPressed = false;
var leftPressed = false;
var score = 10;

var loveball = new Image();   // Create new img element
loveball.src = 'images/pokemon love 2.png'; // Set source path

var rioluLeft = new Image();   // Create new img element
rioluLeft.src = 'images/riolu left.png'; // Set source path

var rioluRight = new Image();   // Create new img element
rioluRight.src = 'images/riolu right.png'; // Set source path

var rioluUp = new Image();   // Create new img element
rioluUp.src = 'images/riolu up-right.png'; // Set source path

var maylene = new Image();   // Create new img element
maylene.src ='images/hooh.png'; // Set source path

var canvasBack = new Image();   // Create new img element
canvasBack.src = 'images/18oiwrk32uilpgif.gif'; // Set source path




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
  
}

function keyUpHandler(e) {
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
     if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
   
}

function drawBall() {
    
    ctx.beginPath();
    // ctx.arc(x, (y), ballRadius, 0, Math.PI*2);
    ctx.drawImage(loveball, x, y,ballRadius,ballRadius)
    ctx.fillStyle = loveball;
    ctx.fill();
    ctx.closePath();
}
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
function drawPaddle2() {
    ctx.beginPath();
    ctx.drawImage(maylene, x - 20, 0 ,paddleWidth + 100,paddleHeight + 20);
    ctx.fillStyle = maylene;
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBack,0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle();
    drawPaddle2(); 
    document.querySelector("body > h1").innerText= score + ' Health '
    console.log(y)
    if(score === 0 ){
        alert("GAME Won!!!!");
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
    }
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < paddleHeight) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-paddleHeight) {
        if(x > paddleX - ballRadius && x < paddleX + ballRadius + paddleWidth) {
            dx++;
            dy++;
            score--;
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

var interval = setInterval(draw, 15);