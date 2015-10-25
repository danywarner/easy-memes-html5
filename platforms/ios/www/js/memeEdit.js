function start(){
	var src=window.location.href;
	src=src.substring(126,src.length)
	var img = document.createElement("img");
        img.src = "./img/"+src;
        img.id = "thumbnail"
        document.body.appendChild(img); 
} 

window.addEventListener("load", start, false);
