var bullet,wall,speed,weight,deformation,thickness;
function setup() {
  createCanvas(1600,800);
  bullet = createSprite(100, 400, 100, 30);
wall = createSprite(1200,400,thickness,height/1.5);
speed = random(223,321);
weight = random(30,52);
bullet.velocityX  = speed/5;
thickness = random(22,83);
deformation = (weight*speed*speed*0.5)/(thickness*thickness*thickness);
bullet.shapeColor = "white";
wall.shapeColor=(80,80,80);

}
function collide(obj){
  if  (obj.x > 1100){
     return true;}
  }
function draw() { 
  background(0,0,0); 
 if(collide(bullet)){
   bullet.velocityX = 0;
  if(deformation > 10 ){
    wall.shapeColor = "red";
  }else{
    wall.shapeColor = "green";
  }
}

  drawSprites();

}
