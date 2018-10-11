//A
function RandomRed(){
  var red = Math.round(Math.random()*255)
  return "rgb("+red+", 100, 100)";
}

var i = 0;
setInterval(()=>{
	if(i%2==0){	
	app.style.backgroundColor = RandomRed();
       }else {
	app.style.backgroundColor = RandomBlue();
       }
       i++;
     }, 500);

setInterval(()=>{
	app.style.backgroundColor = "rgb(255,222,255)";
 },500);
		
//B
function RandomBlue() {
	var blue = Math.round(Math.random()*255)
	return "rgb(100, 100, "+blue")";
}
