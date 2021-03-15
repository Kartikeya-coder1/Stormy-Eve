const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops = []
var tframe = 0;
var ground;
var maxDrops = 100
var thunder, passenger, u1;
 function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
 }

function setup(){
   createCanvas(1000,600)

   engine = Engine.create();
	world = engine.world;

    ground = createSprite(500,590,1000,10);

    u1 = new Boy(200,500);
    
    // passenger = new Boy(200,)

    if(frameCount%200 === 0) {
        for (var i = 0; i< maxDrops; i++){
            drops.push(new Drop(random(0,500),random(0,500)))
        }
     }

        
        
     

//    Engine.run(engine);
  
    
}


function draw(){
    Engine.update(engine)
    background("black");
    rand = Math.round(random(1,4))
    if(frameCount%120 === 0) {
       tframe = frameCount
        thunder = createSprite(random(10,990),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;

            
            // thunder.lifeTime = 20
        
            
        }
        thunder.scale = random(0.4,0.8)
        
}
   
    if(tframe + 20 === frameCount && thunder){
        thunder.destroy();
        // thunder.Visibility = thunder.Visibility-10
        
    }
    // console.log(tframe);
    // console.log(tframeC);

    for (var i = 0; i< maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    

    u1.display();

    if(keyDown("k") && thunder){
        console.log("THUNDER!!!")
        thunder.scale = 3
        // drops.scale = 1000
        // drops.x = mouseX
    }

// if(keyDown("left")){
//     u1.x = u1.x - 10
// }

    drawSprites();

}   

