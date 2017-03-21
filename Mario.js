class Mario extends Dynamic {		
	
	constructor(x,y,dirx,diry,vx,vy,id) {
		super(x,y,dirx,diry,vx,vy,id);
	}
	// dead() {
	// 	for(var i=first;i<last;i++) {
	// 		// if (Math.abs(this.y - list_obj[i].y - 50) <=14	) 
	// 		{
	// 			if (touch_up(this.x,this.y,list_obj[i].x-trai,list_obj[i].y) 
	// 				&& !(Math.abs(this.x - list_obj[i].x + trai)==50 && this.y == list_obj[i].y))
	// 			{
	// 				if (list_obj[i] instanceof Static) {
	// 					this.y = list_obj[i].y + 50;
	// 					return true;
	// 				}
	// 				else if (list_obj[i] instanceof grump) {
	// 					this.move_up(10);
	// 					list_obj[i].disappear();	
	// 					list_obj.splice(i,1);
	// 					last--;
	// 					return true;
	// 				} else if (list_obj[i] instanceof Koopa) {
	// 					this.move_up(10);
	// 					list_obj[i].changeStatus();

	// 				}
	// 			}
	// 		}
	// 	}
	// 	return false;		
	// }
	show() {

		if (this.vx == 	0) {
			this.diry = 0;	
		}	
		var this_ob = document.getElementById("id" + this.id);
		if (!this.stand()) {
			if (this.dirx == 1) {
				this_ob.src = "images/mario1_jump.png";
			} else this_ob.src = "images/mario1_jump-back.png";
		} else 
		if (this.dirx == 1) this_ob.src = "images/mario1_move" + parseInt((this.diry)/9,10) + ".png";
			else 			this_ob.src = "images/mario1_move" + parseInt((this.diry)/9,10)  + "-back.png";

		this_ob.style.bottom = this.y + "px";
		this_ob.style.left = this.x + "px";
	}
	
	stand() {
		for(var i=first;i<last;i++) {
			// if (Math.abs(this.y - list_obj[i].y - 50) <=14	) 
			{
				if (touch_up(this.x,this.y,list_obj[i].x-trai,list_obj[i].y) 
					&& !(Math.abs(this.x - list_obj[i].x + trai)==50 && this.y == list_obj[i].y))
				{
					if (list_obj[i] instanceof Static) {
						this.y = list_obj[i].y + 50;
						return true;
					}
					else if (list_obj[i] instanceof grump) {
						this.move_up(10);
						list_obj[i].disappear();	
						list_obj.splice(i,1);
						last--;
						return true;
					} else if (list_obj[i] instanceof Koopa) {
						this.move_up(10);
						list_obj[i].changeStatus();

					}
				}
			}
		}
		return false;
	}
	
	touch_head() {		
		for(var i = first ; i < last ; i++) {
			if (touch_up(list_obj[i].x-trai,list_obj[i].y,this.x,this.y)) {
				this.vy = 0;
				this.y = list_obj[i].y - 50;
				return true;
			}
		}
		return false;
	}
	
	quantinh() {
		if (this.vx >0) {
			this.vx--;	
		} 
		else if (this.vx <0) {
			this.vx++;
		}
		if (this.vx !=0) {
			this.driy ++;
			this.driy %= 36;
		}
		this.x += this.vx;		
		this.show();
	}
	
	test() {
		var Stand = this.stand();
		for(var i = first; i<last ;i++) {
			if (list_obj[i] instanceof Static) {
				if (inside(list_obj[i].x-trai,list_obj[i].y,this.x,this.y)) {
					if (list_obj[i].y == this.y || !Stand)  {
						this.x = list_obj[i].x -trai + 50;
						return true;
					}
				} else 
				if (inside(list_obj[i].x-trai,list_obj[i].y,this.x+49.9999,this.y)) {
					if (list_obj[i].y == this.y || !Stand)  {
						this.x = list_obj[i].x -trai - 50;
						return true;
					}
				}
			}
		}
		return false;	
	}
	
	move() {
		this.quantinh();
		if (this.touch_head() || !this.stand()) {
			this.roi();
		} 	

	}
	
	move_left() {	
		if (this.dirx==1) {
			this.dirx = -1;
			this.diry = 1;			;
		} else this.diry++;
		this.diry %=36;
		this.vx = -2;
		this.x += this.vx;
		this.test();
		this.show();
	}
	
	move_right() {

		// alert("Asdfasdf");
		if (this.dirx == -1) {
			this.dirx = 1;
			this.diry = 1;			
		} else this.diry++;
		this.diry %= 36;
		this.vx = 2;
		this.x += this.vx;
		this.x = Math.min(this.x, 801);
		this.test();
		this.show();
	}
	
	move_up(t) {
		this.vy = t;
		this.y += 35;
		this.y+=this.vy;
		this.show();
	}
}	