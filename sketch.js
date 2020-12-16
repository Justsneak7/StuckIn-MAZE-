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

  bulletImg = loadImage("images/bullet.png");

  bulletUImg = loadImage("images/bulletup.png");
  
  bulletDImg = loadImage("images/bulletdown.png");

  bulletLImg = loadImage("images/bulletleft.png");

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
evil2.velocityY = 3.5;

evil3 = createSprite(869,405,20,20);
evil3.shapeColor = "red";
evil3.addAnimation("still",enemyIdle);
evil3.addAnimation("attack",enemyAttack);
evil3.scale = 0.19
evil3.velocityY = 3.5
;
evil4 = createSprite(270,370,20,20);
evil4.shapeColor = "red";
evil4.addAnimation("still",enemyIdle);
evil4.addAnimation("attack",enemyAttack);
evil4.scale = 0.19
evil4.velocityX = -3.5;

wall1 = createSprite(510,320,357,10);
wall1.shapeColor = "purple";
wall2 = createSprite(533,360,300,10);
wall2.shapeColor = "purple";
wall3 = createSprite(336,281,10,87);
wall3.shapeColor = "purple";
wall4 = createSprite(363,240,290,10);
wall4.shapeColor = "purple";
wall5 = createSprite(427,180,10,30);
wall5.shapeColor = "purple";
wall6 = createSprite(503,220,10,30);
wall6.shapeColor = "purple";
wall7 = createSprite(556,210,10,100);
wall7.shapeColor = "purple";
wall8 = createSprite(666,258,230,10);
wall8.shapeColor = "purple";
wall9 = createSprite(666,210,10,100);
wall9.shapeColor = "purple";
wall10 = createSprite(472,170,80,10);
wall10.shapeColor = "purple";
wall11 = createSprite(507,144,10,60);
wall11.shapeColor = "purple";
wall12 = createSprite(612,118,220,10);
wall12.shapeColor = "purple";
wall13 = createSprite(280,200,120,10);
wall13.shapeColor = "purple";
wall14 = createSprite(225,135,10,140);
wall14.shapeColor = "purple";
wall15 = createSprite(335,150,10,90);
wall15.shapeColor = "purple";
wall16 = createSprite(355,100,50,10);
wall16.shapeColor = "purple";
wall17 = createSprite(375,84,10,40);
wall17.shapeColor = "purple";
wall18 = createSprite(563,69,683,10);
wall18.shapeColor = "purple";
wall19 = createSprite(613,170,10,100);
wall19.shapeColor = "purple";
wall20 = createSprite(717,170,10,100);
wall20.shapeColor = "purple";
wall21 = createSprite(776,183,10,147);
wall21.shapeColor = "purple";
wall22 = createSprite(900,214,10,300);
wall22.shapeColor = "purple";
wall23 = createSprite(335,405,10,100);
wall23.shapeColor = "purple";
wall24 = createSprite(360,450,47,10);
wall24.shapeColor = "purple";
wall25 = createSprite(379,405,10,100);
wall25.shapeColor = "purple";
wall26 = createSprite(223,400,10,330);
wall26.shapeColor = "purple";
wall27 = createSprite(590,560,730,10);
wall27.shapeColor = "purple";
wall28 = createSprite(950,460,10,200);
wall28.shapeColor = "purple";
wall29 = createSprite(925,360,60,10);
wall29.shapeColor = "purple";
wall30 = createSprite(925,410,60,10);
wall30.shapeColor = "purple";
wall31 = createSprite(410,410,57,10);
wall31.shapeColor = "purple";
wall32 = createSprite(434,458,10,105);
wall32.shapeColor = "purple";
wall33 = createSprite(578,506,297,10);
wall33.shapeColor = "purple";
wall34 = createSprite(730,382,10,258);
wall34.shapeColor = "purple";
wall35 = createSprite(845,313,10,200);
wall35.shapeColor = "purple";
wall36 = createSprite(800,410,100,10);
wall36.shapeColor = "purple";
wall37 = createSprite(594,460,10,100);
wall37.shapeColor = "purple";
wall38 = createSprite(530,410,10,100);
wall38.shapeColor = "purple";
wall39 = createSprite(678,410,10,100);
wall39.shapeColor = "purple";
wall40 = createSprite(837,217,120,10);
wall40.shapeColor = "purple";



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
  if(bulletLGroup.isTouching(wall1)||bulletLGroup.isTouching(wall2)||bulletLGroup.isTouching(wall3)||bulletLGroup.isTouching(wall4)
  ||bulletLGroup.isTouching(wall4)||bulletLGroup.isTouching(wall6)||bulletLGroup.isTouching(wall7)||bulletLGroup.isTouching(wall8)
  ||bulletLGroup.isTouching(wall9)||bulletLGroup.isTouching(wall10)||bulletLGroup.isTouching(wall11)||bulletLGroup.isTouching(wall12)
  ||bulletLGroup.isTouching(wall13)||bulletLGroup.isTouching(wall14)||bulletLGroup.isTouching(wall15)||bulletLGroup.isTouching(wall16)
  ||bulletLGroup.isTouching(wall17)||bulletLGroup.isTouching(wall18)||bulletLGroup.isTouching(wall19)||bulletLGroup.isTouching(wall20)
  ||bulletLGroup.isTouching(wall21)||bulletLGroup.isTouching(wall22)||bulletLGroup.isTouching(wall23)||bulletLGroup.isTouching(wall24)
  ||bulletLGroup.isTouching(wall25)||bulletLGroup.isTouching(wall26)||bulletLGroup.isTouching(wall27)||bulletLGroup.isTouching(wall28)
  ||bulletLGroup.isTouching(wall29)||bulletLGroup.isTouching(wall30)||bulletLGroup.isTouching(wall31)||bulletLGroup.isTouching(wall32)
  ||bulletLGroup.isTouching(wall33)||bulletLGroup.isTouching(wall34)||bulletLGroup.isTouching(wall35)||bulletLGroup.isTouching(wall36)
  ||bulletLGroup.isTouching(wall37)||bulletLGroup.isTouching(wall38)||bulletLGroup.isTouching(wall39)||bulletLGroup.isTouching(wall40)){
    bulletLGroup.destroyEach();
  }
  if(bulletRGroup.isTouching(wall1)||bulletRGroup.isTouching(wall2)||bulletRGroup.isTouching(wall3)||bulletRGroup.isTouching(wall4)
  ||bulletRGroup.isTouching(wall4)||bulletRGroup.isTouching(wall6)||bulletRGroup.isTouching(wall7)||bulletRGroup.isTouching(wall8)
  ||bulletRGroup.isTouching(wall9)||bulletRGroup.isTouching(wall10)||bulletRGroup.isTouching(wall11)||bulletRGroup.isTouching(wall12)
  ||bulletRGroup.isTouching(wall13)||bulletRGroup.isTouching(wall14)||bulletRGroup.isTouching(wall15)||bulletRGroup.isTouching(wall16)
  ||bulletRGroup.isTouching(wall17)||bulletRGroup.isTouching(wall18)||bulletRGroup.isTouching(wall19)||bulletRGroup.isTouching(wall20)
  ||bulletRGroup.isTouching(wall21)||bulletRGroup.isTouching(wall22)||bulletRGroup.isTouching(wall23)||bulletRGroup.isTouching(wall24)
  ||bulletRGroup.isTouching(wall25)||bulletRGroup.isTouching(wall26)||bulletRGroup.isTouching(wall27)||bulletRGroup.isTouching(wall28)
  ||bulletRGroup.isTouching(wall29)||bulletRGroup.isTouching(wall30)||bulletRGroup.isTouching(wall31)||bulletRGroup.isTouching(wall32)
  ||bulletRGroup.isTouching(wall33)||bulletRGroup.isTouching(wall34)||bulletRGroup.isTouching(wall35)||bulletRGroup.isTouching(wall36)
  ||bulletRGroup.isTouching(wall37)||bulletRGroup.isTouching(wall38)||bulletRGroup.isTouching(wall39)||bulletRGroup.isTouching(wall40)){
    bulletRGroup.destroyEach();
  }

  if(bulletDGroup.isTouching(wall1)||bulletDGroup.isTouching(wall2)||bulletDGroup.isTouching(wall3)||bulletDGroup.isTouching(wall4)
  ||bulletDGroup.isTouching(wall4)||bulletDGroup.isTouching(wall6)||bulletDGroup.isTouching(wall7)||bulletDGroup.isTouching(wall8)
  ||bulletDGroup.isTouching(wall9)||bulletDGroup.isTouching(wall10)||bulletDGroup.isTouching(wall11)||bulletDGroup.isTouching(wall12)
  ||bulletDGroup.isTouching(wall13)||bulletDGroup.isTouching(wall14)||bulletDGroup.isTouching(wall15)||bulletDGroup.isTouching(wall16)
  ||bulletDGroup.isTouching(wall17)||bulletDGroup.isTouching(wall18)||bulletDGroup.isTouching(wall19)||bulletDGroup.isTouching(wall20)
  ||bulletDGroup.isTouching(wall21)||bulletDGroup.isTouching(wall22)||bulletDGroup.isTouching(wall23)||bulletDGroup.isTouching(wall24)
  ||bulletDGroup.isTouching(wall25)||bulletDGroup.isTouching(wall26)||bulletDGroup.isTouching(wall27)||bulletDGroup.isTouching(wall28)
  ||bulletDGroup.isTouching(wall29)||bulletDGroup.isTouching(wall30)||bulletDGroup.isTouching(wall31)||bulletDGroup.isTouching(wall32)
  ||bulletDGroup.isTouching(wall33)||bulletDGroup.isTouching(wall34)||bulletDGroup.isTouching(wall35)||bulletDGroup.isTouching(wall36)
  ||bulletDGroup.isTouching(wall37)||bulletDGroup.isTouching(wall38)||bulletDGroup.isTouching(wall39)||bulletDGroup.isTouching(wall40)){
    bulletDGroup.destroyEach();
  }

  if(bulletUGroup.isTouching(wall1)||bulletUGroup.isTouching(wall2)||bulletUGroup.isTouching(wall3)||bulletUGroup.isTouching(wall4)
  ||bulletUGroup.isTouching(wall4)||bulletUGroup.isTouching(wall6)||bulletUGroup.isTouching(wall7)||bulletUGroup.isTouching(wall8)
  ||bulletUGroup.isTouching(wall9)||bulletUGroup.isTouching(wall10)||bulletUGroup.isTouching(wall11)||bulletUGroup.isTouching(wall12)
  ||bulletUGroup.isTouching(wall13)||bulletUGroup.isTouching(wall14)||bulletUGroup.isTouching(wall15)||bulletUGroup.isTouching(wall16)
  ||bulletUGroup.isTouching(wall17)||bulletUGroup.isTouching(wall18)||bulletUGroup.isTouching(wall19)||bulletUGroup.isTouching(wall20)
  ||bulletUGroup.isTouching(wall21)||bulletUGroup.isTouching(wall22)||bulletUGroup.isTouching(wall23)||bulletUGroup.isTouching(wall24)
  ||bulletUGroup.isTouching(wall25)||bulletUGroup.isTouching(wall26)||bulletUGroup.isTouching(wall27)||bulletUGroup.isTouching(wall28)
  ||bulletUGroup.isTouching(wall29)||bulletUGroup.isTouching(wall30)||bulletUGroup.isTouching(wall31)||bulletUGroup.isTouching(wall32)
  ||bulletUGroup.isTouching(wall33)||bulletUGroup.isTouching(wall34)||bulletUGroup.isTouching(wall35)||bulletUGroup.isTouching(wall36)
  ||bulletUGroup.isTouching(wall37)||bulletUGroup.isTouching(wall38)||bulletUGroup.isTouching(wall39)||bulletUGroup.isTouching(wall40)){
    bulletUGroup.destroyEach();
  }

  //evil bounces(off)
  evil1.bounceOff(wall17);
  evil1.bounceOff(wall22);

  evil2.bounceOff(wall12);
  evil2.bounceOff(wall1);

  evil3.bounceOff(wall40);
  evil3.bounceOff(wall27);

  evil4.bounceOff(wall23);
  evil4.bounceOff(wall26);

  // hero bouceoff
  hero.bounceOff(wall1);
  hero.bounceOff(wall2);
  hero.bounceOff(wall3);
  hero.bounceOff(wall4);
  hero.bounceOff(wall5);
  hero.bounceOff(wall6);
  hero.bounceOff(wall7);
  hero.bounceOff(wall8);
  hero.bounceOff(wall9);
  hero.bounceOff(wall10);
  hero.bounceOff(wall11);
  hero.bounceOff(wall12);
  hero.bounceOff(wall13);
  hero.bounceOff(wall14);
  hero.bounceOff(wall15);
  hero.bounceOff(wall16);
  hero.bounceOff(wall17);
  hero.bounceOff(wall18);
  hero.bounceOff(wall19);
  hero.bounceOff(wall20);
  hero.bounceOff(wall21);
  hero.bounceOff(wall22);
  hero.bounceOff(wall23);
  hero.bounceOff(wall24);
  hero.bounceOff(wall25);
  hero.bounceOff(wall26);
  hero.bounceOff(wall27);
  hero.bounceOff(wall28);
  hero.bounceOff(wall29);
  hero.bounceOff(wall30);
  hero.bounceOff(wall31);
  hero.bounceOff(wall32);
  hero.bounceOff(wall33);
  hero.bounceOff(wall34);
  hero.bounceOff(wall35);
  hero.bounceOff(wall36);
  hero.bounceOff(wall37);
  hero.bounceOff(wall38);
  hero.bounceOff(wall39);
  hero.bounceOff(wall40);


  

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
  bulletsL.addImage("bullet",bulletLImg)
  bulletsL.velocityX = -5;

  bulletLGroup.add(bulletsL);
}

function createBulletR(){
  bulletsR = createSprite(hero.x,hero.y,5,5);
  bulletsR.addImage("bullet",bulletImg);
  bulletsR.velocityX = 5;

  bulletRGroup.add(bulletsR);
}

function createBulletU(){
  bulletsU= createSprite(hero.x,hero.y,5,5);
  bulletsU.addImage("bullet",bulletUImg);
  bulletsU.scale = 0.02
  bulletsU.velocityY = -5;

  bulletUGroup.add(bulletsU);
}

function createBulletD(){
  bulletsD = createSprite(hero.x,hero.y,5,5);
  bulletsD.addImage("bullet",bulletDImg)
  bulletsD.velocityY = 5;
  bulletDGroup.add(bulletsD)
}