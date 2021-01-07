
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint
function preload()
{
//	boyIMG=loadImage("boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree = new Tree(200,400,20,20);
ground = new Ground(width/2,650,width,10)

mango1 = new Mango(460,250)
mango2 = new Mango(480,250)
mango3 = new Mango(500,250)
mango4 = new Mango(520,250)
mango5 = new Mango(540,250)

var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
Engine.run(engine);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}



