class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.canon_arriba= loadImage("./imagenes/canon.png");
        this.canon_abajo = loadImage("./imagenes/cannonBase.png")
    }

    display(){
        //movimiento de cañon arriba y abajo
        if(keyIsDown(UP_ARROW) && this.angle>-30){
            this.angle=1;
        }
        if(keyIsDown(DOWN_ARROW) && this.angle<70){
            this.angle+=1;
        }
    
        //Parte superior del cañon
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canon_arriba,0,0,this.width,this.height);
        pop();

        //Parte inferior
        image(this.canon_abajo,70,20,200,200);
        noFill();
        
    }
    
}