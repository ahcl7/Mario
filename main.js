function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
var ans = "nothing!";
var MARIO;
var first,last;
var trai = 0;
var list_obj = new Array(0);
var mark = new Array(3);
for(var i in mark) mark[i] = false;
function convert(x) {
<<<<<<< HEAD
	return 850-x;
} 
function inside(x1,y1,x,y) {
	// alert("asdf");				
	return (x>=x1 && x<x1+50 && y>=y1 && y<y1+50);
}
function touch_up(x1,y1,x,y) {
	return (inside(x1,y1,x,y+50) && (Math.abs(x1+50-x) >=10)) 
	|| (inside(x1,y1,x+50,y+50) && (Math.abs(x+50-x1) >=10))	;
}		
function touch(A,B) {		
	return inside(B.x,B.y,A.x,A.y) || inside(B.x,B.y,A.x+49.999999,A.y) 
		|| inside(B.x,B.y,A.x,A.y+49.999999) || inside(B.x,B.y,A.x+49.999999,A.y+49.999999);  
=======
	return 800-x;
} 
function inside(x1,y1,x,y) {
	return (x>=x1 && x<=x1+100 && y>=y1 && y<=y1+100);
}
function touch_up(x1,y1,x,y) {
	return inside(x1,y1,x,y+100) || inside(x1,y1,x+100,y+100);
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
}
// function touch_down(A,B) {
// 	return touch_up(B,A);
// }
// function touch_left(A,B) {

// }
// function touch_rifht(A,B) {
// 	return touch_left(B,A)
// }
function add(i) {
	new_ob = document.createElement('img');
	new_ob.id = "id" + list_obj[i].id + "";
	new_ob.style.position = 'absolute';
<<<<<<< HEAD
	new_ob.style.width = '50px';
	new_ob.style.height = '50px';
	new_ob.style.left = list_obj[i].x + "px";
	new_ob.style.bottom  = list_obj[i].y + "px";
	new_ob.style.zIndex = "10";
	if (list_obj[i] instanceof gach) {
		// alert(i);
		new_ob.src = "brick.png";
	} else if (list_obj[i] instanceof grump) {
		new_ob.src = "images/goombas_0.png";
	} else if (list_obj[i] instanceof Koopa) {
		new_ob.src = "images/koopa_0.png";
	} else if (list_obj[i] instanceof plant) {
		new_ob.src = "images/plant_0.png";
		new_ob.style.zIndex = "5";
	} else if (list_obj[i] instanceof pipe) {
		new_ob.src = "images/pipe1.png";
		new_ob.style.height = '100px';	
	}
=======
	new_ob.style.width = '100px';
	new_ob.style.height = '100px';
	new_ob.style.left = list_obj[i].x + "px";
	new_ob.style.bottom  = list_obj[i].y + "px";
	if (list_obj[i] instanceof gach) {
		// alert(i);
		new_ob.src = "brick.png";
	} 
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	// else (list_obj[i] instanceof grump) new_ob.src = "grump.png";
	document.getElementById('game').appendChild(new_ob);	 
}
function process() {
	var map = ans.split("\n");      
	var n = map.length;
	var m = map[0].length;
<<<<<<< HEAD
	m--;n--;
=======
	m--;
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	var cnt = 0;		
	// alert(n + " " + m);
	for(var j=0; j < m; j++) {
		for(var i = 0; i < n; i++)  {
			if (map[i][j]!='_') {
				var new_ob;
<<<<<<< HEAD
				var x = j * 50;
				var y = convert(i * 50);
=======
				var x = j * 100;
				var y = convert(i * 100);
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
				
				switch (map[i][j]) {
					case 'X': {
						MARIO = new Mario(x,y,1,0,0,0,cnt);
						break;
					}
					case '0': {
						new_ob = new gach(x,y,0,cnt);						
						break;
					}
<<<<<<< HEAD
					case '1': {
						new_ob = new grump(x,y,-1, 2, cnt);
						break;
						}
					case '2': {
						new_ob = new pipe(x,y-50,cnt);
						break;
					}
					case '3': {
						new_ob = new plant(x,y,1,1,cnt,0);
						break;
					}
					case '4': {
						new_ob = new Koopa(-1,x,y,-1,0,2,0,cnt);
					}

=======
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
				}
				cnt++;
				if (map[i][j]!='X') list_obj.push(new_ob);
				if (new_ob.x <= 1800) last = cnt;
			}
		}	
	}
	// alert(list_obj.length + " " + cnt);
	last--;
	first = 0;
	var new_ob;
	// alert(list_obj[0] instanceof Static);
	for(var i = first ; i < last ; i++) {
		add(i); 
	}
		new_ob = document.createElement('img');
		new_ob.id = "id" + MARIO.id + "";
		new_ob.style.position = 'absolute';
<<<<<<< HEAD
		new_ob.style.width = '50px';
		new_ob.style.height = '50px';
		new_ob.style.left = MARIO.x + "px";
		new_ob.style.bottom  = MARIO.y + "px";
		new_ob.src = "mario1_squat.png		";
=======
		new_ob.style.width = '100px';
		new_ob.style.height = '100px';
		new_ob.style.left = MARIO.x + "px";
		new_ob.style.bottom  = MARIO.y + "px";
		new_ob.src = "mario.png";
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
		document.getElementById('game').appendChild(new_ob);	
}
	
function dead() {
	return false;
}
<<<<<<< HEAD
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
	playSound("bgSound");
	if (mark[0]) MARIO.move_left();
	if (mark[1] && MARIO.stand()) {
		MARIO.move_up(14);
		playSound("jump");
	}
=======
function Move_on_keyboard() {
	if (mark[0]) MARIO.move_left();
	if (mark[1] && MARIO.stand()) MARIO.move_up();
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	if (mark[2]) MARIO.move_right();		
}
function move_all() {
	Move_on_keyboard();
	// if(MARIO.touch_head()) alert("asdf");
<<<<<<< HEAD
	MARIO.move();
	for(var j=first;j<last;j++) {
		if (list_obj[j] instanceof Dynamic) {
			list_obj[j].move();
		}
	}
		touch_proc();	
	// for(var j=first;j<last;j++) {
	// 	if (list_obj[j] instanceof Dynamic) list_obj[j].show(trai);
	// }
	// for(var i = first; i < last ; i++) {
	// 	if (list_obj[i] instanceof Dynamic) list_obj[i].move();
	// }
	// while (list_obj.length >0 && list_obj[0].x <= -50) {
=======
	if (MARIO.touch_head() || !MARIO.stand()) {
		MARIO.roi();
	} 
	MARIO.quantinh();
	// for(var i = first; i < last ; i++) {
	// 	if (list_obj[i] instanceof Dynamic) list_obj[i].move();
	// }
	// while (list_obj.length >0 && list_obj[0].x <= -100) {
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	// 	list_obj.splice(0,1);
	// 	last--;
	// }
	// while (last+1<list_obj.length && list_obj[last+1].x < 1900) {
	// 	last++;
	// }
	// for(var i = first; i < last ;i++) {
	// 	list_obj[i].show();
	// }
	// for(var i=first)
	// for(var i=0;i<list_obj)
}
function move_left_all() {
<<<<<<< HEAD
	trai += 5;
=======
	trai += 10;
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	// for(var i = first; i < last ; i++) {
	// 	list_obj[i].show(trai);
	// }
	for(var i = first; i < last ;i++) {
		list_obj[i].show(trai);
	}
<<<<<<< HEAD
	for(var i = first;i<last;i++) {
		if (list_obj[i].x - trai < -100) {
			list_obj[i].disappear();
			list_obj.splice(i,1);
			i--;	
			last--;
		}
=======
	while (list_obj.length >0 && list_obj[0].x - trai <= -100) {
		list_obj.splice(0,1);
		last--;
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
	}
	while (last<list_obj.length && list_obj[last].x - trai < 1800) {
		add(last);
		last++;
	}
	
	// for(i in list_obj) {
	// 	list_obj[i].show();
	// }
}
async function play() {
	while (!dead()) {
		move_all();
		// document.getElementById('test').innerHTML = MARIO.x + "";	
<<<<<<< HEAD
		if (MARIO.x > 800) {
			MARIO.x = 800;
			move_left_all();
		} 
		await sleep(17);
=======
		if (MARIO.x > 500) {
			MARIO.x = 500;
			move_left_all();
		} 
		await sleep(10);
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
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
			// MARIO.x--;
			// MARIO.move();
			break;
		}
		case 87: {
			mark[1] = true;
			// MARIO.x--;
			// MARIO.move();
			break;
		}
		case 68: {
			mark[2] = true;
			break;
		}
		// case 40 : {
		// 	MARIO.move_down();
		// 	break;
		// }
	}
}
document.onkeyup = function(e) {
	switch (e.keyCode) {
		case 65: {
			// MARIO.x--;
			mark[0]  = false;

			// MARIO.move_left();
			// MARIO.move();
			break;
		}
		case 87: {
			// alert("up up");	
			mark[1] = false;
			// if (MARIO.stand()) MARIO.move_up();
			// MARIO.x--;
			// MARIO.move();
			break;
		}
		case 68: {
			mark[2] = false;

			// MARIO.move_right();		
			break;
		}
		// case 40 : {
		// 	MARIO.move_down();
		// 	break;
		// }
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> 49de9737a313564a3fd08ee98ba3959a9192bdc2
