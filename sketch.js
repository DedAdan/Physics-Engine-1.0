const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball;
var engine,world;
var ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
var ball_options={
  restitution:1.0
}
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,350,800,50,ground_options);
  World.add(world,ground);
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
 //console.log(object);
  //console.log(object.type);
  //console.log(object.position.x);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

}