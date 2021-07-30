class ComputerArcher{
    constructor(x,y,width,height,angle){
      var options = {
        isStatic: true
      };

    
    this.body=Bodies.rectangle(x,y,width,height,options);
     
    this.width = width;
    this.height = height;
      this.image=loadImage("./assets/computerArcher.png")
     

    World.add(world,this.body);
    Matter.Body.setAngle(this.body,PI/2);
}
        display() {
          var angle=this.body.angle;
          var pos=this.body.position;

           // if(move ==="UP" && computerArcher.body.angle < 1.77){
            //    angleValue=0.1
            //}else{
             //   angleValue=-0.1
            //}
            //if(move ==="DOWN" && computerArcher.body.angle < 1.47){
               // angleValue=-0.1
            //}else{
             //   angleValue=0.1
            //}
            
       if(keyIsDown(LEFT_ARROW) && angle<1.47){
        angle-=0.01;
        Matter.Body.setAngle(this.body,angle)
      }
      if(keyIsDown(RIGHT_ARROW) && angle>1.77){
       angle+=0.01;
       Matter.Body.setAngle(this.body,angle)
     }

       
          
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height)
          pop();
        }
        }
      
