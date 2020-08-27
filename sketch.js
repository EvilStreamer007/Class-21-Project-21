
var wall1,wall2,wall3,wall4
var bullet1,bullet2,bullet3,bullet4;
var speed1,speed2,speed3,speed4
var weight1,weight2,weight3,weigth4;
var divider1,divider3,divider3;
var thickness1,thickness2,thickness3,thickness4;

function setup() {
  createCanvas(1600,420);

  speed1 = random(55,90);
  weight1 = random(400,1500);
  thickness1 = random(-22,-83);
  bullet1 = createSprite(1400, 40, 30, 10);
  divider1 = createSprite(1400,120,3000,5)
  divider1.shapeColor = ("cyan");
  bullet1.velocityX = -speed1;
  wall1 = createSprite(100,60,thickness1,90);
  wall1.shapeColor = rgb(80,80,80);
  bullet1.shapeColor = rgb(255,255,255);

  speed2 = random(55,90);
  weight2 = random(400,1500);
  thickness2 = random(-22,-83);
  bullet2 = createSprite(1400, 150, 30, 10);
  divider2 = createSprite(1400,220,3000,5)
  divider2.shapeColor = ("cyan");
  bullet2.velocityX = -speed2;
  wall2 = createSprite(100,170,thickness2,90);
  wall2.shapeColor = rgb(80,80,80);
  bullet2.shapeColor = rgb(255,255,255);

  speed3 = random(55,90);
  weight3 = random(400,1500);
  thickness3 = random(-22,-83);
  bullet3 = createSprite(1400, 250, 30, 10);
  divider1 = createSprite(1400,320,3000,5)
  divider1.shapeColor = ("cyan");
  bullet3.velocityX = -speed3;
  wall3 = createSprite(100,270,thickness3,90);
  wall3.shapeColor = rgb(80,80,80);
  bullet3.shapeColor = rgb(255,255,255);

  speed4 = random(55,90);
  weight4 = random(400,1500);
  thickness4 = random(-22,-83);
  bullet4 = createSprite(1400, 350, 30, 10);;
  bullet4.velocityX = -speed4;
  wall4 = createSprite(100,370,thickness4,90);
  wall4.shapeColor = rgb(80,80,80);
  bullet4.shapeColor = rgb(255,255,255);
}

function draw() {
  background(0);  

  if(hasCollided(bullet1,wall1)){
      bullet1.velocityX = 0;
      var damage1 = (0.5 * weight1 * speed1 * speed1) / (thickness1 * thickness1 * thickness1);

      if(damage1 < 10){
         bullet1.shapeColor = rgb(0,128,0)
      }

      if(damage1 > 10){
         bullet1.shapeColor = rgb(255,0,0)
      }
  }
  if(hasCollided(bullet2,wall2)){
     bullet2.velocityX = 0;
     var damage2 = (0.5 * weight2 * speed2 * speed2) / (thickness2 * thickness2 * thickness2);

   if(damage2 < 10){
      bullet2.shapeColor = rgb(0,128,0)
   }

   if(damage2 > 10){
      bullet2.shapeColor = rgb(255,0,0)
   }
}

if(hasCollided(bullet3,wall3)){
   bullet3.velocityX = 0;
   var damage3 = (0.5 * weight3 * speed3 * speed3) / (thickness3 * thickness3* thickness3);

   if(damage3 < 10){
      bullet3.shapeColor = rgb(0,128,0)
   }

   if(damage3 > 10){
      bullet3.shapeColor = rgb(255,0,0)
   }
}

if(hasCollided(bullet4,wall4)){
   bullet4.velocityX = 0;
   var damage4 = (0.5 * weight4 * speed4 * speed4) / (thickness4 * thickness4* thickness4);

   if(damage4 < 10){
      bullet4.shapeColor = rgb(0,128,0)
   }

   if(damage4 > 10){
      bullet4.shapeColor = rgb(255,0,0)
   }
}
  drawSprites();
}

function hasCollided(lbullet,lwall){
    bullet1LeftEdge = lbullet.x + lbullet.width;
     wallRightEdge=lwall.x;
     
     if(bullet1LeftEdge <= wallRightEdge){
        return true
     }

     return false;
}