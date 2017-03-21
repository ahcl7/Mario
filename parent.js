'use strict';
class parent {
	constructor (x,y,id) {
		this.x = x;
		this.y = y;
		this.id = id;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	show(trai) {
		var this_ob = document.getElementById("id" + this.id);
		this_ob.style.bottom = this.y + "px";
		this_ob.style.left = (this.x - trai) + "px";
	}
	disappear() {
		var ob = document.getElementById('id' + this.id);
		ob.style.visibility = "hidden";
	}	
}