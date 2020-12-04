var snake
var apple
var rottenApple
function preload(){
}
function setup(){
snake=createSprite(200,200,15,50)
snake.shapeColor="green"
apple=createSprite(150,150,10,10)
apple.shapeColor="red"
rottenApple=createSprite(100,100,10,10)
rottenApple.shapeColor="brown"


}
function draw(){
background("white")
if(keyIsDown(UP_ARROW)){
snake.y=snake.y-1

}
if(keyIsDown(DOWN_ARROW)){
 snake.y=snake.y+1
}
if(keyIsDown(LEFT_ARROW)){
  snake.x=snake.x-1
}
if(keyIsDown(RIGHT_ARROW)){
snake.x=snake.x+1

}
drawSprites()
}