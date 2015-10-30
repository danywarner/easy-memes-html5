var currentPage = 1;
var strings = ["1990.jpg", "agentsmith.jpg", "alegria.jpg", "aliens.jpg", "angryarnold.jpg", "angrybaby.jpg", "angrydumbledore.jpg", "angryschool.jpg", "angrywalter.jpg", "aniston.jpg", "aoe.jpg", "arjona.jpg", "asianfather.jpg", "attractiveconv.jpg", "awesometeacher.jpg", "baby.jpg", "babygodfather.jpg", "babylove.jpg", "backinmyday.jpg", "badarghippie.jpg", "badas.jpg", "badfactman.jpg", "badluckbrian.jpg", "badspider.jpg", "banderas.jpg", "bane.jpg", "barneystinson.jpg", "barneywin.jpg", "batman.jpg", "batmanslap.jpg", "beargrills.jpg", "beyonce.jpg", "bicho.jpg", "bieber.jpg", "billgates.jpg", "billmurray.jpg", "billoreily.jpg", "bob.jpg", "bob1.jpg", "50corazones.jpg", "patricksays.jpg", "ash.jpg", "professoroak.jpg", "chavo8.jpg", "florinda.jpg", "futuramafry.jpg", "takemymoney.jpg", "leela.jpg", "herculeshades.jpg", "hipsterariel.jpg", "homer.jpg", "tabla.jpg", "crosseyedgoku.jpg", "nappa.jpg", "dinkleberg.jpg", "toystory.jpg", "southpark.jpg", "bolillo.jpg", "bonet.jpg", "bonobolife.jpg", "borat.jpg", "boromir.jpg", "boxxy.jpg", "bozzo.jpg", "braceyourselves.jpg", "brucelee.jpg", "brucew.jpg", "brujeria.jpg", "butthurtdweller.jpg", "cala.jpg", "calabaza.jpg", "calle13.jpg", "captain.jpg", "caray.jpg", "casocerrado.jpg", "challenge.jpg", "chavez.jpg", "chente.jpg", "chickenspider.jpg", "chemdog.jpg", "badadvice.jpg", "advicegod.jpg", "advicemall.jpg", "advicedog.jpg", "antijokechicken.jpg", "anxietycat.jpg", "apathydog.jpg", "aristocat.jpg", "artowl.jpg", "aviatordog.jpg", "awesome.jpg", "sociallyawkwardpenguin.jpg", "awesomeawkward.jpg", "awkwardsocial.jpg", "chihuahua.jpg", "chilllemur.jpg", "businesscat.jpg", "chemistrycat.jpg", "chronicillness.jpg", "foca.jpg", "confessionbear.jpg", "depressedcat.jpg", "crazywolf.jpg", "insanitywolf.jpg", "interestingcat.jpg", "frog.jpg", "laraza.jpg", "pony.jpg", "surprisekoala.jpg", "ted.jpg", "trap.jpg", "yoda.jpg", "stonerdog.jpg", "rene.jpg", "richraven.jpg", "sadcat.jpg", "slowpoke.jpg", "racistdog.jpg", "nc.jpg", "maladvice.jpg", "lionking.jpg", "gatosh.jpg", "grumpycat.jpg", "homophobic.jpg", "monos.jpg", "papercat.jpg", "paranoidparrot.jpg", "pato.jpg", "pedobear.jpg", "philosoraptor.jpg", "foulbachelorfrog.jpg", "chinesekid.jpg", "christina.jpg", "chubbygirl.jpg", "chucknorris.jpg", "clarity.jpg", "clooney.jpg", "collegefreshman.jpg", "comillas.jpg", "confessionkid.jpg", "confucious.jpg", "correction.jpg", "couch.jpg", "creeper.jpg", "cristiano.jpg", "cryingparker.jpg", "cuchis.jpg", "cucho.jpg", "dareyou.jpg", "daria.jpg", "datass.jpg", "dayaanna.jpg", "deniro.jpg", "dicaprio.jpg", "disastergirl.jpg", "docbrown.jpg", "donramon.jpg", "drevil.jpg", "drivegranma.jpg", "drunkbaby.jpg", "drunkmom.jpg", "duhh.jpg", "dwight.jpg", "ecce.jpg", "einstein.jpg", "einstein2.jpg", "emodaddy.jpg", "escobar2.jpg", "evilkid.jpg", "eviltodler.jpg", "facepalm.jpg", "falcao.jpg", "fernandez.jpg", "finallyover.jpg", "findyou.jpg", "focalizate.jpg", "foreveralone.jpg", "foreverxmas.jpg", "fpsnoob.jpg", "freezing.jpg", "friendzone.jpg", "frustrated.jpg", "gamerkid.jpg", "gandalf.jpg", "gangam.jpg", "gangam3.jpg", "genetics.jpg", "ginger.jpg", "gollum.jpg", "goodguygreg.jpg", "grammarnazi.jpg", "grandmainternet.jpg", "grisales.jpg", "gta.jpg", "harypotter.jpg", "hayek.jpg", "headhache.jpg", "hefner.jpg", "heresjohny.jpg", "hernan.jpg", "hideyokids.jpg", "hilton.jpg", "homo.jpg", "house.jpg", "howard.jpg", "iknow.jpg", "impusibru.jpg", "infancia.jpg", "interesting.jpg", "internet.jpg", "ironman.jpg", "ivanramiro.jpg", "jackie.jpg", "jacksparrow.jpg", "jayz.jpg", "jealousgirl.jpg", "jessyk.jpg", "jesus.jpg", "jmsantos.jpg", "johnysins.jpg", "jokerrainbow.jpg", "josephducreux.jpg", "juangabriel.jpg", "kaepernick.jpg", "karatekyle.jpg", "keanu.jpg", "kimyongun.jpg", "lalinde.jpg", "lapiedra.jpg", "laughingmen.jpg", "lazycollegesenior.jpg", "leavebalone.jpg", "leche.jpg", "lindsay.jpg", "lloron.jpg", "loseminds.jpg", "luckylarry.jpg", "maduro.jpg", "marimar.jpg", "mark.jpg", "mask.jpg", "matias.jpg", "mecatie.jpg", "messi.jpg", "metalhead.jpg", "mexicano.jpg", "middleclassmilf.jpg", "miley.jpg", "minaj.jpg", "minecraft.jpg", "minor.jpg", "montana.jpg", "morpheus.jpg", "mourinho.jpg", "mrbean.jpg", "mvp.jpg", "nati.jpg", "negra.jpg", "neo.jpg", "nerasloma.jpg", "nerdgirl.jpg", "noexiste.jpg", "nomedigas.jpg", "notbad.jpg", "notime.jpg", "notimpressed.jpg", "novicia.jpg", "oaboyfriend.jpg", "obama.jpg", "obamaphone.jpg", "obamapissed.jpg", "obamarie.jpg", "oficinista.jpg", "okayguy.jpg", "omsk.jpg", "onedir.jpg", "oprah.jpg", "overeducated.jpg", "overlyattachedgirlfriend.jpg", "padre.jpg", "parker.jpg", "pauld.jpg", "pekerman.jpg", "penanieto.jpg", "pepe.jpg", "photogenic.jpg", "piedad.jpg", "pitbull.jpg", "policiatestigo.jpg", "powers.jpg", "problems.jpg", "programmer.jpg", "provincial.jpg", "pulp.jpg", "putin.jpg", "queen.jpg", "quevedo.jpg", "ragefu.jpg", "ramos.jpg", "rapistedward.jpg", "rastateacher.jpg", "reddit.jpg", "redditorswife.jpg", "redneck.jpg", "regret.jpg", "riano.jpg", "sadkeanu.jpg", "sadtrooper.jpg", "sammy.jpg", "sasha.jpg", "scary.jpg", "screambaby.jpg", "scumbag.jpg", "scumbagbrain.jpg", "scumbaggirl.jpg", "scumbagobama.jpg", "seagal.jpg", "seestiro.jpg", "sexadvice.jpg", "shanaynay.jpg", "shaq.jpg", "skeptical.jpg", "skrillex.jpg", "slenderman.jpg", "snoopdog.jpg", "soldier.jpg", "sparrow.jpg", "sparta.jpg", "sparta2.jpg", "spidercomputer.jpg", "staffobama.jpg", "steffi.jpg", "stonerstanley.jpg", "succesful.jpg", "successfulblack.jpg", "successkid.jpg", "sunnystudent.jpg", "tebow.jpg", "tesla.jpg", "thehell.jpg", "thicke.jpg", "thirdworld.jpg", "thumb.jpg", "timberlake.jpg", "tomesu4.jpg", "trolgirl.jpg", "trollface.jpg", "truestory.jpg", "turista.jpg", "tyler.jpg", "tyson.jpg", "unhelpful.jpg", "uribe.jpg", "vendetta.jpg", "vengeancedad.jpg", "vergara.jpg", "vindiesel.jpg", "wachiturro.jpg", "wasthere.jpg", "weirdface.jpg", "whispering.jpg", "why.jpg", "whyfuck.jpg", "willsmith.jpg", "willywonka.jpg", "wolowitz.jpg", "women.jpg", "xallthey.jpg", "yao.jpg", "yaomin.jpg", "yaowonka.jpg", "yodawg.jpg", "yuno.jpg", "zarco.jpg", "zepequeno.jpg", "zombie.jpg"];
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
    window.location.replace("memeedit.html?meme=abcxyz.jpg&abcxyz="+base64);
    //var image = document.getElementById('thumbnail');
    //image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    //alert('Failed because: ' + message);
}

function goForward(){
    if(currentPage < lastPage){
        currentPage += 1;
        fillGrid();
    }
}
function goBackward(){
    if(currentPage > 1) {
        currentPage -= 1;
        fillGrid();
    }
}

function fillGrid(){
    var i = (currentPage - 1) * 45;
    var f = currentPage *45;
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
    if(currentString == undefined){
        k=f;
        lastPage = currentPage;
        fwd.src = "./icons/forward3.png";
        break;
    }else{
        fwd.src = "./icons/forward2.png";
        var link = document.createElement("a");
        link.setAttribute("href","memeedit.html?meme="+currentString);
        link.setAttribute("data-transition","slide");
        link.alt = currentString;

        var img = document.createElement("img");
        img.src = "./img/"+currentString;
        img.id = "gridpicture";
        link.appendChild(img);
        memeGrid.appendChild(link);
    }
    //$('a').attr('data-transition','flip'); 

    if(currentPage == 1){
        back.src = "./icons/backward3.png";
    }else{
        back.src = "./icons/backward2.png";
    }
    document.getElementById("gridFooter").style.visibility = "visible";

    }
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
                window.plugins.flurry.startSession('9DKG5Q2D5V7FCS9VNZ78', function () {
                    console.log('AndroidFlurry Success!');
                }, function () {
                    alert('Flurry Error!');
                });
            } else {
                window.plugins.flurry.startSession('ZTBX74SQK38TZ7KC9KFY', function () {
                    console.log('iOS Flurry Success!');
                    window.plugins.flurry.setSessionReportsOnCloseEnabled(true); // iOS only
                    window.plugins.flurry.setSessionReportsOnPauseEnabled(true); // iOS only
                }, function () {
                    alert('Flurry Error!');
                });
            }
        }
        else{alert("que paila")}
        ////FLURRY
        
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
