var hero;
var friend1,friend2;
var evil1,evil2,evil3,evil4;

var wall1, wall1, wall3
var bg;

var life = 3;

var gameState = "PLAY";
 
var bulletsL,bulletLGroup;
var bulletsR,bulletRGroup;
var bulletsU,bulletUGroup;
var bulletsD,bulletDGroup;


 


function preload(){
  enemyIdle = loadAnimation ("images/enemyidle.png","images/enemyidle2.png","images/enemyidle3.png",
  "images/enemyidle4.png","images/enemyidle5.png");
  enemyAttack = loadAnimation("images/enemyattack1.png","images/enemyattack2.png","images/enemyattack3.png",
  "images/enemyattack4.png","images/enemyattack5.png","images/enemyattack6.png");

  girlleft = loadAnimation("images/girlleft1.png","images/girlleft2.png","images/girlleft3.png","images/girlleft4.png");

  girlImg = loadImage("images/girlleft1.png");

  pcLeft = loadAnimation("images/ninjaleft1.png","images/ninjaleft2.png","images/ninjaleft3.png");
  pcRight = loadAnimation("images/ninjaright1.png","images/ninjaright2.png","images/ninjaright3.png")
 

  bg = loadImage("images/grdn.png");

  pcImage = loadImage("images/ninjaright1.png");

  
  
}

function setup(){
createCanvas(windowWidth,windowHeight);

hero = createSprite(77,100,20,20);
hero.addImage("idle",pcImage);
hero.addAnimation("up",pcLeft);
hero.addAnimation("down",pcRight);
hero.addAnimation("right",pcRight);
hero.addAnimation("left",pcLeft);
hero.scale = 0.19

friend1 = createSprite(927,380,20,20);
friend1.addImage("girlImage",girlImg);
friend1.scale = 0.2;

evil1 = createSprite(530,89,20,20);
evil1.addAnimation("still",enemyIdle);
evil1.addAnimation("attack",enemyAttack);
evil1.scale = 0.19;
evil1.velocityX = 3.5;

evil2 = createSprite(526,237,20,20);
evil2.shapeColor = "red";
evil2.addAnimation("still",enemyIdle);
evil2.addAnimation("attack",enemyAttack);
evil2.scale = 0.19

evil3 = createSprite(869,405,20,20);
evil3.shapeColor = "red";
evil3.addAnimation("still",enemyIdle);
evil3.addAnimation("attack",enemyAttack);
evil3.scale = 0.19

evil4 = createSprite(270,370,20,20);
evil4.shapeColor = "red";
evil4.addAnimation("still",enemyIdle);
evil4.addAnimation("attack",enemyAttack);
evil4.scale = 0.19

wall1 = createSprite(510,320,357,10);
wall2 = createSprite(533,360,300,10);
wall3 = createSprite(336,281,10,87);
wall4 = createSprite(363,240,290,10);
wall5 = createSprite(427,180,10,30);
wall6 = createSprite(503,220,10,30);
wall7 = createSprite(556,210,10,100);
wall8 = createSprite(666,258,230,10);
wall9 = createSprite(666,210,10,100);
wall10 = createSprite(472,170,80,10);
wall11 = createSprite(507,144,10,60);
wall12 = createSprite(612,118,220,10);
wall13 = createSprite(280,200,120,10);
wall14 = createSprite(225,135,10,140);
wall15 = createSprite(335,150,10,90);
wall16 = createSprite(355,100,50,10);
wall17 = createSprite(375,84,10,40);
wall18 = createSprite(563,69,683,10);

wall19 = createSprite(613,170,10,100);

wall20 = createSprite(717,170,10,100);

wall21 = createSprite(776,183,10,147);

wall22 = createSprite(900,214,10,300);

wall23 = createSprite(335,405,10,100);

wall24 = createSprite(360,450,47,10);
wall25 = createSprite(379,405,10,100);
wall26 = createSprite(223,400,10,330);
wall27 = createSprite(590,560,730,10);
wall28 = createSprite(950,460,10,200);
wall29 = createSprite(925,360,60,10);
wall30 = createSprite(925,410,60,10);

wall31 = createSprite(410,410,57,10);
wall32 = createSprite(434,458,10,105);

wall33 = createSprite(578,506,297,10);

wall34 = createSprite(730,382,10,258);

wall35 = createSprite(845,313,10,200);
//above
wall36 = createSprite(800,410,100,10);

wall36 = createSprite(594,460,10,100);

wall38 = createSprite(530,410,10,100);
wall39 = createSprite(678,410,10,100);
wall40 = createSprite(837,217,120,10);
wall17.shapeColor = "red";
wall22.shapeColor = "red";


bulletLGroup = new Group();
bulletRGroup = new Group();
bulletUGroup = new Group();
bulletDGroup = new Group();





}

function draw(){
  background(bg);

  if(gameState === "PLAY"){

  

  //hero's movement
  if(keyDown(UP_ARROW)){
      hero.y = hero.y - 3;
      hero.changeAnimation("left",pcRight);
  }

  if(keyDown(DOWN_ARROW)){
      hero.y = hero.y + 3;
      hero.changeAnimation("down",pcLeft);
  }

  if(keyDown(RIGHT_ARROW)){
    hero.x = hero.x + 3;
    hero.changeAnimation("right",pcRight);
  }

  if(keyDown(LEFT_ARROW)){
    hero.x = hero.x - 3;
    hero.changeAnimation("left",pcLeft);
  }

  if(keyDown("d")){
    createBulletR();
    
  }

  if(keyDown("a")){
    createBulletL();
    
  }

  if(keyDown("w")){
    createBulletU();
    
  }

  if(keyDown("s")){
    createBulletD();
    
  }

  if(bulletLGroup.isTouching(evil1)||bulletRGroup.isTouching(evil1)
  ||bulletUGroup.isTouching(evil1)||bulletDGroup.isTouching(evil1)){
    evil1.destroy();
  }

  if(bulletLGroup.isTouching(evil2)||bulletRGroup.isTouching(evil2)
  ||bulletUGroup.isTouching(evil2)||bulletDGroup.isTouching(evil2)){
    evil2.destroy();
  }

  if(bulletLGroup.isTouching(evil3)||bulletRGroup.isTouching(evil3)
  ||bulletUGroup.isTouching(evil3)||bulletDGroup.isTouching(evil3)){
    evil3.destroy();
  }

  if(bulletLGroup.isTouching(evil4)||bulletRGroup.isTouching(evil4)
  ||bulletUGroup.isTouching(evil4)||bulletDGroup.isTouching(evil4)){
    evil4.destroy();
  }

  //bullet bounces(off)

  //evil bounces(off)
  evil1.bounceOff(wall17);
  evil1.bounceOff(wall22);

  

  if(friend1.isTouching(hero)){
    fill("purple")
    textSize(25);
    text("Friend rescued , help her by carying",450,50);
      friend1.x = hero.x - 10;
      friend1.y = hero.y;
  }

  


  drawSprites();

  if(hero.isTouching(evil1)||hero.isTouching(evil2)||
  hero.isTouching(evil3)||hero.isTouching(evil4)){
    life = life - 1;
    hero.x = 77;
    hero.y = 100;
     
    if(life === 0){
        gameState = "END";
    }
  }

  }
  if(gameState === "END"){
      fill("black")
      textSize(50);
      text("Game Over!!!",width/2,height/2);
      text("Press 'R' to reset",450,450);
  }

  if(keyDown("r")&& gameState === "END"){
    gameState = "PLAY";
    life = 3;
  }

  

  fill("red");
  textSize(20);
  text("YOUR LIFE : "+ life,30,50);

}

function createBulletL(){
  bulletsL = createSprite(hero.x,hero.y,5,5);
  
  bulletsL.velocityX = -5;

  bulletLGroup.add(bulletsL);
}

function createBulletR(){
  bulletsR = createSprite(hero.x,hero.y,5,5);
  
  bulletsR.velocityX = 5;

  bulletRGroup.add(bulletsR);
}

function createBulletU(){
  bulletsU= createSprite(hero.x,hero.y,5,5);
  
  bulletsU.velocityY = -5;

  bulletUGroup.add(bulletsU);
}

function createBulletD(){
  bulletsD = createSprite(hero.x,hero.y,5,5);
  
  bulletsD.velocityY = 5;
  bulletDGroup.add(bulletsD)
}