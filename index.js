let start =0;
let level = 1;
let orderNumber = 0;
let colors = ["green","red","yellow","blue"];
let list_colours = [];
function randomColour(lvl){
	var randomNumber = Math.floor(Math.random() * 4);
	let randomColor = colors[randomNumber];
	list_colours[level-1] = randomColor;
	makeSound(randomColor);
	buttonAnimation(randomColor);
}
document.addEventListener("keypress",function(){
	if(start==0){
		randomColour(level);
		start = 1;
		document.querySelector("h1").innerHTML = "Level " + level;
	}
});

for (let i = 0; i < 4; i++) {
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
		if(start==1){
			if(this.id == list_colours[orderNumber]){
				makeSound(colors[i]);
				buttonAnimation(colors[i]);
				orderNumber++;
				if(orderNumber==level){
					orderNumber=0;
					level++;
					setTimeout(function(){
						randomColour(level);
						document.querySelector("h1").innerHTML = "Level " + level;
					},300);
				}
			}
			else{
				gameOver();
			}
		}
	});
}

function gameOver(){
	document.querySelector("body").classList.add("game-over");
	setTimeout(function(){
		document.querySelector("body").classList.remove("game-over");
	},100);
	start = 0;
	level = 1;
	orderNumber = 0;
	var audio = new Audio("sounds/wrong.mp3");
    audio.play();
	document.querySelector("h1").innerHTML = "Game Over, Press Any Key to Restart";
}

function makeSound(key){
	switch(key){
		case "green":
			var audio = new Audio("sounds/green.mp3");
    		audio.play();
			break;
		case "red":
			var audio = new Audio("sounds/red.mp3");
    		audio.play();
			break;
		case "yellow":
			var audio = new Audio("sounds/yellow.mp3");
    		audio.play();
			break;
		case "blue":
			var audio = new Audio("sounds/blue.mp3");
    		audio.play();
			break;
	}
}
function buttonAnimation(key){
	document.querySelector("."+key).classList.add("pressed");
	setTimeout(function(){
		document.querySelector("."+key).classList.remove("pressed");
	},100)
}