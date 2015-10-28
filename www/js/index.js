var currentPage = 1;
var strings = ["1990.jpg", "50corazones.jpg", "advicedog.jpg", "advicegod.jpg", "advicemall.jpg", "agentsmith.jpg", "alegria.jpg", "aliens.jpg", "alto.jpg", "angryarnold.jpg", "angrybaby.jpg", "angrydumbledore.jpg", "angryschool.jpg", "angrywalter.jpg", "aniston.jpg", "antijokechicken.jpg", "anxietycat.jpg", "aoe.jpg", "apathydog.jpg", "aristocat.jpg", "arjona.jpg", "artowl.jpg", "ash.jpg", "asianfather.jpg", "attractiveconv.jpg", "aviatordog.jpg", "awesome.jpg", "awesomeawkward.jpg", "awesometeacher.jpg", "awkwardsocial.jpg", "baby.jpg", "babygodfather.jpg", "babylove.jpg", "backinmyday.jpg", "badadvice.jpg", "badarghippie.jpg", "badas.jpg", "badfactman.jpg", "badluckbrian.jpg", "badspider.jpg", "banderas.jpg", "bane.jpg", "barneystinson.jpg", "barneywin.jpg", "batman.jpg", "batmanslap.jpg", "beargrills.jpg", "beyonce.jpg", "bicho.jpg", "bieber.jpg", "billgates.jpg", "billmurray.jpg", "billoreily.jpg", "bob.jpg", "bob1.jpg", "bolillo.jpg", "bonet.jpg", "bonobolife.jpg", "borat.jpg", "boromir.jpg", "boxxy.jpg", "bozzo.jpg", "braceyourselves.jpg", "brucelee.jpg", "brucew.jpg", "brujeria.jpg", "businesscat.jpg", "butthurtdweller.jpg", "cala.jpg", "calabaza.jpg", "calle13.jpg", "captain.jpg", "caray.jpg", "casocerrado.jpg", "challenge.jpg", "chavez.jpg", "chavo8.jpg", "chemdog.jpg", "chemistrycat.jpg", "chente.jpg", "chickenspider.jpg", "chihuahua.jpg", "chilllemur.jpg", "chinesekid.jpg", "christina.jpg", "chronicillness.jpg", "chubbygirl.jpg", "chucknorris.jpg", "clarity.jpg", "clooney.jpg", "collegefreshman.jpg", "comillas.jpg", "confessionbear.jpg", "confessionkid.jpg", "confucious.jpg", "correction.jpg", "couch.jpg", "crazywolf.jpg", "creeper.jpg", "cristiano.jpg", "crosseyedgoku.jpg", "cryingparker.jpg", "cuchis.jpg", "cucho.jpg", "dareyou.jpg", "daria.jpg", "datass.jpg", "dayaanna.jpg", "deniro.jpg", "depressedcat.jpg", "dicaprio.jpg", "dinkleberg.jpg", "disastergirl.jpg", "docbrown.jpg", "donramon.jpg", "drevil.jpg", "drivegranma.jpg", "drunkbaby.jpg", "drunkmom.jpg", "duhh.jpg", "dwight.jpg", "ecce.jpg", "einstein.jpg", "einstein2.jpg", "emodaddy.jpg", "escobar2.jpg", "evilkid.jpg", "eviltodler.jpg", "facepalm.jpg", "falcao.jpg", "fernandez.jpg", "finallyover.jpg", "findyou.jpg", "florinda.jpg", "foca.jpg", "focalizate.jpg", "foreveralone.jpg", "foreverxmas.jpg", "foulbachelorfrog.jpg", "fpsnoob.jpg", "freezing.jpg", "friendzone.jpg", "frog.jpg", "frustrated.jpg", "futuramafry.jpg", "gamerkid.jpg", "gandalf.jpg", "gangam.jpg", "gangam3.jpg", "gatosh.jpg", "genetics.jpg", "ginger.jpg", "gollum.jpg", "goodguygreg.jpg", "grammarnazi.jpg", "grandmainternet.jpg", "grisales.jpg", "grumpycat.jpg", "gta.jpg", "harypotter.jpg", "hayek.jpg", "headhache.jpg", "hefner.jpg", "herculeshades.jpg", "heresjohny.jpg", "hernan.jpg", "hideyokids.jpg", "hilton.jpg", "hipsterariel.jpg", "homer.jpg", "homo.jpg", "homophobic.jpg", "house.jpg", "howard.jpg", "iknow.jpg", "impusibru.jpg", "infancia.jpg", "insanitywolf.jpg", "interesting.jpg", "interestingcat.jpg", "internet.jpg", "ironman.jpg", "ivanramiro.jpg", "jackie.jpg", "jacksparrow.jpg", "jayz.jpg", "jealousgirl.jpg", "jessyk.jpg", "jesus.jpg", "jmsantos.jpg", "johnysins.jpg", "jokerrainbow.jpg", "josephducreux.jpg", "juangabriel.jpg", "kaepernick.jpg", "karatekyle.jpg", "keanu.jpg", "kimyongun.jpg", "lalinde.jpg", "lapiedra.jpg", "laraza.jpg", "laughingmen.jpg", "lazycollegesenior.jpg", "leavebalone.jpg", "leche.jpg", "leela.jpg", "lindsay.jpg", "lionking.jpg", "lloron.jpg", "loseminds.jpg", "luckylarry.jpg", "maduro.jpg", "maladvice.jpg", "marimar.jpg", "mark.jpg", "mask.jpg", "matias.jpg", "mecatie.jpg", "messi.jpg", "metalhead.jpg", "mexicano.jpg", "middleclassmilf.jpg", "miley.jpg", "minaj.jpg", "minecraft.jpg", "minor.jpg", "monos.jpg", "montana.jpg", "morpheus.jpg", "mourinho.jpg", "mrbean.jpg", "mvp.jpg", "nappa.jpg", "nati.jpg", "nc.jpg", "negra.jpg", "neo.jpg", "nerasloma.jpg", "nerdgirl.jpg", "noexiste.jpg", "nomedigas.jpg", "notbad.jpg", "notime.jpg", "notimpressed.jpg", "novicia.jpg", "oaboyfriend.jpg", "obama.jpg", "obamaphone.jpg", "obamapissed.jpg", "obamarie.jpg", "oficinista.jpg", "okayguy.jpg", "omsk.jpg", "onedir.jpg", "oprah.jpg", "overeducated.jpg", "overlyattachedgirlfriend.jpg", "padre.jpg", "papercat.jpg", "paranoidparrot.jpg", "parker.jpg", "pato.jpg", "patricksays.jpg", "pauld.jpg", "pedobear.jpg", "pekerman.jpg", "penanieto.jpg", "pepe.jpg", "philosoraptor.jpg", "photogenic.jpg", "piedad.jpg", "pitbull.jpg", "policiatestigo.jpg", "pony.jpg", "powers.jpg", "problems.jpg", "professoroak.jpg", "programmer.jpg", "provincial.jpg", "pulp.jpg", "putin.jpg", "queen.jpg", "quevedo.jpg", "racistdog.jpg", "ragefu.jpg", "ramos.jpg", "rapistedward.jpg", "rastateacher.jpg", "reddit.jpg", "redditorswife.jpg", "redneck.jpg", "regret.jpg", "rene.jpg", "riano.jpg", "richraven.jpg", "sadcat.jpg", "sadkeanu.jpg", "sadtrooper.jpg", "sammy.jpg", "sasha.jpg", "scary.jpg", "screambaby.jpg", "scumbag.jpg", "scumbagbrain.jpg", "scumbaggirl.jpg", "scumbagobama.jpg", "seagal.jpg", "seestiro.jpg", "sexadvice.jpg", "shanaynay.jpg", "shaq.jpg", "skeptical.jpg", "skrillex.jpg", "slenderman.jpg", "slowpoke.jpg", "snoopdog.jpg", "sociallyawkwardpenguin.jpg", "soldier.jpg", "southpark.jpg", "sparrow.jpg", "sparta.jpg", "sparta2.jpg", "spidercomputer.jpg", "staffobama.jpg", "steffi.jpg", "stonerdog.jpg", "stonerstanley.jpg", "succesful.jpg", "successfulblack.jpg", "successkid.jpg", "sunnystudent.jpg", "surprisekoala.jpg", "tabla.jpg", "takemymoney.jpg", "tebow.jpg", "ted.jpg", "tesla.jpg", "thehell.jpg", "thicke.jpg", "thirdworld.jpg", "thumb.jpg", "timberlake.jpg", "tomesu4.jpg", "toystory.jpg", "trap.jpg", "trolgirl.jpg", "trollface.jpg", "truestory.jpg", "turista.jpg", "tyler.jpg", "tyson.jpg", "unhelpful.jpg", "uribe.jpg", "vendetta.jpg", "vengeancedad.jpg", "vergara.jpg", "vindiesel.jpg", "wachiturro.jpg", "wasthere.jpg", "weirdface.jpg", "whispering.jpg", "why.jpg", "whyfuck.jpg", "willsmith.jpg", "willywonka.jpg", "wolowitz.jpg", "women.jpg", "xallthey.jpg", "yao.jpg", "yaomin.jpg", "yaowonka.jpg", "yoda.jpg", "yodawg.jpg", "yuno.jpg", "zarco.jpg", "zepequeno.jpg", "zombie.jpg"];


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
    currentPage += 1;
    fillGrid();
}
function goBackward(){
    currentPage -= 1;
    fillGrid();
}

function fillGrid(){
    var i = (currentPage - 1) * 45;
    var f = currentPage *45;
    //var strings = ["1990.jpg", "50corazones.jpg", "advicedog.jpg", "advicegod.jpg", "advicemall.jpg", "agentsmith.jpg", "alegria.jpg", "aliens.jpg", "alto.jpg", "angryarnold.jpg", "angrybaby.jpg", "angrydumbledore.jpg", "angryschool.jpg", "angrywalter.jpg", "aniston.jpg", "antijokechicken.jpg", "anxietycat.jpg", "aoe.jpg", "apathydog.jpg", "aristocat.jpg", "arjona.jpg", "artowl.jpg", "ash.jpg", "asianfather.jpg", "attractiveconv.jpg", "aviatordog.jpg", "awesome.jpg", "awesomeawkward.jpg", "awesometeacher.jpg", "awkwardsocial.jpg", "baby.jpg", "babygodfather.jpg", "babylove.jpg", "backinmyday.jpg", "badadvice.jpg", "badarghippie.jpg", "badas.jpg", "badfactman.jpg", "badluckbrian.jpg", "badspider.jpg", "banderas.jpg", "bane.jpg", "barneystinson.jpg", "barneywin.jpg", "batman.jpg", "batmanslap.jpg", "beargrills.jpg", "beyonce.jpg"]; 
    var memeGrid = document.getElementById("memeGrid");
        while (memeGrid.firstChild) {
        memeGrid.removeChild(memeGrid.firstChild);
    }
    var k=i;
    for(k=i;k<f;k++)
    {
    var currentString = strings[k];
    if(currentString == undefined){
        k=f;
        break;
    }
    var link = document.createElement("a");
    link.href = "memeedit.html?meme="+currentString;
    link.alt = currentString;

    var img = document.createElement("img");
    img.src = "./img/"+currentString;
    img.id = "gridpicture";
    link.appendChild(img);
    memeGrid.appendChild(link);

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
                    alert('AndroidFlurry Success!');
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
