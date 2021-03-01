
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,40);
	mango2=new mango(1020,140,30);
	mango3=new mango(1200,200,40);
	mango4=new mango(970,270,40);
	mango5=new mango(1120,190,30);
	mango6=new mango(900,200,30);
	mango7=new mango(1000,80,30);
	mango8=new mango(1160,110,30);
	mango9=new mango(1030,220,30);
	mango10=new mango(970,170,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new stone(200, 340, 40);
	chain = new Chain(stoneObj.body,{x: 240, y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  fill("black");
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!", 100, 100)
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  groundObject.display();
  chain.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);

}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    chain.fly();
}
function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}
function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
  chain.attach(stoneObj.body);
}
}
