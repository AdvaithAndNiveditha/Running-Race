var runner, runnerImage, edges;
var path, invisibleGround, invisibleGround2, pathImg;

function preload(){
  //pre-load images
runnerImage = loadAnimation("Runner-1.png", "Runner-2.png");
pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 //create sprites here
  path=createSprite(200,200);
  path.addImage("path", pathImg);
  path.velocityY = 4;
  path.scale = 1.2
  
  runner = createSprite(200,250,5,10);
  runner.addAnimation("running", runnerImage);
  runner.scale = 0.10

  invisibleGround = createSprite(200,30,300,20)
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(200,380,300,20)
  invisibleGround2.visible = false;
}
  
function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2
  }
  runner.collide(invisibleGround);
  runner.collide(invisibleGround2);
 drawSprites();
}

