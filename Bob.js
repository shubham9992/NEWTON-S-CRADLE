class Bob{
    constructor(x,y,radius){
        var options={
            restitution:1.2,
            friction:0.5,
            density:1.2,
            //isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;

        World.add(world,this.body);
    } 
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
       // fill(rgb(231,84,128));
       fill("magenta");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};