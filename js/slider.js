var urla = "";
var au = new Audio("./audio/morse.mp3");
var acca = new Audio("./audio/marc1.aac");

document.addEventListener("DOMContentLoaded",function(){

  urla = document.URL;
 
  var arr = urla.split('/');
  var word = arr[arr.length-1].split('.');
  
  word = word[0];
  var nw = word;
  
  if(word == "index"){
   
    
    
    
  }



  if(word == "storia"){

   
    acca.volume = 0.07;
    acca.play();
    var l =0;
    var x = setInterval(function(){
      l++;
      if(l == 17){
        scrollDownStoria("container-blink");
        clearInterval(x);
      }
      
    }, 10);
   
    
    
  }else if(word == "index"){
    


  }else if(word == "curiosita"){
    var l =0;
    var x = setInterval(function(){
      l++;
      if(l == 17){
        scrollDownStoria("container-blink");
        clearInterval(x);
      }
      
    }, 10);

    contentLoadBySize("leggenda1","Guglielmo Marconi iniziò a fare i primi esperimenti sulle radiocomunicazioni nel 1894 e già nel 1895 ottenne un risultato storico, riuscì a trasmettere un segnale radio oltre la collina dei Celestini.<br> Proprio attorno a questo evento si è creata la leggenda iconica del colpo di fucile.");
  
    textSlider();
  }else if(word == "esperimenti"){
    au.play();
    document.getElementById("mainer").addEventListener("click", function(){valo = 1; au.pause();});
   
   
  }else if(word == "prenota"){
    au.volume = 0.09;
    au.play();
  }

  if(nw == "index"){
    acca.volume = 0.0;
    var aud2 = new Audio("./audio/marc2.aac");
    aud2.volume = 0.03;
    aud2.play();
  }


  animateText();

  adjustText("slide2", "Una leggenda riguardante il giovane Marconi è quella dello scherzo che fece al prete di Pontecchio, tanto che ottenne il nomignolo di “ragazzo dei fulmini”.<br> Si racconta che per mostrare il funzionamento del suo primo ricevitore...");
  adjustText("slide4", "Il panfilo Rovenska nasce in Inghilterra agli inizi del 1900 e viene acquistato da Carlo Stefano d &apos; Austria ma con lo scoppio della prima guerra mondiale viene utilizzato come unità di pattugliamento nella Manica dagli inglesi. <br>Successivamente, nel 1919, Guglielmo Marconi acquista ...");
  adjustText("slide5", " Nel 1937, pochi mesi prima di morire, Marconi fece un intervento al Forum del Chicago Tribune nel quale lasciò alla comunità scientifica quello che è considerato da molti il suo testamento scientifico.<br> Durante il suo intervento spiegò ...");

  
  
  

});

function adjustText(ids, txt){
  var elem = document.getElementById(ids);
  var w = window.innerWidth;
  if(w < 770){
    
    elem.getElementsByTagName("p")[0].innerHTML = txt;
  }
}

function contentLoadBySize(id, txt){
  var width = window.innerWidth;
  if(width < 770){
    document.getElementById(id).innerHTML = txt;
  }
}

function loadMore(topic, text, x){
  if(topic == 'storia' && x.textContent.toLowerCase() == "continua a leggere"){
    document.getElementById(text).innerHTML = "Guglielmo Marconi nasce a Bologna il 25 aprile 1874, e fin da giovane manifesta un grande interesse per lo studio delle radiocomunicazioni.<br> All'età di 20 anni creò un rilevatore di fulmini che utilizzava un coherer per far suonare una campana in caso di fulmini. <br>Nel tempo ha continuato a sviluppare la sua creazione, prima trasmettendo segnali in codice Morse all'interno della sua stanza e poi, con l'aiuto del finanziamento del padre, trasmettendo oltre i colli Celestini a Pontecchio, creando la telegrafia senza fili. <br> Nel 1896 Marconi si trasferì a Londra, dove ottenne il brevetto della sua invenzione e condusse i suoi esperimenti più famosi, tra cui la trasmissione di segnali attraverso l'Atlantico.<br> Le ricerche di Marconi continuarono e la sua invenzione fu utilizzata sulle navi come strumento di comunicazione, salvando migliaia di vite durante l'affondamento del transatlantico 'Repubblica'.<br> Di conseguenza, Marconi è stato insignito del Premio Nobel per la Fisica. <br>Le ricerche di Marconi continuarono fino alla sua morte, avvenuta il 20 luglio 1937, a Roma, a causa di una grave malattia cardiovascolare.<br> Ha lasciato una scoperta che ha rivoluzionato il modo in cui le persone comunicano in tutto il mondo."
    x.innerHTML = "Mostra di meno";
  
  }else if(x.textContent.toLowerCase() == "mostra di meno" && topic == 'storia'){
    document.getElementById(text).innerHTML = "Guglielmo Marconi nasce a Bologna il 25 aprile 1874, e fin da giovane manifesta un grande interesse per lo studio delle radiocomunicazioni.<br> All'età di 20 anni creò un rilevatore di fulmini che utilizzava un coherer per far suonare una campana in caso di fulmini. <br>Nel tempo ha continuato a sviluppare la sua creazione, prima trasmettendo segnali in codice Morse...";
    x.innerHTML = "continua a leggere";
    scrollDownStoria("container-blink");
  }else if(topic == "curiosita" && x.textContent.toLowerCase() == "continua a leggere"){
    document.getElementById(text).innerHTML = "Guglielmo Marconi iniziò a fare i primi esperimenti sulle radiocomunicazioni nel 1894 e già nel 1895 ottenne un risultato storico, riuscì a trasmettere un segnale radio oltre la collina dei Celestini.<br> Proprio attorno a questo evento si è creata la leggenda iconica del colpo di fucile.<br> Si racconta che Marconi avesse mandato il suo fattore (Marchi) a ricevere il messaggio oltre la collina dei Celestini e gli disse di sparare un colpo di fucile solo se avesse ricevuto 3 punti, e così fu.<br> In questo modo Marconi capì che il segnale aveva superato la collina e che i segnali potevano essere trasmessi oltre la “line of sight”.<br> Ma questa rimarrà sempre una leggenda perchè nessuno confermò mai la storia della fucilata e Marconi stesso non non citò mai l’evento in nessun scritto"
    x.innerHTML = "Mostra di meno";
  }else if(x.textContent.toLowerCase() == "mostra di meno" && topic == 'curiosita'){
    document.getElementById(text).innerHTML = "Guglielmo Marconi iniziò a fare i primi esperimenti sulle radiocomunicazioni nel 1894 e già nel 1895 ottenne un risultato storico, riuscì a trasmettere un segnale radio oltre la collina dei Celestini.<br> Proprio attorno a questo evento si è creata la leggenda iconica del colpo di fucile.";
    x.innerHTML = "continua a leggere";
    scrollDownStoria("container-blink");
  }else if(topic == "curiosita2" && x.textContent.toLowerCase() == "continua a leggere"){
    document.getElementById(text).innerHTML = "Una leggenda riguardante il giovane Marconi è quella dello scherzo che fece al prete di Pontecchio, tanto che ottenne il nomignolo di “ragazzo dei fulmini”.<br> Si racconta che per mostrare il funzionamento del suo primo ricevitore coherer ai suoi amici, che non credevano alle sue parole, decise di organizzare uno scherzo al prete.<br> Una domenica durante la messa entrò di nascosto nella camera da letto del parroco e nascose il ricevitore collegato ad un campanello sotto al letto.<br> Nel pomeriggio incontrò i suoi amici ai quali spiegò il funzionamento dello scherzo e li convinse ad appostarsi durante la notte, fuori dalla casa del reverendo.<br> Così Marconi iniziò ad inviare dei segnali radio e inevitabilmente il campanello iniziò a suonare, spaventando a morte il povero prete che si fiondò per strada correndo deriso dai compagni di Guglielmo.";
    x.innerHTML = "Mostra di meno";
  }else if(x.textContent.toLowerCase() == "mostra di meno" && topic == 'curiosita2'){
    document.getElementById(text).innerHTML = "Una leggenda riguardante il giovane Marconi è quella dello scherzo che fece al prete di Pontecchio, tanto che ottenne il nomignolo di “ragazzo dei fulmini”.<br> Si racconta che per mostrare il funzionamento del suo primo ricevitore...";
    x.innerHTML = "continua a leggere";
    scrollDownStoria("container-blink");
  }else if(topic == "curiosita3" && x.textContent.toLowerCase() == "continua a leggere"){
    document.getElementById(text).innerHTML = "Una leggenda riguardante il giovane Marconi è quella dello scherzo che fece al prete di Pontecchio, tanto che ottenne il nomignolo di “ragazzo dei fulmini”.<br> Si racconta che per mostrare il funzionamento del suo primo ricevitore coherer ai suoi amici, che non credevano alle sue parole, decise di organizzare uno scherzo al prete.<br> Una domenica durante la messa entrò di nascosto nella camera da letto del parroco e nascose il ricevitore collegato ad un campanello sotto al letto.<br> Nel pomeriggio incontrò i suoi amici ai quali spiegò il funzionamento dello scherzo e li convinse ad appostarsi durante la notte, fuori dalla casa del reverendo.<br> Così Marconi iniziò ad inviare dei segnali radio e inevitabilmente il campanello iniziò a suonare, spaventando a morte il povero prete che si fiondò per strada correndo deriso dai compagni di Guglielmo.";
    x.innerHTML = "Mostra di meno";
  }else if(x.textContent.toLowerCase() == "mostra di meno" && topic == 'curiosita3'){
    document.getElementById(text).innerHTML = "Il panfilo Rovenska nasce in Inghilterra agli inizi del 1900 e viene acquistato da Carlo Stefano d &apos; Austria ma con lo scoppio della prima guerra mondiale viene utilizzato come unità di pattugliamento nella Manica dagli inglesi. <br>Successivamente, nel 1919, Guglielmo Marconi acquista ...";
    x.innerHTML = "continua a leggere";
    scrollDownStoria("container-blink");
  }else if(topic == "curiosita4" && x.textContent.toLowerCase() == "continua a leggere"){
    document.getElementById(text).innerHTML = "Nel 1937, pochi mesi prima di morire, Marconi fece un intervento al Forum del Chicago Tribune nel quale lasciò alla comunità scientifica quello che è considerato da molti il suo testamento scientifico.<br> Durante il suo intervento spiegò qual è il limite principale della radiodiffusione dell’epoca ovvero il fatto che erano unidirezionali: una persona trasmetteva mentre le altre ascoltavano.<br> Ciò che auspicava Marconi era uno scambio di comunicazioni bidirezionale, indipendentemente da dove si trovassero i corrispondenti, Questa idea andava già ad anticipare la creazione dei cellulari avvenuta solo nel 1973.<br> Oltre a questo Marconi sottolineava che la radio è uno strumento per far sentire la voce, le necessità e le aspirazioni di tutti i popoli ed essere quindi strumento di unione.";
    x.innerHTML = "Mostra di meno";
  }else if(x.textContent.toLowerCase() == "mostra di meno" && topic == 'curiosita4'){
    document.getElementById(text).innerHTML = "Nel 1937, pochi mesi prima di morire, Marconi fece un intervento al Forum del Chicago Tribune nel quale lasciò alla comunità scientifica quello che è considerato da molti il suo testamento scientifico.<br> Durante il suo intervento spiegò ...";
    x.innerHTML = "continua a leggere";
    scrollDownStoria("container-blink");
  }
}


function textSlider(){

  var buttons = document.getElementsByClassName("blinker");
  var wi = document.getElementById("slider_curiosita").clientWidth;
  var currentTab= 1;
  for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
      var id = e.target.offsetParent.id;
      var tag = parseInt(id.split("-")[1]);
      

      var diff = tag-currentTab;

      

      document.getElementById("slider_curiosita").scrollLeft += wi*diff;
      currentTab = tag;

      

    });
  }
  
  

}





function animateText(){


  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("showss");
      }else{
        entry.target.classList.remove("showss");
      }
    });
  });


  const elem = document.querySelectorAll(".hidenmas");
  elem.forEach((el)=>{
    observer.observe(el);
  });
}

function scrollDownStoria(id){
  var elem = document.getElementById(id);

  elem.scrollIntoView({behavior: "smooth", inline: "start"});

}

var margin = 0;
var width = 0;

function slideDown(){
 var element =   document.getElementById("collina");
 element.scrollIntoView({behavior: "smooth"});
}

function slideDown2(){
  var element =   document.getElementById("container-blink");
  element.scrollIntoView({behavior: "smooth"});
 }

function slideAnimation(){

  var images = ["./images/Museo.jpeg", "./images/esperimenti.jpg"];
  var curr_img = 0;
  var s1 = document.getElementById("slider");
  var s2 = document.getElementById("slider2");
  var turn = 1;

  

  var animation = setInterval(function(){
    if(curr_img > images.length){
      curr_img = 0;
    }

    // create secon one
    if(turn == 1){
      turn = 0;

      var div = document.createElement("div");
      div.setAttribute("id", "slider");

      var img = document.createElement("img");
      img.setAttribute("src", images[curr_img]);
      img.style.width = "0";

      s1.parentNode.replaceChild(div, s1);

      var newSlider = document.getElementById("slider");
      var newImg = newSlider.getElementsByTagName("img")[0];
      newImg.style.width = "0";
      newImg.style.marginLeft = "0";
    }else{

      turn = 1;

      var div = document.createElement("div");
      div.setAttribute("id", "slider2");

      var img = document.createElement("img");
      img.setAttribute("src", images[curr_img]);

      s1.parentNode.replaceChild(div, s2);
      var newSlider = document.getElementById("slider2");
      var newImg = newSlider.getElementsByTagName("img")[0];
      newImg.style.width = "0";
      newImg.style.marginLeft = "0";

    }

    curr_img++;

    var anim = setInterval(function(){

      var newSlider2 = document.getElementById("slider2");
      var newImg2 = newSlider.getElementsByTagName("img")[0];

      var newSlider = document.getElementById("slider");
      var newImg = newSlider.getElementsByTagName("img")[0];

      

      newSlider.style.marginLeft = margin+"%";
      newSlider2.style.width = margin+"%";
      margin++;
      if(margin == 100){
        margin=0;
        clearInterval(anim);
      }


    }, 900);
    

  }, 5000);


}

var actual = 0;

var x = 45;

function animateBtn(btn){


}

var x2 = 0;
function removeAnimation(btn){

 

}