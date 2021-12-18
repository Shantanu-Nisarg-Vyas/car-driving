canvas=document.getElementById("Canvas1");
ctx=canvas.getContext("2d");

carw=100;
carh=200;
carx=10;
cary=10;

function view () {
	backimage=new Image();
    backimage.onload=uploadBackground;
    backimage.src="parkingLot.jpg";

    carimage=new Image();
    carimage.onload=uploadgreencar;
    carimage.src="car2.png";
}

function uploadBackground() {
    ctx.drawImage(backimage, 0, 0, 900, 600);
}

function uploadgreencar() {
	ctx.drawImage(carimage, carx, cary, carw, carh);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38') {
			up();
			console.log("up");
		}
	
		if(keyPressed == '40') {
			down();
			console.log("down");
		}
		
		if(keyPressed == '37') {
			left();
			console.log("left");
		}
	
		if(keyPressed == '39') {
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary>0) {
		cary=cary-10;
		console.log(carx+","+cary)
		uploadBackground()
		uploadgreencar()
	}

}

function down()
{
	if (cary<400) {
		cary=cary+10;
		console.log(carx+","+cary)
		uploadBackground()
		uploadgreencar()
	}
	
}

function left()
{
	if (carx>0) {
		carx=carx-10;
		console.log(carx+","+cary)
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	if (carx<800) {
		carx=carx+10;
		console.log(carx+","+cary)
		uploadBackground()
		uploadgreencar()
	}
}
