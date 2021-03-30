const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree,treeImg;
var stone;
var mng,mng1,mng2,mng3,mng4,mng5,mng6,mng7,mng8,mng9,mng10;
var chain1;

function preload()
{
  backgroundImg = loadImage("images/background.jpg")
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,395,800,10);
	boy = new Boy(200,350,130,170);
	stone = new Stone(160,305,15);
	mng1 = new Coconut(610,160,40); 
 	mng2 = new Coconut(560,200,40); 
	mng3 = new Coconut(690,220,40); 
	mng4 = new Coconut(680,210,40); 
	mng5 = new Coconut(600,130,40); 
	mng6 = new Coconut(680,80,40); 
	mng7 = new Coconut(700,100,40); 
	mng8 = new Coconut(679,110,40); 
	mng9 = new Coconut(660,100,40); 
	mng10 = new Coconut(540,187,40); 
	chain1 = new Chain(stone.body,{x:160,y:305});
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(backgroundImg);
  drawSprites();
  ground.display();
  boy.display();
  mng1.display();
  mng2.display();
  mng3.display();
  mng4.display();
  mng5.display();
  mng6.display();
  mng7.display();
  mng8.display();
  mng9.display();
  mng10.display();
  chain1.display();

  function detectCollision(stone,mng){
	mp = mng.body.position
	sp = stone.body.position 
 
	var distance=dist(sp.x,sp.y,mp.x,mp.y)
	if(distance<= stone.radius + mng.radius){
	Matter.Body.setStatic(mng.body,false);	   
	}
 
  }
  
  detectCollision(stone,mng1);
  detectCollision(stone,mng2);
  detectCollision(stone,mng3);
  detectCollision(stone,mng4);
  detectCollision(stone,mng5);
  detectCollision(stone,mng6);
  detectCollision(stone,mng7);
  detectCollision(stone,mng8);
  detectCollision(stone,mng9);
  detectCollision(stone,mng10);

  stone.display();

}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}



	function mouseReleased(){
	chain1.fly();
  }