class Mario extends Dynamic {
	constructor(x,y,dirx,diry,vx,vy,id) {
		super(x,y,dirx,diry,vx,vy,id);
	}
	stand() {
		// for()
		for(var i=first;i<last;i++) {
			if (list_obj[i] instanceof Static) {
				if (touch_up(this.x,this.y,list_obj[i].x-trai,list_obj[i].y)) {
					this.vy = 0;
					this.y = list_obj[i].y + 100;
					return true;
				}
			}
		}
		return false;
	}
	touch_head() {
		for(var i = first ; i < last ; i++) {
			if (touch_up(list_obj[i].x-trai-0.1,list_obj[i].y-0.1,this.x,this.y)) {
				this.vy = 0;
				this.y = list_obj[i].y - 100;
				return true;
			}
		}
		return false;
	}
	roi() {
		this.vy -= 0.5;
		this.y += this.vy;
	}
	quantinh() {
		if (this.vx >0) {
			this.vx--;
		} 
		else if (this.vx <0) {
			this.vx++;
		}
		this.x+=this.vx;
		this.show(0);
	}
	move_left() {
		this.vx = -10;
		this.x += this.vx;
		this.show(0);

	}
	move_right() {
		// alert("Asdfasdf");
		this.vx = 10;
		this.x += this.vx;
		this.x = Math.min(this.x, 501);
		this.show(0);
	}
	move_up() {
		this.vy = 20;
		this.y+=this.vy;
		this.show(0);
	}
}