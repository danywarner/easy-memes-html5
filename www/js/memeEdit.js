var fuente;
var imageData;
var currentPage;
var userLang;
var width;
var height;
var croped = false;
var canvas = document.getElementById('canvas');

function showInfo(){
	userLang = window.localStorage.getItem("deviceLanguage");
	if(userLang == "es"){
		swal({   title: "Easy Memes v1.0",   text: "Agradecimientos: Alejandro León<br> Contacto: <a href=\"mailto:danywarner@gmail.com\">danywarner@gmail.com</a><br> Twitter: <a href=\"http://twitter.com/danywarner\" style=\"color:#58a9f1\">@danywarner</a>",   imageUrl: "./icons/raptor180.png", html: true });
	}else{
		swal({   title: "Easy Memes v1.0",   text: "Thanks to: Alejandro León<br> Contact: <a href=\"mailto:danywarner@gmail.com\">danywarner@gmail.com</a><br> Twitter: <a href=\"http://twitter.com/danywarner\" style=\"color:#58a9f1\">@danywarner</a>",   imageUrl: "./icons/raptor180.png", html: true });
	}
	
}

function adjustSize(img){
	var MAX_WIDTH = 300;
	var MAX_HEIGHT = 300;
	var wide = false;
	var high = false;
	width = img.width;
	height = img.height;

	if (width > height) {
	  if (width > MAX_WIDTH) {
	    height *= MAX_WIDTH / width;
	    width = MAX_WIDTH;
	    wide = true;
	  }
	} else {
	  if (height > MAX_HEIGHT) {
	    width *= MAX_HEIGHT / height;
	    height = MAX_HEIGHT;
	  }
	}

	//alert("W: "+width+" H: "+height);
	img.width = width;
	img.height = height;
	img.style.display = "inherit";
	document.getElementById("topText").style.display = "inherit";
	document.getElementById("bottomText").style.display = "inherit";
	if(wide === true){
		document.getElementById("topText").style.marginTop = "-"+height+"px";
	}
}

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

    ////hacerlo siempre. en las precargadas se bloquea si se intenta hacer de otra forma
    setTimeout(function(){ adjustSize(img); }, 100);

    ////
    memeContainer.appendChild(img);

    userLang = window.localStorage.getItem("deviceLanguage");
    
    if (userLang == "es"){
    	placeHolderTopText = "Texto superior";
    	placeHolderBtmText = "Texto inferior";
    	backText.innerHTML = "Atrás";
    }
    else if(userLang == "de"){
    	placeHolderTopText = "Top-text";
    	placeHolderBtmText = "Untertext";
    	backText.innerHTML = "Zurück";
    }
    else if(userLang == "fr"){
    	placeHolderTopText = "Texte du haut";
    	placeHolderBtmText = "Texte du bas";
    	backText.innerHTML = "Précédent";
    }
    else if(userLang == "it"){
    	placeHolderTopText = "Testo superiore";
    	placeHolderBtmText = "Testo inferiore";
    	backText.innerHTML = "Indietro";
    }
    else {
		placeHolderTopText = "Top Text";
		placeHolderBtmText = "Bottom Text";
		backText.innerHTML = "Back";
	}
	
    var top = document.createElement("textarea");
    var bottom = document.createElement("textarea");
    top.id = "topText";
    bottom.id = "bottomText";
    var fontSize = "44px";
    if(screen.width == 768){
	    	fontSize = "44px";
	    	top.style.fontSize = fontSize;
	    	bottom.style.fontSize = fontSize;
	}
	else if(screen.width == 414){
	    	fontSize = "40px";
	    	top.style.fontSize = fontSize;
	    	bottom.style.fontSize = fontSize;
	}
    top.placeholder = placeHolderTopText;
    top.addEventListener("keyup", setCropedFalse);
    memeContainer.appendChild(top);

    
    
    bottom.placeholder = placeHolderBtmText;
    bottom.addEventListener("keyup", setCropedFalse);
    memeContainer.appendChild(bottom);

    var backBtn = document.getElementById("BackToGrid");
    var i3 = src.search("currentPage=")+12;
    currentPage = parseInt(src.substring(i3,i3+1));
    backBtn.href = "index.html?currentPage="+currentPage;
    


} 

function setCropedFalse(){
	croped = false;
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
		if(croped === false){
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
	    setTimeout(function(){ adjustSize(img); }, 100);
		var w = img.width;
		var h = img.height;
		canvas.width = w;
	    canvas.height = h;
		var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0,0,w,h, 0,0,w,h);
	    var fontSize = 53;
	    if(screen.width == 768){
	    	fontSize = 30;
	    }
	    ctx.font = 'bold '+fontSize+'px Helvetica';
	    ctx.lineWidth = 2;
		ctx.strokeStyle = "black";
    	ctx.textAlign = 'center';
    	ctx.fillStyle = "#ffffff";

    	wrapText(ctx, topText.value.toUpperCase(), w/2, 52, w, 60);
		wrapText(ctx, bottomText.value.toUpperCase(), w/2, h*0.82, w, 60); 

		img.src = canvas.toDataURL();
		croped = true;
		setTimeout(function(){ 
			window.plugins.socialsharing.share(null, 'Android', 'data:image/jpeg;base64,'+canvas.toDataURL(), null);
		}, 5);
		}
		else{
			window.plugins.socialsharing.share(null, 'Android', 'data:image/jpeg;base64,'+canvas.toDataURL(), null);
		}

		
		document.getElementById("imgcrop").style.width = 0;
		document.getElementById("imgcrop").style.height = 0;
		
		//window.plugins.socialsharing.share(null, 'Android filename', 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null);
		
		//window.plugins.socialsharing.share(null, null, 'https://www.google.nl/images/srpr/logo4w.png', null);

}

window.addEventListener("load", start, false);

