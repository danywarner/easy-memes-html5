var currentPage = 1;
var strings = ["1990.jpg", "angryschool.jpg", "asianfather.jpg", "badluckbrian.jpg", "beargrills.jpg", "aliens.jpg", "braceyourselves.jpg", "brujeria.jpg", "butthurtdweller.jpg", "philosoraptor.jpg", "boromir.jpg", "chinesekid.jpg", "chubbygirl.jpg", "attractiveconv.jpg", "scumbaggirl.jpg", "chucknorris.jpg", "clarity.jpg", "confessionkid.jpg", "collegefreshman.jpg", "correction.jpg", "dareyou.jpg", "datass.jpg", "dicaprio.jpg", "disastergirl.jpg", "drunkmom.jpg", "duhh.jpg", "dwight.jpg", "eviltodler.jpg", "facepalm.jpg", "finallyover.jpg", "frustrated.jpg", "gollum.jpg", "goodguygreg.jpg", "grammarnazi.jpg", "grandmainternet.jpg", "interesting.jpg", "internet.jpg", "ironman.jpg", "jealousgirl.jpg", "backinmyday.jpg", "negra.jpg", "neo.jpg", "agentsmith.jpg", "nomedigas.jpg", "notime.jpg", "angrywalter.jpg", "notimpressed.jpg", "novicia.jpg", "overlyattachedgirlfriend.jpg", "oaboyfriend.jpg", "oficinista.jpg", "oprah.jpg", "parker.jpg", "pauld.jpg", "photogenic.jpg", "policiatestigo.jpg", "problems.jpg", "badarghippie.jpg", "karatekyle.jpg", "keanu.jpg", "laughingmen.jpg", "lazycollegesenior.jpg", "leavebalone.jpg", "leche.jpg", "luckylarry.jpg", "minor.jpg", "morpheus.jpg", "mvp.jpg", "rastateacher.jpg", "redditorswife.jpg", "redneck.jpg", "regret.jpg", "sadkeanu.jpg", "sammy.jpg", "skeptical.jpg", "sparta.jpg", "sparta2.jpg", "steffi.jpg", "stonerstanley.jpg", "succesful.jpg", "successkid.jpg", "thirdworld.jpg", "thumb.jpg", "timberlake.jpg", "metalhead.jpg", "middleclassmilf.jpg", "provincial.jpg", "scumbagbrain.jpg", "vendetta.jpg", "women.jpg", "awesometeacher.jpg", "einstein.jpg", "jesus.jpg", "trolgirl.jpg", "turista.jpg", "tyler.jpg", "infancia.jpg", "jokerrainbow.jpg", "josephducreux.jpg", "nerdgirl.jpg", "overeducated.jpg", "programmer.jpg", "scumbag.jpg", "sexadvice.jpg", "weirdface.jpg", "loseminds.jpg", "unhelpful.jpg", "vengeancedad.jpg", "whyfuck.jpg", "willsmith.jpg", "willywonka.jpg", "yaomin.jpg", "yaowonka.jpg", "yodawg.jpg", "foreveralone.jpg", "challenge.jpg", "yuno.jpg", "jackie.jpg", "mrbean.jpg", "alegria.jpg", "badas.jpg", "trollface.jpg", "truestory.jpg", "tomesu4.jpg", "xallthey.jpg", "yao.jpg", "okayguy.jpg", "ragefu.jpg", "why.jpg", "bob.jpg", "bob1.jpg", "50corazones.jpg", "patricksays.jpg", "ash.jpg", "professoroak.jpg", "chavo8.jpg", "florinda.jpg", "donramon.jpg", "futuramafry.jpg", "takemymoney.jpg", "leela.jpg", "herculeshades.jpg", "hipsterariel.jpg", "homer.jpg", "tabla.jpg", "crosseyedgoku.jpg", "nappa.jpg", "dinkleberg.jpg", "toystory.jpg", "southpark.jpg", "chemdog.jpg", "badadvice.jpg", "advicegod.jpg", "advicemall.jpg", "advicedog.jpg", "antijokechicken.jpg", "anxietycat.jpg", "apathydog.jpg", "aristocat.jpg", "artowl.jpg", "aviatordog.jpg", "awesome.jpg", "sociallyawkwardpenguin.jpg", "awesomeawkward.jpg", "awkwardsocial.jpg", "chihuahua.jpg", "chilllemur.jpg", "businesscat.jpg", "chemistrycat.jpg", "chronicillness.jpg", "foca.jpg", "confessionbear.jpg", "depressedcat.jpg", "crazywolf.jpg", "insanitywolf.jpg", "interestingcat.jpg", "frog.jpg", "laraza.jpg", "pony.jpg", "surprisekoala.jpg", "badspider.jpg", "bicho.jpg", "ted.jpg", "trap.jpg", "yoda.jpg", "stonerdog.jpg", "rene.jpg", "richraven.jpg", "sadcat.jpg", "slowpoke.jpg", "racistdog.jpg", "nc.jpg", "maladvice.jpg", "lionking.jpg", "gatosh.jpg", "grumpycat.jpg", "homophobic.jpg", "monos.jpg", "papercat.jpg", "paranoidparrot.jpg", "pato.jpg", "pedobear.jpg", "foulbachelorfrog.jpg", "bonobolife.jpg", "baby.jpg", "drunkbaby.jpg", "angrybaby.jpg", "babygodfather.jpg", "babylove.jpg", "screambaby.jpg", "daria.jpg", "fpsnoob.jpg", "evilkid.jpg", "borat.jpg", "boxxy.jpg", "brucelee.jpg", "brucew.jpg", "captain.jpg", "caray.jpg", "aniston.jpg", "barneystinson.jpg", "barneywin.jpg", "beyonce.jpg", "bieber.jpg", "billgates.jpg", "billmurray.jpg", "billoreily.jpg", "christina.jpg", "clooney.jpg", "comillas.jpg", "cryingparker.jpg", "deniro.jpg", "docbrown.jpg", "drevil.jpg", "gangam.jpg", "gangam3.jpg", "hefner.jpg", "hilton.jpg", "jayz.jpg", "johnysins.jpg", "kaepernick.jpg", "lindsay.jpg", "mark.jpg", "matias.jpg", "miley.jpg", "minaj.jpg", "onedir.jpg", "sasha.jpg", "seagal.jpg", "shanaynay.jpg", "seestiro.jpg", "shaq.jpg", "skrillex.jpg", "snoopdog.jpg", "tebow.jpg", "thehell.jpg", "thicke.jpg", "tyson.jpg", "vindiesel.jpg", "wasthere.jpg", "angrydumbledore.jpg", "cuchis.jpg", "cucho.jpg", "findyou.jpg", "freezing.jpg", "friendzone.jpg", "gandalf.jpg", "harypotter.jpg", "angryarnold.jpg", "heresjohny.jpg", "hernan.jpg", "hideyokids.jpg", "howard.jpg", "impusibru.jpg", "jacksparrow.jpg", "mask.jpg", "powers.jpg", "pulp.jpg", "rapistedward.jpg", "scary.jpg", "house.jpg", "iknow.jpg", "soldier.jpg", "sparrow.jpg", "wolowitz.jpg", "zombie.jpg", "bane.jpg", "batman.jpg", "badfactman.jpg", "batmanslap.jpg", "headhache.jpg", "spidercomputer.jpg", "whispering.jpg", "chickenspider.jpg", "notbad.jpg", "obama.jpg", "obamaphone.jpg", "obamapissed.jpg", "obamarie.jpg", "scumbagobama.jpg", "staffobama.jpg", "putin.jpg", "queen.jpg", "arjona.jpg", "banderas.jpg", "bolillo.jpg", "bonet.jpg", "calle13.jpg", "chavez.jpg", "chente.jpg", "falcao.jpg", "cristiano.jpg", "dayaanna.jpg", "escobar2.jpg", "focalizate.jpg", "grisales.jpg", "hayek.jpg", "lapiedra.jpg", "lloron.jpg", "maduro.jpg", "marimar.jpg", "mecatie.jpg", "messi.jpg", "mexicano.jpg", "montana.jpg", "mourinho.jpg", "nati.jpg", "nerasloma.jpg", "noexiste.jpg", "uribe.jpg", "vergara.jpg", "padre.jpg", "pekerman.jpg", "penanieto.jpg", "pepe.jpg", "piedad.jpg", "pitbull.jpg", "quevedo.jpg", "ramos.jpg", "riano.jpg", "ivanramiro.jpg", "jessyk.jpg", "jmsantos.jpg", "juangabriel.jpg", "lalinde.jpg", "wachiturro.jpg", "fernandez.jpg", "zarco.jpg", "zepequeno.jpg", "bozzo.jpg", "casocerrado.jpg", "minecraft.jpg", "creeper.jpg", "aoe.jpg", "gta.jpg", "confucious.jpg", "couch.jpg", "drivegranma.jpg", "kimyongun.jpg", "reddit.jpg", "genetics.jpg", "sadtrooper.jpg", "slenderman.jpg", "omsk.jpg", "ecce.jpg", "homo.jpg"];
var lastPage = 100;

function takePicture(){
    navigator.camera.getPicture(onSuccess, onFail, { 
        quality: 50,
        allowEdit:true,
        targetWidth: 500,
        targetHeight: 500,
        destinationType: Camera.DestinationType.DATA_URL
        });
}

function getPictureFromLibrary(){
     navigator.camera.getPicture(onSuccess, onFail, { 
        quality: 50,
        allowEdit:true,
        targetWidth: 500,
        targetHeight: 500,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.DATA_URL
        });
}

function onSuccess(imageData) { 
    var base64= "data:image/jpeg;base64," + imageData;
    window.location.replace("memeedit.html?currentPage="+currentPage+"&meme=abcxyz.jpg&abcxyz="+base64);
    //var image = document.getElementById('thumbnail');
    //image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    //alert('Failed because: ' + message);
}

function goForward(){
    if(currentPage < lastPage){
        currentPage += 1;
        fillGrid(currentPage);
    }
}
function goBackward(){
    if(currentPage > 1) {
        currentPage -= 1;
        fillGrid(currentPage);
    }
}

function fillGrid(parameterPage){
    //alert("W: "+screen.width+" h: "+screen.height);
    
    var src=window.location.href;
    var a = src.search("currentPage=");
    if(a != -1 && parameterPage === undefined){
        a += 12;
        currentPage = parseInt(src.substring(a,a+1));
    }
    var xpictures = 45;
    var screenWidth = screen.width;
    switch(screenWidth){
        case 320: //iphone 4s, 5, 5s
        case 768: //ipad 2, air, air2, pro, retina
            xpictures = 45;
            break;
        case 375: //iphone 6
            xpictures = 48;
            break;
        case 414: //iphone 6+
            xpictures = 44;
            break;
        
    }
    var i = (currentPage - 1) * xpictures;
    var f = currentPage * xpictures;
    var memeGrid = document.getElementById("memeGrid");
    var back = document.getElementById("backwardButton");
    var fwd = document.getElementById("forwardButton");

        while (memeGrid.firstChild) {
        memeGrid.removeChild(memeGrid.firstChild);
    }
    var k=i;
    for(k=i;k<f;k++)
    {
    var currentString = strings[k];
    if(currentString === undefined){
        k=f;
        lastPage = currentPage;
        fwd.src = "./icons/forward2.png";
        break;
    }else{
        fwd.src = "./icons/forward.png";
        var link = document.createElement("a");
        link.setAttribute("href","memeedit.html?currentPage="+currentPage+"&meme="+currentString);
        link.setAttribute("data-transition","slide");
        link.alt = currentString;

        var img = document.createElement("img");
        img.src = "./img/"+currentString;
        img.classList.add('gridpicture');
        link.appendChild(img);
        memeGrid.appendChild(link);
    }
    //$('a').attr('data-transition','flip'); 

    if(currentPage == 1){
        back.src = "./icons/backward2.png";
    }else{
        back.src = "./icons/backward.png";
    }
    document.getElementById("gridFooter").style.visibility = "visible";

    }
}

function checkLanguage() {
    navigator.globalization.getPreferredLanguage(
        function (language) {
            userLang = (language.value).substring(0,2);
            window.localStorage.setItem("deviceLanguage", userLang);
        },
        function () {

        }
      );
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    getStrings: function() {
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
         ////FLURRY
        if (window.plugins && window.plugins.flurry) {
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
            if (isAndroid) {
                var androidKey = getAndroidKey();
                window.plugins.flurry.startSession(androidKey, function () {
                    console.log('AndroidFlurry Success!');
                }, function () {
                    alert('Flurry Error!');
                });
            } else {
                var iOSKey = getiOSKey();
                window.plugins.flurry.startSession(iOSKey, function () {
                    console.log('iOS Flurry Success!');
                    window.plugins.flurry.setSessionReportsOnCloseEnabled(true); // iOS only
                    window.plugins.flurry.setSessionReportsOnPauseEnabled(true); // iOS only
                }, function () {
                    alert('Flurry Error!');
                });
            }
        }
        else{alert("que paila");}
        ////FLURRY
        var userLang = window.localStorage.getItem("deviceLanguage");
        if(userLang === null){
            checkLanguage();
        }
        fillGrid();
   


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

       

    }
};
