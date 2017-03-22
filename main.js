function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
var win = false;
var ans = "nothing!";
var MARIO;
var first,last;
var trai = 0;
var list_obj = new Array(0);
var mark = new Array(3);
for(var i in mark) mark[i] = false;
function convert(x) {
	return 850-x;
} 
function inside(x1,y1,x,y) {
	return (x>=x1 && x<x1+50 && y>=y1 && y<y1+50);
}
function touch_up(x1,y1,x,y) {
	return (inside(x1,y1,x,y+50) && (Math.abs(x1+50-x) >=10)) 
	|| (inside(x1,y1,x+50,y+50) && (Math.abs(x+50-x1) >=10))	;
}		
function touch(A,B) {		
	return inside(B.x,B.y,A.x,A.y) || inside(B.x,B.y,A.x+49.999999,A.y) 
		|| inside(B.x,B.y,A.x,A.y+49.999999) || inside(B.x,B.y,A.x+49.999999,A.y+49.999999);  
}
function touch1(A,B) {		
	return inside(B.x-trai,B.y,A.x,A.y) || inside(B.x-trai,B.y,A.x+49.999999,A.y) 
		|| inside(B.x-trai,B.y,A.x,A.y+49.999999) || inside(B.x-trai,B.y,A.x+49.999999,A.y+49.999999);  
}
function add(i) {
	new_ob = document.createElement('img');
	new_ob.id = "id" + list_obj[i].id + "";
	new_ob.style.position = 'absolute';
	new_ob.style.width = '50px';
	new_ob.style.height = '50px';
	new_ob.style.left = list_obj[i].x + "px";
	new_ob.style.bottom  = list_obj[i].y + "px";
	new_ob.style.zIndex = 10;
	if (list_obj[i] instanceof gach) {
		// alert(i);
		new_ob.src = "brick.png";
	} else if (list_obj[i] instanceof grump) {
		new_ob.src = "images/goombas_0.png";
	} else if (list_obj[i] instanceof Koopa) {
		new_ob.src = "images/koopa_0.png";
	} else if (list_obj[i] instanceof plant) {
		new_ob.src = "images/plant_0.png";
		new_ob.style.zIndex = 5;
	} else if (list_obj[i] instanceof pipe) {
		if (list_obj[i].type == 1) new_ob.src = "images/pipe4.png";
		else new_ob.src = "images/pipe3.png";
	} else if (list_obj[i] instanceof Coin) {
		new_ob.src = "images/coin_use0.png";
	} else if (list_obj[i] instanceof princess) {
		new_ob.src = "images/peach.png";
	}
	document.getElementById('game').appendChild(new_ob);	 
}
function process() {
	var map = ans.split("\n");      
	var n = map.length;
	var m = map[0].length;
	m--;n--;
	var cnt = 0;		
	for(var j=0; j < m; j++) {
		for(var i = 0; i < n; i++)  {
			if (map[i][j]!='_') {
				var new_ob;
				var x = j * 50;
				var y = convert(i * 50);
				
				switch (map[i][j]) {
					case 'D': {
						var t = Math.random() *2;
						new_ob = new princess(parseInt(t, 10),x,y,cnt);
						break;
					}
					case 'C': {
						new_ob = new Coin(x,y,cnt);
						break;
					}
					case 'X': {
						MARIO = new Mario(x,y,1,0,0,0,cnt);
						break;
					}
					case '0': {
						new_ob = new gach(x,y,0,cnt);						
						break;
					}
					case '1': {
						new_ob = new grump(x,y,-1, 2, cnt);
						break;
						}
					case '2': {
						new_ob1 = new pipe(1,x,y,cnt);
						list_obj.push(new_ob1);
						cnt++;
						new_ob = new pipe(0,x,y-50,cnt);
						break;
					}
					case '3': {
						new_ob = new plant(x,y,1,1,cnt,0);
						break;
					}
					case '4': {
						new_ob = new Koopa(-1,x,y,-1,0,2,0,cnt);
					}

				}
				cnt++;
				if (map[i][j]!='X') list_obj.push(new_ob);
				if (new_ob.x <= 1800) last = cnt;
			}
		}	
	}
	last--;
	first = 0;
	var new_ob;
	for(var i = first ; i < last ; i++) {
		add(i); 
	}
		new_ob = document.createElement('img');
		new_ob.id = "id" + MARIO.id + "";
		new_ob.style.position = 'absolute';
		new_ob.style.width = '50px';
		new_ob.style.height = '50px';
		new_ob.style.left = MARIO.x + "px";
		new_ob.style.bottom  = MARIO.y + "px";
		new_ob.src = "mario1_squat.png";
		new_ob.style.zIndex = 20;
		document.getElementById('game').appendChild(new_ob);	
}
	
function dead() {
	return false;
}
function touch_proc() {		
	var mark = new Array(last);
	for(i in mark) mark[i] = false;
	for(var i = first; i < last ; i++) {
		if (!mark[i]) {
			for(var j=i+1; j<last;j++)
				if (!mark[j] && touch(list_obj[i],list_obj[j])) {
					mark[i] = 1;
					mark[j] = 1;
					if (list_obj[i] instanceof Dynamic) list_obj[i].dirx *= -1;
					if (list_obj[j] instanceof Dynamic) list_obj[j].dirx *= -1;
				}
		}	
	}				
	for(var i = first; i< last;i++) {
		if (!mark[i] && list_obj[i] instanceof grump) {
			var fall = false;
			for(var j=first;j<last;j++) {
				if (i!=j) {
					if (list_obj[i].dirx == -1) fall |= inside(list_obj[j].x,list_obj[j].y,list_obj[i].x,list_obj[i].y-0.01);
					else 	fall |= inside(list_obj[j].x,list_obj[j].y,list_obj[i].x+49.9999,list_obj[i].y-0.01);
					if (fall) break;		
				}
			}
			if (fall == false) {
				list_obj[i].dirx *= -1;
			}
		}
	}
}

function playSound(id) {
	var x = document.getElementById(id);
	x.play();
}
function Move_on_keyboard() {
	// playSound("bgSound");
	if (mark[0]) MARIO.move_left();
	if (mark[1] && MARIO.stand()) {
		MARIO.move_up(14);
		playSound("jump");
	}
	if (mark[2]) MARIO.move_right();		
}
function move_all() {
	Move_on_keyboard();
	MARIO.move();
	for(var j=first;j<last;j++) {
		if (list_obj[j] instanceof Dynamic) {
			list_obj[j].move();
		}
	}
	touch_proc();			
}
function move_left_all() {
	trai += 5;
	for(var i = first; i < last ;i++) {
		list_obj[i].show(trai);
	}
	for(var i = first;i<last;i++) {
		if (list_obj[i].x - trai < -100) {
			list_obj[i].disappear();
			list_obj.splice(i,1);
			i--;	
			last--;
		}
	}
	while (last<list_obj.length && list_obj[last].x - trai < 1800) {
		add(last);
		last++;
	}
	
}
async function play() {
	document.getElementById("bgSound").volume = 0.5;
	document.getElementById("bgSound").autoplay = true;
	document.getElementById("bgSound").play();
	document.getElementById("bgSound").loop = true;
	while (!MARIO.dead() && !win) {
		move_all();
		if (MARIO.x > 800) {
			MARIO.x = 800;
			move_left_all();
		} 
		await sleep(17);
	}
	if (win) {
		document.getElementById("win").play();
	}
	else {
		document.getElementById("bgSound").volume = 0;
		playSound("dead");
		var x = 100;
		document.getElementById("id" + MARIO.id).src = "images/mario_death.png";
		MARIO.vy = 16;
		while (x--) {
			MARIO.roi();
			MARIO.show1();
			await sleep(20);
		}
	}
}
function readBlob() {
var files = document.getElementById('files').files;

var file = files[0];
var start =  0;
var stop =  file.size-1;
var reader = new FileReader();
reader.onloadend = function(e){
   {
    ans = e.target.result;
    process();
    play();
  }
}

var blob = file.slice(start, stop + 1);
reader.readAsText(blob);
}
function pro() {
readBlob();
}
function loadmap() {
  pro();
}

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 65: {
			mark[0] = true;
			break;
		}
		case 87: {
			mark[1] = true;
			break;
		}
		case 68: {
			mark[2] = true;
			break;
		}
	}
}
document.onkeyup = function(e) {
	switch (e.keyCode) {
		case 65: {
			mark[0]  = false;
			break;
		}
		case 87: {
			mark[1] = false;
			break;
		}
		case 68: {
			mark[2] = false;

			break;
		}
	}
}
