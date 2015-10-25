/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



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
       
        var strings = ["1990.jpg", "advicedog.jpg", "advicegod.jpg", "advicemall.jpg", "agentsmith.jpg", "aliens.jpg", "angryarnold.jpg", "angrybaby.jpg", "angrydumbledore.jpg", "angryschool.jpg", "angrywalter.jpg", "aniston.jpg", "antijokechicken.jpg", "anxietycat.jpg", "aoe.jpg", "apathydog.jpg", "aristocat.jpg", "arjona.jpg", "artowl.jpg", "ash.jpg", "asianfather.jpg", "attractiveconv.jpg", "aviatordog.jpg", "awesome.jpg", "awesomeawkward.jpg", "awesometeacher.jpg", "awkwardsocial.jpg", "babygodfather.jpg", "babylove.jpg", "backinmyday.jpg", "badadvice.jpg", "badarghippie.jpg", "badfactman.jpg", "badluckbrian.jpg", "badspider.jpg", "banderas.jpg", "bane.jpg", "barneystinson.jpg", "batman.jpg", "batmanslap.jpg", "beargrills.jpg", "beyonce.jpg", "bicho.jpg", "bieber.jpg", "billgates.jpg", "billmurray.jpg", "billoreily.jpg", "bob.jpg", "bolillo.jpg", "bonet.jpg", "bonobolife.jpg", "borat.jpg", "boromir.jpg", "boxxy.jpg", "bozzo.jpg", "brucelee.jpg", "brucew.jpg", "brujeria.jpg", "businesscat.jpg", "butthurtdweller.jpg", "cala.jpg", "calabaza.jpg", "calle13.jpg", "casocerrado.jpg", "challenge.jpg", "chavez.jpg", "chavo8.jpg", "chemdog.jpg", "chemistrycat.jpg", "chente.jpg", "chickenspider.jpg", "chihuahua.jpg", "chilllemur.jpg", "chinesekid.jpg", "christina.jpg", "chronicillness.jpg", "chubbygirl.jpg", "chucknorris.jpg", "clooney.jpg", "collegefreshman.jpg", "confessionbear.jpg", "confessionkid.jpg", "confucious.jpg", "correction.jpg", "couch.jpg", "crazywolf.jpg", "creeper.jpg", "cristiano.jpg", "crosseyedgoku.jpg", "cryingparker.jpg", "cucho.jpg", "dareyou.jpg", "daria.jpg", "datass.jpg", "dayaanna.jpg", "deniro.jpg", "depressedcat.jpg", "dinkleberg.jpg", "disastergirl.jpg", "docbrown.jpg", "donramon.jpg", "drevil.jpg", "drivegranma.jpg", "drunkbaby.jpg", "drunkmom.jpg", "dwight.jpg", "ecce.jpg", "einstein.jpg", "einstein2.jpg", "emodaddy.jpg", "escobar2.jpg", "evilkid.jpg", "eviltodler.jpg", "facepalm.jpg", "falcao.jpg", "fernandez.jpg", "finallyover.jpg", "findyou.jpg", "florinda.jpg", "focalizate.jpg", "foreveralone.jpg", "foreverxmas.jpg", "foulbachelorfrog.jpg", "fpsnoob.jpg", "friendzone.jpg", "frog.jpg", "futuramafry.jpg", "gamerkid.jpg", "gandalf.jpg", "gangam.jpg", "gangam3.jpg", "gatosh.jpg", "genetics.jpg", "ginger.jpg", "gollum.jpg", "goodguygreg.jpg", "grammarnazi.jpg", "grandmainternet.jpg", "grisales.jpg", "gta.jpg", "harypotter.jpg", "hayek.jpg", "headhache.jpg", "hefner.jpg", "herculeshades.jpg", "heresjohny.jpg", "hideyokids.jpg", "hilton.jpg", "hipsterariel.jpg", "homer.jpg", "homo.jpg", "homophobic.jpg", "house.jpg", "howard.jpg", "impusibru.jpg", "insanitywolf.jpg", "interesting.jpg", "ivanramiro.jpg", "jayz.jpg", "jealousgirl.jpg", "jessyk.jpg", "jesus.jpg", "jmsantos.jpg", "johnysins.jpg", "jokerrainbow.jpg", "josephducreux.jpg", "juangabriel.jpg", "kaepernick.jpg", "kaepernick.png", "karatekyle.jpg", "keanu.jpg", "keepcalm.jpg", "kimyongun.jpg", "lalinde.jpg", "lapiedra.jpg", "laughingmen.jpg", "lazycollegesenior.jpg", "leavebalone.jpg", "lindsay.jpg", "lionking.jpg", "lloron.jpg", "lossmind.jpg", "luckylarry.jpg", "maduro.jpg", "maladvice.jpg", "marimar.jpg", "mark.jpg", "matias.jpg", "mecatie.jpg", "messi.jpg", "metalhead.jpg", "mexicano.jpg", "middleclassmilf.jpg", "miley.jpg", "minecraft.jpg", "monos.jpg", "montana.jpg", "morpheus.jpg", "mourinho.jpg", "nati.jpg", "neo.jpg", "nerasloma.jpg", "nerdgirl.jpg", "noexiste.jpg", "nomedigas.jpg", "notbad.jpg", "notime.jpg", "notimpressed.jpg", "oaboyfriend.jpg", "obama.jpg", "obamaphone.jpg", "obamarie.jpg", "okayguy.jpg", "omsk.jpg", "onedir.jpg", "oprah.jpg", "overeducated.jpg", "overlyattachedgirlfriend.jpg", "padre.jpg", "papercat.jpg", "paranoidparrot.jpg", "parker.jpg", "patricksays.jpg", "pauld.jpg", "pedobear.jpg", "pekerman.jpg", "penanieto.jpg", "pepe.jpg", "philosoraptor.jpg", "photogenic.jpg", "piedad.jpg", "pitbull.jpg", "policiatestigo.jpg", "pony.jpg", "problems.jpg", "professoroak.jpg", "programmer.jpg", "provincial.jpg", "pulp.jpg", "putin.jpg", "queen.jpg", "quevedo.jpg", "racistdog.jpg", "ragefu.jpg", "ramos.jpg", "rapistedward.jpg", "rastateacher.jpg", "redditorswife.jpg", "redneck.jpg", "regret.jpg", "riano.jpg", "richraven.jpg", "sadcat.jpg", "sadkeanu.jpg", "sadtrooper.jpg", "sammy.jpg", "sasha.jpg", "scumbagbrain.jpg", "scumbaggirl.jpg", "scumbagobama.jpg", "seagal.jpg", "sexadvice.jpg", "shanaynay.jpg", "shaq.jpg", "skeptical.jpg", "skrillex.jpg", "slenderman.jpg", "slowpoke.jpg", "snoopdog.jpg", "sociallyawkwardpenguin.jpg", "southpark.jpg", "sparrow.jpg", "sparta.jpg", "sparta2.jpg", "stonerdog.jpg", "stonerstanley.jpg", "successfulblack.jpg", "successkid.jpg", "sunnystudent.jpg", "surprisekoala.jpg", "tabla.jpg", "takemymoney.jpg", "tebow.jpg", "tesla.jpg", "thicke.jpg", "thirdworld.jpg", "thumb.jpg", "timberlake.jpg", "toystory.jpg", "trap.jpg", "trolgirl.jpg", "trollface.jpg", "turista.jpg", "tyler.jpg", "uribe.jpg", "vendetta.jpg", "vengeancedad.jpg", "vergara.jpg", "vindiesel.jpg", "wachiturro.jpg", "weirdface.jpg", "whispering.jpg", "why.jpg", "whyfuck.jpg", "willsmith.jpg", "willywonka.jpg", "wolowitz.jpg", "women.jpg", "yaomin.jpg", "yaowonka.jpg", "yoda.jpg", "yodawg.jpg", "yuno.jpg", "zarco.jpg", "zepequeno.jpg"];
        for(k=0;k<strings.length;k++)
        {
        var currentString = strings[k]
        var link = document.createElement("a");
        link.href = "memeedit.html?meme="+currentString;
        link.alt = currentString;

        var img = document.createElement("img");
        img.src = "./img/"+currentString;
        img.id = "gridpicture";
        link.appendChild(img);
        document.body.appendChild(link); 
        }

   


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
