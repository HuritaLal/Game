//var dog,dogimage, happyDog;
var foodS, foodStock;
var database; 
var backGround1,bgimg1,bgimg2;

function preload()
{
 // dogimage = loadImage("dog.png");
 // happyDog = loadImage("happyDog.png");
  bgimg1 = loadImage("hb.jpg");
  bgimg2 = loadImage("hb1.jpg");
}

function setup() 
{
  database = firebase.database();
  
  createCanvas(450,450);
 
  backGround1 = createSprite(225,225,1,1);
  backGround1.scale=0.8;
  backGround1.addImage(bgimg1);
  

 // dog = createSprite(225,225,10,10);
  //dog.addImage(dogimage);
  //dog.scale=0.2;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);


}

function draw() 
{  
  background(46, 139, 87);
 if(keyWentDown(UP_ARROW))
 {
    writeStock(foodS);
  //  dog.addImage(happyDog);
   
 }
 if(keyWentDown(DOWN_ARROW)){
  backGround1.addImage(bgimg2);
 }
  
  drawSprites();
  textSize(22);
  fill("darkblue");
  //stroke(2);
  text("Press UP_ARROW & DOWN_ARROW",20,60);
  text("Birthday Wishes Count: "+foodS,90,440);
  
}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{if(x<=0)
  {
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
