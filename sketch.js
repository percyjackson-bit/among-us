var fixedRect, movingRect, amongus, white;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 100, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  amongus = createSprite(100,400,50,50);
  amongus.shapeColor = "blue";
  amongus.debug = true;
  white = createSprite(100,300,50,50);
  white.shapeColor = "purple";
  white.debug = true;
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(touchZombies(movingRect,white)){
    movingRect.shapeColor = "red";
    white.shapeColor = "white";
  }
  else{
    movingRect.shapeColor = "purple";
    white.shapeColor = "lime";
  }
  drawSprites();
}

function touchZombies(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width / 2 + ob1.width / 2 &&
    ob2.x - ob2.x < ob2.width / 2 + ob1.width / 2 &&
    ob1.y - ob2.y < ob2.height / 2 + ob1.height / 2 &&
    ob2.y - ob1.y < ob2.height / 2 + ob1.height / 2) {
    return true;  
  } 
  else {
    return false;
  }
 

}