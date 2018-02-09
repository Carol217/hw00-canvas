//Carol Pan
//SoftDev2 pd7
//K0 - I see a red door
//2018-02-05
var c = document.getElementById("slate");
var ctxt = c.getContext("2d");
console.log(c);
console.log(ctxt);

//ctxt.fillStyle="#ff0000";
//ctxt.fillRect(500,50,200,200);
//ctxt.fillStyle="#00ff00";
//ctxt.fillRect(400,100,200,200);

/*
var BLACK = "#000000";
var WHITE = "#ffffff";
ctxt.fillStyle = BLACK;
for (y = 0; y < 600; y += 75){
    for (x = 0; x < 600; x += 75){
	ctxt.fillRect(x,y,75,75)
	if (ctxt.fillStyle == BLACK)
	    ctxt.fillStyle = WHITE;
	else
	    ctxt.fillStyle = BLACK;
    }
    if (ctxt.fillStyle == BLACK)
	ctxt.fillStyle = WHITE;
    else
	ctxt.fillStyle = BLACK;
}
*/

var toggle = 1;
var t = document.getElementById("toggle");

var toggleCallBack = function(e){
    e.preventDefault();
    if (toggle == 1){
	toggle = 0;
	console.log(toggle)
    }
    else{
	toggle = 1;
	console.log(toggle)
    }
}

var clickDraw = function(e){
    e.preventDefault();
    if (toggle == 0){
	ctxt.fillStyle = "#ff0000";
	ctxt.fillRect(e.offsetX, e.offsetY, 40, 20);
    }
    else{
	ctxt.beginPath();
	ctxt.arc(e.offsetX, e.offsetY, 15, 0, 2* Math.PI);
	ctxt.stroke();
	ctxt.fillStyle = "#0000ff";
	ctxt.fill();
    }
}

var b = document.getElementById("clear");

var clear = function(e){
    e.preventDefault();
    ctxt.fillStyle = "#ffffff";
    ctxt.fillRect(0,0,600,600);
}

t.addEventListener('click', toggleCallBack);
c.addEventListener('click', clickDraw);
b.addEventListener('click', clear);
