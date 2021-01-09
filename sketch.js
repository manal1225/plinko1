

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var division = []
var plinko =[]
var particle = []


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  


  //Create the Bodies Here.
  //division
  for(var d=40;d<800;d+= 80){ 
division.push(new Division(d,550,10,300)) 
  }

//plinko 1st row
for(var p=35;p<800;p+= 50){ 
  plinko.push(new Plinko(p,50)) 
    }
    //plinko 2nd row
    for(var p=65;p<800;p+= 50){ 
      plinko.push(new Plinko(p,150)) 
        }
//plinko 3rd row
        for(var p=35;p<800;p+= 50){ 
          plinko.push(new Plinko(p,250)) 
            } 
//plinko 4th row
            for(var p=65;p<800;p+= 50){ 
              plinko.push(new Plinko(p,350)) 
                }


ground = new Ground();


}


function draw(){

  background(random(100,255),random(100,255),random(100,255))
  
Engine.update(engine)


if(frameCount%60=== 0){
  particle.push(new Particle(random(10,800),10))
  
  }
  

//displaying the plinko

for(var p=0;p<plinko.length;p++){
  plinko[p].display()
  }


 //displaying the particle
 for(var par=0; par<particle.length; par++){
  particle[par].display();
  }

//displaying the divsions
for(var d=0;d<division.length;d++){
  division[d].display();
  }
 
 
ground.display()


 // drawSprites();
}
