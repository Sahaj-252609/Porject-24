
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(100,600,10);
ground=new Ground(400,680,800,20);

leftSide= new Dustbin(545,618,20,100)
rightSide= new Dustbin(670,620,20,100);
bottomSide= new Dustbin(610,660,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 Engine.update(engine);
 paper.display();
 ground.display();
 Dustbin.display();
}


function keyPressed() {
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.postion,{x:85,y:-85});
	}
	
	

}
