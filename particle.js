class Particle{
constructor(x,y){

var options ={
restitution:0.6,
friction:0.3,

density:1

}

this.radius = 10;
this.color = color(random(0,255),random(0,255),random(0,255))
this.body = Bodies.circle(x,y,7,options)
World.add(world,this.body)


}

display(){
var angle = this.body.angle;
var pos= this.body.position;
push();
noStroke()
fill(this.color)
ellipseMode(RADIUS)
translate(pos.x,pos.y)
rotate(angle)
ellipse(0,0,14,14)
pop();
}









}