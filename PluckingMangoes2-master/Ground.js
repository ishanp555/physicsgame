class Ground {
    constructor(x, y, width, height) {
    var options = {
    isStatic:true,    
    restitution:0,
    friction:1,
    density:1.2
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    rectMode(CENTER);
    fill("brown");
    rect(this.x, this.y, this.width, this.height);
    }
    }; 