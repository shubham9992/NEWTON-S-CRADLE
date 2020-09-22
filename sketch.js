
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rad=15;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(350,100,140,20);

	bob1=new Bob(290,300,rad);
	bob2=new Bob(320,300,rad);
	bob3=new Bob(350,300,rad);
	bob4=new Bob(380,300,rad);
	bob5=new Bob(410,300,rad);

	rop1=new Rope(bob1.body,roof.body,-61,0);
	rop2=new Rope(bob2.body,roof.body,-31,0);
	rop3=new Rope(bob3.body,roof.body,1,0);
	rop4=new Rope(bob4.body,roof.body,31,0);
	rop5=new Rope(bob5.body,roof.body,61,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(rgb(230,230,230));

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  //console.log("b4 rope");
	rop1.display();
	rop2.display();
	rop3.display();
	rop4.display();
	rop5.display();

//console.log("after rope");
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:50});
	}
	if(keyCode===DOWN_ARROW){
		Body.applyForce(bob2.body,bob2.body.position,{x:-20,y:50});
	}
	if(keyCode===LEFT_ARROW){
		Body.applyForce(bob3.body,bob3.body.position,{x:-20,y:50});
	}
	if(keyCode===RIGHT_ARROW){
		Body.applyForce(bob4.body,bob4.body.position,{x:25,y:50});
	}
	if(keyCode===32){
		Body.applyForce(bob5.body,bob5.body.position,{x:25,y:50});
	}
}


