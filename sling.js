class Sling{
    constructor(body,anchor){
     var options={bodyA:body,pointB:anchor,stiffness:0.004,length:3}
     this.bodyA = body;
     this.pointB = anchor;
     this.Sling = Constraint.create(options);
     World.add(world,this.Sling);
    }
    
    display(){
        if(this.Sling.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        } 
    }
    
    fly(){
    this.Sling.bodyA = null;
   }
    
    attach(body){
    this.Sling.bodyA = body;
    }
    
}