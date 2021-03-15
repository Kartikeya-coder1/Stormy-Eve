class Drop{
    constructor(x,y){
    var options = {
        isStatic:false,
        // restitution:0.3,
        friction:0.002
        // density:1.2
    }
    this.x = x
    this.y = y
    // this.radius = 5
    this.body = Bodies.circle(this.x,this.y,5,options)
        //options)
    
    
   
   
        
    World.add(world,this.body)
    }
    
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random (0,1000),y:random (0,200)})
        }
    }
    
    display(){
        fill ("blue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,5,5)
        

    
    }}