var man1,umber1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

}

function setup(){
    createCanvas(1000,500);
	engine = Engine.create();
	world = engine.world;
   man1= new Man(500,358,90,280);
   umber1= new Umber(500,200,280,90);
   
   World.add(world,man1);
    
}

function draw(){
    background("black");
    man1.display();
    umber1.display();
   
    drawSprites();
}   

