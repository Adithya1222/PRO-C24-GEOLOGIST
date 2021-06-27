const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circle

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ellipse(0,0,this.r,this.r)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    circle = new Rubber(1200,380,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    hammer.display();
    circle.display();
    console.log(MouseEvent.y);



    
 
}