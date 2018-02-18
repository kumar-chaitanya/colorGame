var span = document.querySelector('.header span');
var header = document.querySelector(".header");
var colors = [];
var squares = document.querySelectorAll(".wrapper > div");
var random;
var hard = true;
var refresh = document.querySelector(".newGame button");
var hard = document.querySelector(".level button:nth-child(even)");
var easy = document.querySelector(".level button");
var hardSquare = document.querySelectorAll(".hard-level");
makeTough();

refresh.addEventListener("click",newGame);

hard.addEventListener("click",function(){
	hard = true;
	makeTough();
	newGame();
});

easy.addEventListener("click",function(){
	hard = false;
	makeEasy();
	newGame();
});

function newGame(){
	if(hard)
		random = Math.floor(Math.random()*6);
	else
		random = Math.floor(Math.random()*3);
	header.style.backgroundColor = "rgb(30,126,160)";
	colors = [];	
	for(var i=0;i<6;i++){
		createColors();
	}

	span.textContent = colors[random];

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}

	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",checkColor);
	}
}

function checkColor(){
	color = this.style.backgroundColor;
	if(color === colors[random])
		victory();
	else
		this.style.backgroundColor = "#232323";
}

function createColors(){
	var r = Math.floor(Math.random()*255)+1;
	var g = Math.floor(Math.random()*255)+1;
	var b = Math.floor(Math.random()*255)+1;

	var color = "rgb("+r+", "+g+", "+b+")";
	colors.push(color);
}

function victory(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[random];
	}
	header.style.backgroundColor = colors[random];
}

function makeTough(){
	for(var i=0;i<3;i++){
		hardSquare[i].classList.remove("hard-level");
	}
}

function makeEasy(){
	for(var i=0;i<3;i++){
		hardSquare[i].classList.add("hard-level");
	}
}