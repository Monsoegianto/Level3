//A
function RandomRed(){
  var red = Math.round(Math.random()*255)
  return "rgb("+red+", 100, 100)";
}

setInterval(()=>{
	app.style.backgroundColor = "rgb(255,222,255)";
 },500);
		
//B
function RandomBlue() {
	var blue = Math.round(Math.random()*255)
	return "rgb(100, 100, "+blue")";
}
