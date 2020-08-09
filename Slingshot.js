class Slingshot{
    constructor(bodyA,PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB=  PointB;
        World.add(world, this.chain);


        
    }

    display(){

        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
    
}