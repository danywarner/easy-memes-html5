function start(){
	var memeContainer = document.getElementById("memeContainer");
	var src=window.location.href;
	src=src.substring(126,src.length)
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
    img = '<img style="width:50%;" src="'+res.URI+'">';
    document.body.innerHTML = img;
  }
},50);
}
window.addEventListener("load", start, false);
