class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255 // 1 bit == fully ON
  }
display(){
 // console.log(this.body.speed);
  if (this.body.speed<3){

    super.display();// display pig 
  }
  else{

 //remove pig 

   World.remove(world,this.body);
    push();//renew
    this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();//go back

  }
 //Maam i cant hear you
}
};