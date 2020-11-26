var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 80, 10);

  wall=createSprite(900, 200, thickness, height);

  speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)
bullet.velocityX=speed;
}
console.log(wall.x-car.x)
function draw() {
  background("blue"); 
  
  if(hasCollided(bullet,wall)){

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapeColor=color(255,0,0) 
    }
    if(damage>10){
      wall.shapeColor=color(0,255,0)
    }
  }


  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  lbullet.velocityX=0
  return true
  
}else{
  return false
}



}

