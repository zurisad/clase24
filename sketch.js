const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var stone2;
var iron1;
var iron2;
var rubber1;
var rubber2;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(800,100);
    stone2 = new Stone(500,100,30,70)
    iron1 = new Iron(700,300);
    iron2 = new Iron(500,300,20,30) 
    rubber1 = new Rubber(700,150,40);
    rubber2 = new Rubber(300,400,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone1.display();
    stone2.display();
    iron1.display();
    iron2.display();
}