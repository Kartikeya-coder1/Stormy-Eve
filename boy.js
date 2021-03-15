class Boy{
    constructor(x,y){
    var options = {
        isStatic:true,
        // restitution:0.8,
        //  friction:0.5,
        //density:1.2
    }
    this.x = x
    this.y = y
    this.radius = 50
    this.body = Bodies.circle(this.x,this.y,50,options)
    
   
    // this.width = width
    // this.height = height
    this.image = loadImage("walking_1.png")
        
    World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x,pos.y,200 ,200);
      
    }
    }