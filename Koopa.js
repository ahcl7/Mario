class Koopa extends Dynamic {
	constructor(st,x,y,dirx,diry,vx,vy,id) {
		super(x,y,dirx,diry,vx,vy,id);
		this.st  =st;
	}
	show() {
		var this_ob = document.getElementById("id" + this.id);
		if (this.dirx == 1) 
			if (this.st == 0) this_ob.src = "images/koopa_ded.png";
			else 			this_ob.src = "images/koopa_0-forward.png";
		else if (this.st ==0) this_ob.src = "images/koopa_ded.png";
			else this_ob.src = "images/koopa_0.png";

		this_ob.style.bottom = this.y + "px";
		this_ob.style.left = (this.x - trai) + "px";
	
	}
	changeStatus() {
		if (this.st == -1) {
			this.st = 0;
			this.vx = 0;
		} else 
			if (this.st == 0) {
				this.st = 1;
				this.vx = 20;
			} else {
				this.st = 0;
				this.vx = 0;
			}
	}
	move() {
		this.x += this.dirx * this.vx;
		this.show(trai);
	}
}
