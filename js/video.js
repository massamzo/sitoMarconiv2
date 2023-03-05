document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("index-banner").click();
    document.getElementById("index-banner").click();
    animateVideo();
    mouseOv();
    mouseL();
    disp();

    document.getElementById("index-banner").click();

    document.getElementById("mainer").addEventListener("click", function(){
        if(turned == false){
            turned = true;
            document.getElementById("mainer").style.filter = "blur(0px)";
            var ds = document.getElementById("contBox");
            ds.style.opacity = "0";
            ds.style.visibility = "hidden";
            document.getElementById("canc").style.opacity = "0";
            document.getElementById("canc").style.visibility = "hidden";

            // stop the vide3o

            document.getElementById("fullVideo").pause();

        }else{
            turned = false;
        }

      
    });

    document.getElementById("canc").addEventListener("click", function(){
        document.getElementById("mainer").click();
    });

    

});

var turned = false;

var texts = {
    "Bottiglia di leida": " La bottiglia di Leida è la forma più antica di condensatore, scoperta per caso dal professore di fisica Van Musschenbroek dell’università di Leida.<br> Fu utilizzata per condurre i primi esperimenti sull’elettricità.<br> Per costruirla servono un contenitore di vetro rivestito, sia internamente che esternamente, da sottili strati metallici.<br> Il rivestimento interno è collegato ad un conduttore (cavo, catena…) grazie al quale può ricevere impulsi elettrici caricandosi positivamente.<br> Il rivestimento esterno viene collegato a terra in modo tale che i protoni si scarichino e restino solo gli elettroni. ",
    "Rocchetto di ruhmkroff":"Il Rocchetto di Ruhmkorff è un dispositivo elettronico inventato nel 1851 dallo scienziato tedesco Heinrich Dannecker. È stato progettato per produrre una scintilla elettrica a intervalli regolari, che può essere utilizzata per accendere il gas in un lampadario o per scopi scientifici.<br> Il Rocchetto di Ruhmkorff è stato uno dei primi dispositivi a utilizzare una bobina di solenoide per generare un campo magnetico, che viene poi utilizzato per produrre la scintilla elettrica.<br> Il dispositivo è composto da una bobina di solenoide, una bottiglia di Leyden, un interruttore e una candela.<br> La bobina di solenoide è avvolta attorno a un cilindro di ferro e viene alimentata da una batteria.<br> Quando l'interruttore viene chiuso, la corrente elettrica fluisce attraverso la bobina, creando un campo magnetico.<br> La bottiglia di Leyden, che è una specie di condensatore, immagazzina l'energia elettrica generata dal campo magnetico. Quando l'interruttore viene aperto, l'energia viene rilasciata in una scintilla elettrica, che può essere utilizzata per accendere la candela.<br> Il Rocchetto di Ruhmkorff è stato utilizzato per molti scopi diversi nel corso degli anni.<br> È stato utilizzato per illuminare le sale da concerto, per eseguire esperimenti scientifici e per produrre scintille elettriche per spettacoli di luce. Tuttavia, è stato presto sostituito da altri dispositivi più efficienti e sicuri.<br> Oggi, il Rocchetto di Ruhmkorff è principalmente utilizzato come esempio storico dei primi sviluppi nella tecnologia elettronica.",
    "Trasmettitore": "Il telegrafo è uno strumento che tramite la corrente elettrica e il codice morse, un alfabeto binario che viene identificato da punti e linee, permette la comunicazione a distanza.<br> Il telegrafo è costituito da un apparato trasmittente che invia segnali elettrici di breve durata (punto) e lunga durata (linea) ad un apparato ricevente.<br> L'apparecchio trasmittente è alimentato con corrente continua ed è composto da un manipolatore elettromeccanico in grado di aprire e chiudere un circuito elettrico che invia i segnali sulla linea telegrafica.<br> Per la ricezione di questi impulsi si ha una elettrocalamita che al passaggio di corrente attira una leva che sbatte su un rotolo di carta che scorrendo trascrive il messaggio con punti e linee che poi verrà tradotto da un telegrafista.<br> Successivamente grazie a Marconi i segnali vengono trasmessi con le onde radio, potendo comunicare senza l’obbligo di una rete cablata quindi permettendo anche le comunicazioni tra navi.",
    "Oscillatore di Hertz":"L’oscillatore di Hertz, è uno strumento capace di produrre oscillazioni molto rapide.<br> È formato da due aste metalliche in posizione orizzontale, le quali terminano da un lato con due sferette separate da un breve spazio regolabile mentre dall'altro lato terminano con delle lastre metalliche essenziali per creare la capacità dello strumento.<br> Caricate le piastre mediante un rocchetto di Ruhmkorff, ad ogni interruzione del circuito primario, si crea tra esse una tensione sufficiente a produrre una scarica oscillatoria tra le due sferette. le successive interruzioni generano treni d’onda più o meno intervallati.<br> Per rivelare le onde hertziane si usa il risonatore, uno strumento a forma di spira, che, se posto nel campo elettromagnetico e opportunamente orientato, genera una scintilla.<br> L'Oscillatore di Hertz è stato utilizzato per molti scopi diversi nel corso degli anni.<br> È stato utilizzato per la prima volta per dimostrare l'esistenza delle onde elettromagnetiche, ma è stato presto sostituito da altri dispositivi più efficienti e sicuri.<br> Oggi, l'Oscillatore di Hertz è principalmente utilizzato come esempio storico dei primi sviluppi nella tecnologia radio.",
    "Forma delle onde radio" : "Le onde radio o radioonde, in fisica, sono radiazioni elettromagnetiche, appartenenti allo spettro elettromagnetico, nella frequenza compresa tra 0 e 300 GHz, ossia con lunghezza d'onda maggiore di 1 mm.<br> Possiamo rappresentare il tutto tramite un'onda sinusoidale, ovvero la curva rappresentata dal grafico del seno.<br> Le sinusoidi hanno seguenti caratteristiche che la definiscono : <br><li>L’ampiezza, è la massima vibrazione dalla sua posizione di equilibrio.<br><li>La lunghezza d'onda, è la distanza minima tra due punti che sono in fase.<br><li>La frequenza, è il numero di complete oscillazioni fatte in un secondo.<br><li>Il periodo, è il tempo relativo ad una oscillazione completa.<br></li>",
    "Tubetto di calzecchi onesti":"Temistocle Calzecchi Onesti è stato un fisico, inventore e insegnante italiano.<br> A lui si deve la costruzione del coesore (1884) ossia un rivelatore di radioonde a limatura metallica che consente di rilevare il passaggio di una radiofrequenza e permette anche l'individuazione di onde elettromagnetiche.<br> Il coesore è formato da una polvere metallica, inserita tra due cilindri, che costituisce l'elemento rivelatore.<br> Questa polvere metallica posta in posizione caotica e casuale, in assenza del segnale a radio frequenza presenta un'alta resistenza elettrica.<br> Con il segnale radio la polvere si dispone in collegamento tra i due cilindri, i granuli si orientano tutti secondo le linee di forza del campo magnetico generato dal passaggio della infinitesima corrente elettrica e la resistenza del dispositivo diminuisce considerevolmente.<br> Ma la polvere rimane polarizzata.<br> Per ovviare all'inconveniente il dispositivo è completato con un sistema elettromeccanico che colpisce leggermente il contenitore per disorientare nuovamente i granuli della polvere metallica.<br> Il coesore fu quindi utile per poter rivelare i segnali Morse che per la loro relativa lentezza permettevano nei tempi morti di ri-disorientare la limatura metallica.",
    "Ricevitore":"Un ricevitore è un dispositivo che riceve segnali e li elabora per uno scopo specifico.<br> Esistono diversi tipi di ricevitori, ciascuno progettato per ricevere ed elaborare tipi specifici di segnali, come ad esempio: I ricevitori televisivi, i ricevitori wireless, i ricevitori GPS.<br> I ricevitori radio sono dispositivi che ricevono e demodulano segnali in radiofrequenza e possono essere trovati in una varietà di dispositivi, tra cui radio, televisori e telefoni cellulari.<br> Il primo ricevitore creato da Guglielmo Marconi fu il ricevitore coherer che sfruttava principalmente il funzionamento del tubetto di Calzecchi Onesti.",
    "Detector Magnetico":"Nel 1902 Marconi realizza il detector magnetico, un rivelatore molto più adatto al nuovo stato delle comunicazioni radio.<br> A questo apparato vengono collegate delle cuffie, grazie alle quali si ascoltano i punti e le linee del messaggio che deve essere trascritto a mano.<br> Nel modello più diffuso ci sono due gruppi di rivelazione distinti, per due diversi radiotelegrafisti: se è necessario, questi possono anche ascoltare contemporaneamente lo stesso messaggio e confrontare quanto ricevuto per maggiore sicurezza.<br> Il detector magnetico rivela il segnale radio in un modo completamente diverso dal coherer.<br> Una treccia di fili di ferro sottili scorre vicino ai poli di due magneti, passando lungo l'asse di due avvolgimenti coassiali.<br> L'avvolgimento più interno è collegato all'antenna e alla terra, l'altro è collegato al ricevitore telefonico.<br> Le onde radio che colpiscono l'antenna provocano nell'avvolgimento interno correnti che modificano bruscamente lo stato magnetico della treccia metallica: cosicché nell'avvolgimento più esterno si generano impulsi di corrente percepibili attraverso le cuffie.<br> La treccia metallica viene fatta scorrere da un meccanismo mosso da un motore a molla.",
    "Radio v2a":"Il radioricevitore V2a (conosciuto come marconiphone) è stato prodotto dalla Marconi company in Inghilterra e veniva venduto per 24£ (prezzo altissimo per l'epoca, 24£ dell'epoca equivalgono a 1.<br>126£ di oggi) questa radio funziona attraverso un antenna che viene collegata al circuito ricevitore attraverso una delle 3 porte 'aerial', a seconda della lunghezza dell'antenna e della porta a cui viene collegata la capacità di quest'ultima cambierà e conseguentemente anche le frequenze d'onda captate.<br> All'interno del circuito sono presenti 2 valvole: la prima funge da amplificatore dei segnali RF mentre la seconda fa da rilevatore di perdite di rete.<br> Questa radiofrequenza viene sintonizzata attraverso l'unità rigenerativa e successivamente viene convertito in segnali audio.",
    "Radio Galena (Tipologia Ricevitore)":"La radio galena è un tipo di ricevitore che si è sviluppato contemporaneamente alle radio 'ufficiali'.<br> Questo tipo di ricevitore è stato creato da persone comuni perché comprare una radio era troppo costoso: una radio poteva costare quanto un appartamento in più ogni componente era tassato (per cui in caso di rottura sarebbe stato estremamente oneroso aggiustarla) ed erano necessarie le batterie.<br> Infatti la particolarità più importante di questo ricevitore è che non necessita l'utilizzo di batterie perché la corrente di cui ha bisogno la ricava dalle onde radio.<br> Il funzionamento di questo ricevitore è piuttosto semplice: le onde radio colpiscono l'antenna e creano una corrente elettrica che va dall'antenna fino alla messa a terra, per captare una stazione particolare si usa un sintonizzatore formato da un circuito risonante e infine viene utilizzato un rilevatore per estrarre le informazioni.<br> Come rilevatore viene utilizzato un cristallo di galena (solfuro di Piombo), viene utilizzato questo tipo di cristallo perché ha lo stesso comportamento dei diodi.",
    "Macchina elettrostatica di van de graff":"Robert Van de Graaff,fisico statunitense, nel 1929 ideò lo strumento oggi noto come generatore di Van de Graaff che è un generatore elettrostatico di tensione continua.<br> La macchina è in grado di generare tensioni continue dell’ordine di diverse centinaia di migliaia di Volt.<br> I modelli più grandi raggiungono alcuni milioni di Volt.<br> Esso è composto da: <li>Un conduttore cavo a superficie liscia, sospeso su elementi portanti di materiale isolante<li>Un nastro di materiale isolante, teso tra la base della macchina e interno del conduttore cavo che forma la testa della macchina</li><li>Un insieme di punte metalliche poste alla base del nastro isolante</li><li>Un meccanismo (nel nostro caso un motore elettrico) che pone in movimento il nastro</li><li>Un insieme di punte poste all’interno del conduttore di testa</li><li>Un corpo conduttore esterno per la scarica del sistema</li>",
    "Macchina elettrostatica di wimshurst":"La macchina elettrostatica di Wimshurst è stata ideata dall’ingegnere inglese James Wimshurst ed è in grado di produrre una elevata differenza di potenziale che può raggiungere alcune migliaia di volt.<br> L’apparecchio è costituito da due dischi uguali di plexiglass, posti in verticale ad una distanza relativamente piccola.<br> Questi dischi ruotano intorno ad uno stesso asse orizzontale, ma in senso opposto, grazie ad un sistema di cinghie e pulegge azionate da una manovella, posta di lato alla base della macchina.<br> Durante la rotazione contrapposta dei dischi, una carica, inizialmente presente su un settore, passando in corrispondenza del settore che sull’altro disco è in contatto con la spazzola, induce su questo una carica di segno opposto e una carica di ugual segno sul settore in contatto con l’altra spazzola sostenuta dal medesimo supporto.<br> I due settori così caricati lasciano le spazzole e portano le rispettive cariche in prossimità delle punte, dove esse vengono trasferite alle armature interne dei due condensatori che quindi si caricano di segno opposto; con queste si caricano le sferette dello spinterometro e quando la d.<br>d.<br>p.<br> è sufficientemente elevata scocca una scintilla in aria."
}

var srcs = {
    "Bottiglia di leida": "./videos/Video1_bottiglia_di_leida.mp4",
    "Rocchetto di ruhmkroff":"./videos/Video2_rocchetto_di_ruhmkorff.mp4.mp4",
    "Trasmettitore": "./videos/Video3_trasmettitore.mp4",
    "Oscillatore di Hertz":"./videos/Video4_oscillatore_di_Hertz.mp4",
    "Forma delle onde radio" : "./videos/Video5_forma_delle_onde_radio.mp4",
    "Tubetto di calzecchi onesti":"./videos/Video6_tubetto_di_calzecchi_Onesti.mp4",
    "Ricevitore":"./videos/Video7_ricevitore.mp4",
    "Detector Magnetico":"./videos/Video8_detector_magnetico.mp4",
    "Radio v2a":"./videos/Video9_radio_v2a.mp4",
    "Radio Galena (Tipologia Ricevitore)":"./videos/Video9_radio_v2a.mp4",
    "Macchina elettrostatica di van de graff":"./videos/Video10_radio_galena.mp4",
    "Macchina elettrostatica di wimshurst":"./videos/Video12_mecchina_elettrostatica_di_wimshurst.mp4"
}


function devide(){
    var text = "Le onde radio o radioonde, in fisica, sono radiazioni elettromagnetiche, appartenenti allo spettro elettromagnetico, nella frequenza compresa tra 0 e 300 GHz, ossia con lunghezza d'onda maggiore di 1 mm. Possiamo rappresentare il tutto tramite un'onda sinusoidale, ovvero la curva rappresentata dal grafico del seno. Le sinusoidi hanno seguenti caratteristiche che la definiscono : <br><li>L’ampiezza, è la massima vibrazione dalla sua posizione di equilibrio.<li>La lunghezza d'onda, è la distanza minima tra due punti che sono in fase.<li>La frequenza, è il numero di complete oscillazioni fatte in un secondo.<li>Il periodo, è il tempo relativo ad una oscillazione completa.</li>";
    var spl = text.split('');
    var str = ""
    for(i=0; i < spl.length; i++){
        str += spl[i];
        if(spl[i] == '.'){
            str += "<br>";
        }
    }

    console.log(str);
}



function animateVideo(){

    const clip = document.querySelectorAll(".hover-to-play");
  for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
    }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); }
  
  
}


function videoView(){
    var video_cont = document.getElementsByClassName("video-cont");
    for(i=0; i < video_cont.length; i++){
        video_cont[i].addEventListener("click", function(e){

            contFiller(e);
        });
    }
}


function mouseOv(){
    var divs = document.getElementsByClassName("video_cont");
    for(i=0; i < divs.length; i++){
        divs[i].addEventListener("mouseenter", function(e){
            var txt = e.target.getElementsByTagName("div")[1].textContent;
            for(j=0; j < divs.length; j++){
                if(divs[j].getElementsByTagName("div")[1].textContent != txt){
                    divs[j].style.filter = "blur(5px)";
                }
            }
        });

        divs[i].addEventListener("mouseleave", function(){
            for(j=0; j < divs.length; j++){
                divs[j].style.filter = "blur(0px)";
            }
        });
    }
}

function normalize(){
    alert("Ss");
   
            
           
}

function mouseL(){
    var divs = document.getElementsByClassName("video_cont");
    for(i=0; i < divs.length; i++){
        divs[i].addEventListener("mouseleave", function(e){
            
           e.target.style.filter = "blur(0px)";
        });
    }
}


function disp(){

    var divs = document.getElementsByClassName("video_cont");
    for(i=0; i < divs.length; i++){
        divs[i].addEventListener("click", function(ae){
            var title = ae.target.offsetParent.getElementsByTagName("div")[1].textContent;
            var p = texts[title];
            var src = srcs[title];

            fillup(title, p, src)
        });
    }
}

function fillup(title, p, src){
    var div = document.getElementById("contBox");
    var Vdiv = document.createElement("div");
    Vdiv.setAttribute("id", "contBox");

    var video = document.createElement("video");
    video.setAttribute("src", src);
    video.setAttribute("autoplay","");
    video.setAttribute("controls","");
    video.setAttribute("id", "fullVideo");

    Vdiv.appendChild(video);

    var d2 = document.createElement("div");
    d2.setAttribute("id", "vid_desc");

    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(title));

    var pa = document.createElement("p");
    pa.innerHTML = p;

    d2.appendChild(h2);
    d2.appendChild(pa);

    Vdiv.appendChild(d2);

    div.parentNode.replaceChild(Vdiv, div);



    document.getElementById("mainer").style.filter = "blur(80px)";
    var ds = document.getElementById("contBox");
    
    ds.style.visibility = "visible";
    ds.style.opacity = "1";
    document.getElementById("canc").style.visibility = "visible";
    document.getElementById("canc").style.opacity = "1";
    turned = true;
    
}


