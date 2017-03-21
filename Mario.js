<<<<<<< HEAD
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
=======
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
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
				}
			}
		}
		return false;
	}
<<<<<<< HEAD
	
	touch_head() {		
		for(var i = first ; i < last ; i++) {
			if (touch_up(list_obj[i].x-trai,list_obj[i].y,this.x,this.y)) {
				this.vy = 0;
				this.y = list_obj[i].y - 50;
=======
	touch_head() {
		for(var i = first ; i < last ; i++) {
			if (touch_up(list_obj[i].x-trai-0.1,list_obj[i].y-0.1,this.x,this.y)) {
				this.vy = 0;
				this.y = list_obj[i].y - 100;
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
				return true;
			}
		}
		return false;
	}
<<<<<<< HEAD
	
	quantinh() {
		if (this.vx >0) {
			this.vx--;	
=======
	roi() {
		this.vy -= 0.5;
		this.y += this.vy;
	}
	quantinh() {
		if (this.vx >0) {
			this.vx--;
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
		} 
		else if (this.vx <0) {
			this.vx++;
		}
<<<<<<< HEAD
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
=======
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
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
