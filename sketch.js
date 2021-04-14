const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block8,
  block9,
  block10,
  block11,
  block12,
  block13,
  block14,
  block15,
  block16;
var ball, ground;
var rope1;
var score=0
//var a;
//var circles = [];
function setup() {
  createCanvas(1000, 600);
  stroke(255);
  engine = Engine.create();
  world = engine.world;

  //creating boxes

  //ground level
  ground = new Ground(600, height, 1200, 20);
  stand = Bodies.rectangle(390, 300, 250, 10, { isStatic: true });
  World.add(world, stand);

  //level one

  block8 = new Block(300, 275, 30, 40);
  block9 = new Block(330, 275, 30, 40);
  block10 = new Block(360, 275, 30, 40);
  block11 = new Block(390, 275, 30, 40);
  block12 = new Block(420, 275, 30, 40);
  block13 = new Block(450, 275, 30, 40);
  block14 = new Block(480, 275, 30, 40);

  //level 2
  block15 = new Block(330, 235, 30, 40);
  block16 = new Block(360, 235, 30, 40);
  block17 = new Block(390, 235, 30, 40);
  block18 = new Block(420, 235, 30, 40);
  block19 = new Block(450, 235, 30, 40);

  //level 3
  block20 = new Block(360, 195, 30, 40);
  block21 = new Block(390, 195, 30, 40);
  block22 = new Block(420, 195, 30, 40);

  //top level
  block23 = new Block(390, 155, 30, 40);
  //top

  ball = new Ball(100, 100, 30);
  rope1 = new Rope(ball.body, { x: 50, y: 50 });
}

function draw() {
  background(0);
  Engine.update(engine);

  block8.display();
  block8.score();

  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();

  block13.display();
  block13.score();
  
  block14.display();
  block14.score();

  block15.display();
  block15.score();

  block16.display();
  block16.score();

  block17.display();
  block17.score();

  block18.display();
  block18.score();

  block19.display();
  block19.score();

  block20.display();
  block20.score();

  block21.display();
  block21.score();

  block22.display();
  block22.score();

  block23.display();
  block23.score();

  rope1.display();
  

  ball.display();
  text("Score:- "+score,900,30)
  rectMode(CENTER);
  rect(this.stand.position.x, this.stand.position.y, 250, 10);

  //drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  rope1.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    rope1.attach(ball.body);
  }
}
