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
	return 800-x;
} 
function inside(x1,y1,x,y) {
	return (x>=x1 && x<=x1+100 && y>=y1 && y<=y1+100);
}
function touch_up(x1,y1,x,y) {
	return inside(x1,y1,x,y+100) || inside(x1,y1,x+100,y+100);
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
	new_ob.style.width = '100px';
	new_ob.style.height = '100px';
	new_ob.style.left = list_obj[i].x + "px";
	new_ob.style.bottom  = list_obj[i].y + "px";
	if (list_obj[i] instanceof gach) {
		// alert(i);
		new_ob.src = "brick.png";
	} 
	// else (list_obj[i] instanceof grump) new_ob.src = "grump.png";
	document.getElementById('game').appendChild(new_ob);	 
}
function process() {
	var map = ans.split("\n");      
	var n = map.length;
	var m = map[0].length;
	m--;
	var cnt = 0;		
	// alert(n + " " + m);
	for(var j=0; j < m; j++) {
		for(var i = 0; i < n; i++)  {
			if (map[i][j]!='_') {
				var new_ob;
				var x = j * 100;
				var y = convert(i * 100);
				
				switch (map[i][j]) {
					case 'X': {
						MARIO = new Mario(x,y,1,0,0,0,cnt);
						break;
					}
					case '0': {
						new_ob = new gach(x,y,0,cnt);						
						break;
					}
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
		new_ob.style.width = '100px';
		new_ob.style.height = '100px';
		new_ob.style.left = MARIO.x + "px";
		new_ob.style.bottom  = MARIO.y + "px";
		new_ob.src = "mario.png";
		document.getElementById('game').appendChild(new_ob);	
}
	
function dead() {
	return false;
}
function Move_on_keyboard() {
	if (mark[0]) MARIO.move_left();
	if (mark[1] && MARIO.stand()) MARIO.move_up();
	if (mark[2]) MARIO.move_right();		
}
function move_all() {
	Move_on_keyboard();
	// if(MARIO.touch_head()) alert("asdf");
	if (MARIO.touch_head() || !MARIO.stand()) {
		MARIO.roi();
	} 
	MARIO.quantinh();
	// for(var i = first; i < last ; i++) {
	// 	if (list_obj[i] instanceof Dynamic) list_obj[i].move();
	// }
	// while (list_obj.length >0 && list_obj[0].x <= -100) {
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
	trai += 10;
	// for(var i = first; i < last ; i++) {
	// 	list_obj[i].show(trai);
	// }
	for(var i = first; i < last ;i++) {
		list_obj[i].show(trai);
	}
	while (list_obj.length >0 && list_obj[0].x - trai <= -100) {
		list_obj.splice(0,1);
		last--;
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
		if (MARIO.x > 500) {
			MARIO.x = 500;
			move_left_all();
		} 
		await sleep(10);
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
}