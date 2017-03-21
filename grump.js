class grump extends Dynamic {
	constructor(x,y,dir,vx,id) {
		super(x,y,dir,0,vx,0,id);
	}
	move() {
		// var ok = false;
		// alert(this.dirx * this.vx);	
		// if (!this.touch()) 
		// 	if (!this.fall()) this.x +=  this.vx * this.dirx;	
		// alert(this.x + "			 " + this.vx * this.dirx);
		this.x += this.vx * this.dirx;
		this.show(trai); 
	}
		
}