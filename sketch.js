var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redBox1Sprite,redBox2Sprite,redBox3Sprite;
var packageBody,ground,redBox1,redBox2,redBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redBox1Sprite = createSprite(400,645,170,10);
	redBox1Sprite.shapeColor = color(255,0,0);

	redBox2Sprite = createSprite(315,600,10,100);
	redBox2Sprite.shapeColor = color(255,0,0);
	
	redBox3Sprite = createSprite(485,600,10,100);
	redBox3Sprite.shapeColor = color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 redBox1 = Bodies.rectangle(400, 645, 170, 10 , {isStatic:true} );
	 World.add(world, redBox1);
	 
	 redBox2 = Bodies.rectangle(315, 600, 10, 100 , {isStatic:true} );
	 World.add(world, redBox2);
	 
	 redBox3 = Bodies.rectangle(485, 600, 10, 100, {isStatic:true} );
 	World.add(world, redBox3);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false); 
    
  }
}



