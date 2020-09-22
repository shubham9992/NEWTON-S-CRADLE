class Rope{
    constructor(bodyA1,bodyB1,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA1,
            bodyB:bodyB1,
            length:100,
            stiffness:0.5,
            
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.body=Constraint.create(options);
        this.bodyA=bodyA1;
        this.bodyB=bodyB1;

        World.add(world,this.body);
    }
    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;
        
        fill("black");
        strokeWeight(2);

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;
        // line(r1.x,r1.y-15,r2.x-60,r2.y);
        line(Anchor1X,Anchor1Y-15,Anchor2X,Anchor2Y);
             
    }
};