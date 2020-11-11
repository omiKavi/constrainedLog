class Chain{
    constructor(bodyA, bodyB){
      //we are giving constraint properties through options - JSON Format -> 'key': value,
        var options = {
            'bodyA': bodyA,
            'bodyB': bodyB,
            'length': 5,
            'stifness': 0.004
        }
        // this binds/joins current object(we create in sketch.js) with properties
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }

    display(){

        // posA is another name of this.chain.bodyA.position
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

        //increasing the thickness
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y );
    }
}