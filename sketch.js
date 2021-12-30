var cajita;
function setup() {
  createCanvas(400,400);
  cajita = createSprite(150,60,15,15)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    cajita.position.x = cajita.position.x+5;

  }
  if (keyIsDown(LEFT_ARROW)){
    cajita.position.x = cajita.position.x-5;
  }
  if (keyIsDown(UP_ARROW)){
    cajita.position.y = cajita.position.y-5;
  }
  if (keyIsDown(DOWN_ARROW)){
    cajita.position.y = cajita.position.y+5;
  }
  drawSprites();
}