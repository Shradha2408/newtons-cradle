class Chain{
    constructor(bodyA,bodyB){
        var options= {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 1.0
        }
        this.c= Matter.Constraint.create(options)
        World.add(world,this.c)
    }
    display(){
        var a= this.c.bodyA.position
        var b= this.c.bodyB.position
        line(a.x,a.y,b.x,b.y)
    }
}