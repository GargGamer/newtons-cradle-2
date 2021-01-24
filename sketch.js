const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint

var bob1,bob2,bob3,bob4,bob5
var rope1, rope2,rope3, rope4, rope5
var bobDiamter
var startBobPosX, startBobPosY

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);
	
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint)

	
	bob1 = new bob(340,450,"blue")
	bob2 = new bob(400,450,"red")
	bob3 = new bob(460,450,"green")
	bob4 = new bob(520,450,"yellow")
	bob5 = new bob(580,450,"lime")

	rope1 = new Rope(bob1.body,{x:340,y:200})
	rope2 = new Rope(bob2.body,{x:400,y:200})
	rope3 = new Rope(bob3.body,{x:460,y:200})
	rope4 = new Rope(bob4.body,{x:520,y:200})
	rope5 = new Rope(bob5.body,{x:580,y:200})


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine)

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x:mouseX,y:mouseY})
}