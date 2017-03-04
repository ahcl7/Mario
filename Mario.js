class Mario extends Dynamic {
	constructor(x,y,dirx,diry,vx,vy,id) {
		super(x,y,dirx,diry,vx,vy,id);
	}
	 move_left() {
		this.x-=10;
		this.show(0);

	}
	move_right() {
		this.x+=10;
		this.show(0);
	}
	move_up() {
		this.y++;
		this.show(0);
	}
	move_down() {
		this.y--;
		this.show(0	);
	}
}