
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,object
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;

function preload(){
  
  
monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}





function setup (){
  createCanvas(400,400)
  
  ground=createSprite(200,370,600,20)
  monkey=createSprite(30,330,10,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
}


function draw(){
  background("white")

  ground.velocityX = -7

    if (ground.x < 100){
      ground.x = ground.width/2;
    }
  
  if(keyDown("up_arrow")){
     monkey.velocityY=-15
     }
  monkey.velocityY=monkey.velocityY+0.8
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  survivalTime=Math.ceil(frameCount/frameRate())
  textSize(20);
  text("survival time:"+survivalTime,100,50)
  
  
  monkey.collide(ground)
  
  drawSprites();
  spawnObject();
  spawnBanana();
}
function spawnObject() {
  if (frameCount%150===0){
  obstacle=createSprite (400,340,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4
  obstacle.lifetime=300
  obstacle.scale=0.1;
}
}
function spawnBanana(){
  if (frameCount%180===0){
  banana=createSprite (400,250,10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-3
  banana.lifetime=300
  banana.scale=0.1
  }

}

