class Dynamic extends parent {
	constructor(x,y,dirx,diry,vx,vy,id) {
		super(x,y,id);
		this.dirx = dirx;
		this.diry = diry;
		this.vx = vx;
		this.vy = vy;
	}	
	move() {
		// this.x += this.dirx * this.vx;
		// this.y += this.diry * this.vy;
		// this.vx--;
		// if (this.vy > 0 ) this.vy-=5;
	}
}