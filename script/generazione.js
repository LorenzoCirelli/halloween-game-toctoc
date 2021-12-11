function carica(){
    ricarica = false;
    caramelle_iniziali = (Math.ceil((Math.random() * (50 - 10) + 10)*1)/1);
    const vett_nomi = ["Blotsburn","Jallour","Patilswain","Platonia","Halay"];
    document.getElementById("citta").innerHTML="Città: "+vett_nomi[(Math.ceil((Math.random() * (4 - 0) + 0)*1)/1)];
    document.getElementById("caramella").innerHTML="Caramelle: "+caramelle_iniziali;
    vett_proprietari = ["sign.Blue","Sign.ra.alberi","Sign.rapanello","sign.forti","sign.ra cespuglio"];
    vett_rischio = ["Bassissimo","Alto","Nullo","Altissimo","Medio"]
    vett_caramelle=[3,25,1,120,20];
    var i = 0;
    vett_proprietari.forEach(e => {
        
        document.getElementById("case").innerHTML+='<div id="item" OnClick="scegli('+i+')"><b>'+e+'</b><apri>></apri></div>';
        i++;
    });
}

function scegli(index){
    document.getElementById("opzioni").classList="allarga";
    document.getElementById("informa").innerHTML="";
    document.getElementById("nome_l").innerHTML=(vett_proprietari[index]);
    document.getElementById("scritta_l").innerHTML="Ricompensa:";
    document.getElementById("caramelle_l").innerHTML=vett_caramelle[index];
    document.getElementById("scrittarisc_l").innerHTML="Rischio:";
    document.getElementById("valore").innerHTML=vett_rischio[index];
    document.getElementById("gbutton").innerHTML='<button onClick="toctoc('+index+')" id="toc">TOC TOC</button>'
    document.getElementById("toc").classList="activated";
}

function toctoc(index){
    var min = 0;
    var max = 0;
    //numero da superare per non perdere caramelle
    var min_of = 0;

    switch (index) {
        case 0:
            max = 125;
            min = 0;
            min_of = 20;
            break;
            case 1:
                max = 200;
                min = 0;
                min_of = 80;
                break;
                case 2:
                    max = 100;
                    min = 0;
                    min_of = -1;
            break;
            case 3:
                max = 100;
                min = 0;
                min_of = 91;
            break;
            case 4:
                max = 100;
                min = 0;
                min_of = 49;
            break;
    }

    var att = document.getElementById("msg");
    var att_notes = document.getElementById("msg_notes");
    var bool_vitt = true;
    var numero_rand = (Math.ceil((Math.random() * (max - min) + min)*1)/1);

    if(numero_rand>min_of){
        caramelle_iniziali += vett_caramelle[index];
        att.innerHTML="EVVIVA!";
        att_notes.innerHTML="Hai guadagnato "+vett_caramelle[index] + " caramella/e!";
    }
    else{
        caramelle_iniziali -= (Math.ceil(vett_caramelle[index]/4));
        att.innerHTML="OH NO!"
        att_notes.innerHTML="Hai perso "+(Math.ceil(vett_caramelle[index]/4)) + " caramella/e!";
    }

    if(caramelle_iniziali<0){
        att.innerHTML="OH NO!"
        att_notes.innerHTML="Se arrivi a meno di 0 caramelle la partita finisce, premi chiudi per avviarne una nuova";
        ricarica = true;
        document.getElementById("caramella").innerHTML="Caramelle: <0"
    }else{

    document.getElementById("caramella").innerHTML="Caramelle: "+caramelle_iniziali;
    }

    document.getElementById("risultato").classList="mostra";

}

function chiudi(){

    if(ricarica){
        location.reload();
    }else{
        document.getElementById("risultato").classList="";
    }

}