function start(){
	var memeContainer = document.getElementById("memeContainer");
	var src=window.location.href;
	src=src.substring(126,src.length);
	var img = document.createElement("img");
    img.src = "./img/"+src;
    img.id = "thumbnail";
    //document.body.appendChild(img); 
    memeContainer.appendChild(img);

    var top = document.createElement("textarea");
    top.id = "topText";
    top.placeholder = "Tap to edit";
    memeContainer.appendChild(top);

    var bottom = document.createElement("textarea");
    bottom.id = "bottomText";
    bottom.placeholder = "Tap to edit";
    memeContainer.appendChild(bottom);

} 

function goToGrid() {
    alert("back");
}
function shareMeme() {
  navigator.screenshot.URI(function(error,res){
  	if(error){
    	console.error(error);
  	}else{
  		
	}
  },50);
}

function crop(){
	var src=window.location.href;
		src=src.substring(126,src.length);
  		var source = "img/"+src;
	  	var img = document.getElementById("imgcrop");
	  	var topText = document.getElementById("topText");
	  	var bottomText = document.getElementById("bottomText");
	    img.src = source;//"img/awesomeawkward.jpg";// res.URI;
		var canvas = document.getElementById('canvas');
		canvas.width = 500;
	    canvas.height = 500;
		var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0,0,500,500, 0,0,500,500);
	    ctx.lineWidth = 60;  
	    ctx.font = 'bold ' +50+ 'px  Helvetica';
	    ctx.lineWidth = 3;
		ctx.strokeStyle = "black";
    	ctx.textAlign = 'center';
    	ctx.fillStyle = "#ffffff";
    	ctx.textBaseline = 'bottom';
	    ctx.fillText(topText.value.toUpperCase(),250,100); 
	    ctx.textBaseline="top"; 
		ctx.fillText(bottomText.value.toUpperCase(),250,400); 
		img.src = canvas.toDataURL();
}

window.addEventListener("load", start, false);
