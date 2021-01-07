class Tree {
    constructor (x, y, width, height){
        var options = {
            isStatic:false,
            restitution:0
            

            
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        
    
        this.width = width
        this.height = height
        this.addImage = loadImage(sprites/tree.png);
        World.add(world, this.body)
    
        
    }
    display(){
        push();
        imageMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
       image(this.image, 0, 0, this.width, this, height)
    pop();
    }
    }
    
    