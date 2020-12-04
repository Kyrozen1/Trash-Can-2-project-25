
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin1, dustbin2, dustbin3;
var dust, dustImg;

function preload()
{
	dustImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	dust = createSprite(925, 550, 10, 10);
	dust.addImage(dustImg);
	dust.scale=0.85;
	
	//Create the Bodies Here.
	ground = new Ground(600, 690, 1200, 40);
	paper = new Paper(110, 560, 100);
	dustbin1 = new Dustbin(820, 560, 15, 220);
	dustbin2 = new Dustbin(1030, 560, 15, 220);
	dustbin3 = new Dustbin(925, 662, 190, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	//Give the ball foece
	Matter.Body.applyForce(paper.body, paper.position,{x:1660,y:-2540});
	   
	 }
   }