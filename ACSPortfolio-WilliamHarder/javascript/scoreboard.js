function setup() {
  createCanvas(600, 400);
  frameRate(1); //speed up frame rate to 25-50 to get to end of game        quickly
  frameCount = 0;
  background("Green");
  
}

//Scoreboard operator quick operation cheat sheet:
// Mouse: use mouse to Start/Stop clock
//1: Away Score increase by 1
//2: Away Score increase by 2
//3: Away Score increase by 3
//4: Home Score increase by 1
//5: Home Score increase by 2
//6: Home Score increase by 3
//7: Away Fouls increase by 1
//8: Home Fouls increase by 1
//9: Away Score subtracts 1
//0: Home Score subtracts 1
//a: Away Fouls subtracts 1
//h: Home Fouls subtracts 1
//any other key: No more values will be added to any of the scores/fouls
//The operator must be quick when pressing the other keys


function draw() {
  drawScore1();
  drawScore2();
  drawFoul1();
  drawFoul2();
  scoreAway(); 
  scoreHome();
  foulsAway();
  foulsHome();
  clock();
  period();
  keyTyped();
  drawArenaName();
  drawBasketball();
  drawBasketball2();
  drawMinnesotaLogo();
  drawR();
}

var score1 = 0;
var score2 = 0;
var fouls1 = 0;
var fouls2 = 0;
var half = 1;
var timeMin = 20;
var timeSec = 1;
var scoreBox1XPos = 50;
var scoreBox1YPos = 50;
var scoreBox2XPos = 415;
var scoreBox2YPos = 50;
var foulsBoxAwayXPos = 62.5;
var foulsBoxHomeYPos = 175;
var foulsBoxHomeXPos = 427.5;
var foulsBoxHomeYPos = 175;
var halfHomeScore;
var halfAwayScore;
var halfHomeFouls;
var halfAwayFouls;

function drawArenaName(){
  textSize(60);
  fill("NavyBlue");
  text("Irish Arena", 150,395);
}

function drawMinnesotaLogo() {
  scale(0.4);
  stroke("Maroon");
  fill("Maroon");
  rect(50, 900, 36, 12);
  rect(100, 874.5, 36, 12);
  rect(150, 900, 36, 12);
  rect(75, 825, 36, 12);
  rect(125, 825, 36, 12);
  quad(59, 900, 84, 825, 102, 825, 77, 900);
  quad(84, 825, 109, 874.5, 127, 874.5, 100, 825);
  quad(109, 874.5, 135, 825, 153, 825, 127, 874.5);
  quad(135, 825, 160, 900, 178, 900, 150, 825);
  textSize(12);
}

function drawR(){
  scale(1);
  textSize(100);
  fill("Green");
  text("R", 1338, 910);
}

function drawScore1(){
  stroke("Black");
  fill("Black");
  rect(scoreBox1XPos,scoreBox1YPos,100,100);
  textSize(15);
  text("Away Team",60,40);
}

function drawScore2(){
  fill("Black");
  rect(scoreBox2XPos,scoreBox2YPos,100,100);
  textSize(15);
  text("Home Team",425,40);
}

function drawFoul1(){
  fill("Black");
  rect(62.5,175,75,75);
  textSize(15);
  text("Away Fouls",62.5,265);
}

function drawFoul2(){
  fill("Black");
  rect(427.5,175,75,75);
  textSize(15);
  text("Home Fouls",425,265);
}

function scoreAway(){
  fill("White");
  textSize(75);
  text(score1,60,125);
}

function scoreHome(){
  fill("White");
  textSize(75);
  text(score2,420,125);
}

function foulsHome(){
  fill("White");
  textSize(60);
  text(fouls2,430,235);
}

function foulsAway(){
  fill("White");
  textSize(60);
  text(fouls1,70,235);
}

function keyTyped() {
  if (key === '1') {
    score1++;
    //Away Team Free Throw
  } 
  if (key ==='2') {
    score1+=2;
    //Away Team Two Pointer
  }
  if (key === '3') {
    score1+=3;
    //Away Team Three Pointer
  }
  if (key === '4') {
    score2++;
    //Home Team Free Throw
  }
  if (key === '5') {
    score2+=2;
    //Home Team Two Pointer
  }
  if (key === '6') {
    score2+=3;
    //Home Team Three Pointer
  }
  if (key === '7'){
    fouls2++;
    //Home Team Fouls
  }
  if (key === '8'){
    fouls1++;
    //Away Team Fouls
  }
  if (key === '9'){
    score1--;
  }
  if (key === '0'){
    score2--;
  }
  if (key === 'h'){
    fouls2--;
  }
  if (key === 'a'){
    fouls1--;
  }
  
}

function clock(){
  fill("black");
  rect(210,65,150,65);
  textSize(35);
  fill("white");
  text(timeMin, 225,115);
  textSize(50);
  text(":", 275,115);
  textSize(35);
  text(timeSec, 305,115);
  timeSec--;
  if(timeSec===0 && timeMin!=0){
    timeMin--;
    timeSec=59;
  }
  if(timeMin===0&&timeSec===0){
    half++;
    timeMin=20;
    timeSec=1;
  }
  if(half===2&&timeMin===20){
    print("Halftime Statistics:");
   halfHomeScore = score2;
   halfAwayScore = score1;
   halfHomeFouls = fouls2;
   halfAwayFouls = fouls1;
    print("Home Team Score: " + halfHomeScore + " Away Team Score: " + halfAwayScore);
    print("Home Team Fouls :" + halfHomeFouls + " Away Team Fouls:" + halfAwayFouls);
    
  }
  if(half===3){
    print("The game is over!");
    print("Final Statistics below:");
    print("Home Team Score: " + score2 + " Away Team Score: " + score1);
    print("Home Team Fouls :" + fouls2 + " Away Team Fouls:" + fouls1);
    half=1;
    score1 = 0;
    score2 = 0;
    fouls1 = 0;
    fouls2 = 0;
    halfHomeScore = 0;
    halfAwayScore = 0;
    halfHomeFouls = 0;
    halfAwayFouls = 0;
  }
}

function drawBasketball(){
  fill("orange");
  ellipse(50,350,75,75);
}


function drawBasketball2(){
  fill("orange");
  ellipse(550,350,75,75);
}

function period(){
  fill("black");
  textSize(45);
  square(265,150,50);
  fill("white");
  text(half, 277,190);
  fill("black");
  textSize(25);
  text("Period", 255,225);  
}

function mousePressed(){
  noLoop();  
}

function mouseReleased(){
  loop();
}