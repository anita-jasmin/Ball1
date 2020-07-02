var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,db,db1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 ball=new paper(50,400,20);
	db=new dustbin(700,610,10,90);
	db1=new dustbin(550,610,10,90);
	db2=new dustbin(630,640,150,10);


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 
  background("grey");
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball.display();
  db2.display();
  db.display();
  db1.display();
  rect(ground.position.x,ground.position.y,width,10);
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:45,y:-85})
	}
}



