const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;

function preload(){ getBackgroundImg();}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground1= new Ground(605,600,300,15);
    ground2= new Ground(900,352,250,15);

    log1 = new Box(620,570);
    log2 = new Box(655,570);
    log3 = new Box(725,570);
    log4 = new Box(480,570);
    log5 = new Box(515,570);
    log6 = new Box(550,570);
    log7 = new Box(585,570);
    log8 = new Box(690,570);

    log9 = new Box(515,523);
    log10 = new Box(550,523);
    log11 =new Box(620,523);
    log12 =new Box(655,523);
    log13 =new Box(690,523);
    log14 =new Box(585,523);
  
    log15 = new Box(550,477);
    log16 = new Box(620,477);
    log17 = new Box(655,477);
    log18 = new Box(585,477);
  
    log19 = new Box(620,447);
    log20 = new Box(585,447);
  
    log21 =new Box(600,410);

    block1=new Box(800,320)
    block2=new Box(840,320)
    block3=new Box(880,320)
    block4=new Box(920,320)
    block5=new Box(960,320)
    block6=new Box(1000,320)
   
    block7=new Box(840,280)
    block8=new Box(880,280)
    block9=new Box(920,280)
    block10=new Box(960,280)

    block11=new Box(880,250)
    block12=new Box(920,250)

    block13=new Box(900,220)

    hit1=new Bird(200,250);

    slingshot=new SlingShot(hit1.body,{x:200, y:250});

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    textSize(25)
    fill(0)
    text("Score:" +score, width-300, 50)
   
    ground.display();
    ground1.display();
    ground2.display();

    hit1.display();

    log1.display();
    log3.display();
    log2.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();

    log1.score();
    log3.score();
    log2.score();
    log4.score();
    log5.score();
    log6.score();
    log7.score();
    log8.score();

    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();

    log9.score();
    log10.score();
    log11.score();
    log12.score();
    log13.score();
    log14.score();
  
    log16.display();
    log17.display();
    log15.display();
    log18.display();

    log16.score();
    log17.score();
    log18.score();
    log15.score();
  
    log19.display();
    log20.display();

    log19.score();
    log20.score();
  
    log21.display();

    log21.score();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
   
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();

    block13.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hit1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){ 
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(hit1.body, {x: 200 , y: 250});
        slingshot.attach(hit1.body)
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = 'day.jpg';
    }
    else{
        bg = 'night.png';
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}