//Carol Pan
//SoftDev2 pd7
//K1 - I see a red door
//2018-02-05

var c = document.getElementById("slate");
var ctxt = c.getContext("2d");
console.log("printing canvas.....");
console.log(c);
console.log(ctxt);

var toggle = 1;
var t = document.getElementById("toggle");
var toggleCallBack = function(e){
    e.preventDefault();
    if (toggle == 1){
	toggle = 0;
	console.log("Rectangle: " + toggle)
    }
    else{
	toggle = 1;
	console.log("Circle: " + toggle)
    }
}

var xcor = 0;
var ycor = 0;
var start = false;
var last_obj = 0;

var drawRect = function(x,y){
    ctxt.fillStyle = "#ff0000";
    ctxt.fillRect(x- 20, y-10, 40, 20);
}

var drawCircle = function(x,y){
    ctxt.beginPath();
    ctxt.arc(x, y, 15, 0, 2* Math.PI);
    ctxt.stroke();
    ctxt.fillStyle = "#0000ff";
    ctxt.fill();
}

var clickDraw = function(e){
    e.preventDefault();
    console.log("drawing at (" + e.offsetX + "," + e.offsetY + ")")
    if (toggle == 0){
	drawRect(e.offsetX, e.offsetY);
    }
    else{
	drawCircle(e.offsetX, e.offsetY);
    }
    console.log(start)
    if (start){
	console.log("connecting the dots")
	ctxt.beginPath();
	ctxt.moveTo(xcor,ycor);
	ctxt.lineTo(e.offsetX, e.offsetY);
	ctxt.strokeStyle = "#000000";
	ctxt.stroke();
	if (lastobj == 0){
	    drawRect(xcor,ycor);
	}
	else{
	    drawCircle(xcor,ycor);
	}
    }
    else {
	start = true;
    }
    xcor = e.offsetX;
    ycor = e.offsetY;
    lastobj = toggle;
}

var b = document.getElementById("clear");
var clear = function(e){
    console.log("clearing the field")
    e.preventDefault();
    ctxt.fillStyle = "#ffffff";
    ctxt.fillRect(0,0,600,600);
    start = false;
}

t.addEventListener('click', toggleCallBack);
c.addEventListener('click', clickDraw);
b.addEventListener('click', clear);
