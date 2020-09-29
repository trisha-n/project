//Create variables here
var dog1,happyDog, database, foodS, foodStock, dog
function preload(){
  //load images here
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",readStock);
  dog = createSprite(200,200,10,10);
  dog.addImage("dog",dog1);
  dog.scale = 0.3;
}


function draw() {  
  background(46, 139, 87);
 
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happy",happyDog);
    }
    textSize = 20;
    text("NOTE PRESS UP_ARROW TO FEED THE DOG",200,50);
    fill("black");
    drawSprites();
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0
  }else{
    x = x-1
  }
  database.ref('/').update({
    food : x
  })
}


