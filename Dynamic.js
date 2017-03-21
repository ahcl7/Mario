class Dynamic extends parent {
	constructor(x,y,dirx,diry,vx,vy,id) {
		super(x,y,id);
		this.dirx = dirx;
		this.diry = diry;
		this.vx = vx;
		this.vy = vy;
	}	
<<<<<<< HEAD
	roi() {
		this.vy -= 0.8;
		this.y += this.vy;
		
	}
	// move() {
	// 	// this.x += this.dirx * this.vx;
	// 	// this.y += this.diry * this.vy;
	// 	// this.vx--;
	// 	// if (this.vy > 0 ) this.vy-			=5;
	// }
	
	fall() {
		if (this.dirx == -1) {
			for(var i=first; i < last ; i++) {
				if (list_obj[i] != this && this.y - list_obj[i].y == 50 &&  inside(list_obj[i].x-trai,list_obj[i].y,this.x-trai-this.vx,this.y-0.01)) {
					// x-trai-thiss.x = list_obj[i].x + 50;
					// this.dirx = -1 * this.dirx;		
					return false;
				}				
			}
		} else {
			for(var i=first; i < last ; i++) {
				if (list_obj[i] != this && this.y - list_obj[i].y == 50 && inside(list_obj[i].x-trai+this.vx,list_obj[i].y,this.x-trai+49.9999+this.vx,this.y-0.01)) {
					// this.x = list_obj[i].x - 50;
					// this.dirx = -1 * this.dirx;
					return false;
				}			
			}
		}
		this.dirx = -1 * this.dirx;
		return true;	
	}
}
=======
	move() {
		// this.x += this.dirx * this.vx;
		// this.y += this.diry * this.vy;
		// this.vx--;
		// if (this.vy > 0 ) this.vy-=5;
	}
}
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
