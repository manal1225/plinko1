class Plinko{
    constructor(x,y){
    
    var options ={
    //restitution:0.3,
    friction:0.3,
    density:1,
    isStatic: true
    
    }
    this.body = Bodies.circle(x,y,15,options)
    this.radius = 10;
    World.add(world,this.body)
    
    
    }
    
    display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    fill("blue")
    noStroke();
    ellipseMode(RADIUS)
    // translate(pos.x,pos.y)
    // rotate(angle)
    ellipse(pos.x,pos.y,12,12)
    pop();
    }
    
    
    
    
    
    
    
    
    
    }