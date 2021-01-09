class Ground{




    constructor(){


        var options={
        
        isStatic : true
        }
        
        this.width = 800
        this.height = 10
        
        
        this.body = Bodies.rectangle(400,690,800,10,options)
        World.add(world,this.body)
        }
        
        
        display(){
        
        var pos = this.body.position;
        rectMode(CENTER)
       fill("brown")
        rect(pos.x, pos.y, this.width, this.height)
        
        }
        



}