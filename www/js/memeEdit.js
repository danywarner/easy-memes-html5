var fuente;
var imageData;
function start(){
	var memeContainer = document.getElementById("memeContainer");
	var src=window.location.href;
	var i = src.search("meme=")+5;
	var f = src.search(".jpg")+4;
	fuente=src.substring(i,f);
	alert(fuente);

	var img = document.createElement("img");
	if(fuente == "abcxyz.jpg") {
		var i2 = src.search("abcxyz=")+7;
		imageData = src.substring(i2,src.length);
		img.src = imageData;
	}
	else{
    	img.src = "./img/"+fuente;
    }
    img.id = "thumbnail";
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

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            context.strokeText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
        context.strokeText(line, x, y);
}




function crop(){
		var src=fuente;
		if(src!="abcxyz.jpg"){
  			src = "img/"+src;
		}
		else{
			src = imageData;
		}
	  	var img = document.getElementById("imgcrop");
	  	var topText = document.getElementById("topText");
	  	var bottomText = document.getElementById("bottomText");
	    img.src = src;
		var canvas = document.getElementById('canvas');
		canvas.width = 500;
	    canvas.height = 500;
		var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0,0,500,500, 0,0,500,500);
	    ctx.font = 'bold 55px Helvetica';
	    ctx.lineWidth = 2;
		ctx.strokeStyle = "black";
    	ctx.textAlign = 'center';
    	ctx.fillStyle = "#ffffff";

    	wrapText(ctx, topText.value.toUpperCase(), 250, 52, 510, 50);
		wrapText(ctx, bottomText.value.toUpperCase(), 250, 430, 510, 50); 

		img.src = canvas.toDataURL();
		window.plugins.socialsharing.share(null, 'Android filename', 'data:image/png;base64,'+canvas.toDataURL(), null);
		//window.plugins.socialsharing.share(null, 'Android filename', 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null);
}

window.addEventListener("load", start, false);
