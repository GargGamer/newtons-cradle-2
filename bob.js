class bob{
    constructor(x,y,color){
        var options = {
            'restitution':1,
            'friction': 0,
            'inertia':Infinity,
            'frictionAir' : 0,
            'density' : 0.8
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.x = x
        this.y = y
        this.color = color
        World.add(world, this.body)
    }
    display(){
        var bobpos = this.body.position
        var angle = this.body.angle
        push()
        translate(bobpos.x, bobpos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipse(0, 0, 50,50)
        pop()
    }
}