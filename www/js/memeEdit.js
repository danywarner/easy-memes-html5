var fuente;
var imageData;
var currentPage;
var userLang;
function start(){
    var placeHolderText;
	var memeContainer = document.getElementById("memeContainer");
	var backText = document.getElementById("BackToGrid");
	var src=window.location.href;
	var i = src.search("meme=")+5;
	var f = src.search(".jpg")+4;
	fuente=src.substring(i,f);

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

    userLang = window.localStorage.getItem("deviceLanguage");
    if(userLang == "en"){
		placeHolderTopText = "Tap To Edit";
		placeHolderBtmText = "Tap To Edit";
		backText.innerHTML = "Back";
    } else if (userLang == "es"){
    	placeHolderTopText = "Texto superior";
    	placeHolderBtmText = "Texto inferior";
    	backText.innerHTML = "Atrás";
    }

    var top = document.createElement("textarea");
    top.id = "topText";
    top.placeholder = placeHolderTopText;
    memeContainer.appendChild(top);

    var bottom = document.createElement("textarea");
    bottom.id = "bottomText";
    bottom.placeholder = placeHolderBtmText;
    memeContainer.appendChild(bottom);

    var backBtn = document.getElementById("BackToGrid");
    var i3 = src.search("currentPage=")+12;
    currentPage = parseInt(src.substring(i3,i3+1));
    backBtn.href = "index.html?currentPage="+currentPage;
    


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
