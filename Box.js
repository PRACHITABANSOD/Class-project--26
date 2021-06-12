class Box {

constructor (this.x,this.y,width,height) {

  var options = { restitution:0.08, isStatic:true}


this.body = Bodies.rectangle(this.x,this.y,width,height,options) ;
this.width = width ;
this.height = height ;

World.add(world , this.body);
 
}

display () {
 var pos = this.body.position ;

 rectMode(CENTER);
 fill("green");
rect( pos.x , pos.y , this.width , this.height ) ; 

}
}