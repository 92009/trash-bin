
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var ground2;
var ground3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options=
{
	isSatict:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball = Bodies.circle(100,10,10,ball_options);
World.add(world,ball);
fill("red")


ground =new Ground(200,390,2000,10);
ground2 =new Ground(500,350,10,90);
ground3 =new Ground(700,350,10,90);

	Engine.run(engine);
    ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("blue");
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  ground2.show();
  ground3.show();
  drawSprites();


}

function keyPressed()
{
	keyCode=== UP_ARROW
	vForce();
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:10.5})
}



