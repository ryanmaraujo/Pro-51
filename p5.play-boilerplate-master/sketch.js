var martelo, marteloImg

function preload(){
  marteloImg = loadImage("martelo.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 martelo = createSprite(400, 300)
 martelo.addImage(marteloImg)
 martelo.scale = 0.5

  
}

function draw() {
  background("black");  
 martelo.x = World.mouseX
 martelo.y = World.mouseY

  drawSprites();
}