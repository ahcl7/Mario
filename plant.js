class plant extends Dynamic {
	constructor(x,y,diry,vy,id,cnt) {
		super(x,y,0,diry,0,vy,id);
		this.cnt = cnt;
	}
	move() {
		this.y += this.diry * this.vy;
		this.cnt ++;
		if (this.cnt >= 100) {
			if (this.vy !=0) {
				this.vy = 0;
				this.cnt = 0;
			} else {
				this.cnt = 0;
				this.diry *= -1;
				this.vy = 1;
			}
		}
		this.show(trai);
 	}
}