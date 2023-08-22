const Piedra = document.getElementById("Piedra")
const Papel = document.getElementById("Papel")
const Tijera = document.getElementById("Tijera")
const Reinico = document.getElementById("reset")
const subtitulo = document.getElementById("subtitulo")
const Score = document.getElementById("Score")
const PiedraPC = document.getElementById("PiedraPC")
const PapelPC = document.getElementById("PapelPC")
const TijeraPC = document.getElementById("TijeraPC")
const ScorePC = document.getElementById("ScorePC")

let seleJugador;
let opcionPC;
let scroreJugador = 0;
let scorePc = 0;



const array = [
    {
        name:"Piedra",
        url: ""
    },
    {
        name:"Papel",
        url: ""
    },
    {
        name:"Tijera",
        url: ""
    }

]


function nAletarorio(){
    let num =  Math.floor(Math.random()*3)
    return num
} 



Reinico.addEventListener("click", function (){
    scorePc = 0;
    scroreJugador= 0;
    Score.innerHTML = scroreJugador;
    ScorePC.innerHTML = scorePc;
    subtitulo.innerHTML = ""
    
})

function seleCompu(){
    let variable = nAletarorio()
    if(variable === 0){
        opcionPC = "Piedra";
    }
    else if (variable === 1){
        opcionPC = "Papel";
    }
    else if (variable === 2){
        opcionPC = "Tijera";
    }

   
    juego();
}


Piedra.addEventListener("click", function(){
    seleJugador = "Piedra";
    seleCompu();
  
})
Papel.addEventListener("click", function(){
    seleJugador = "Papel" ;
    seleCompu() ;
})
Tijera.addEventListener("click", function(){
    seleJugador = "Tijera";
    seleCompu(); 
})

function juego(){
    if (seleJugador === opcionPC){
        subtitulo.innerHTML = "Empate" ;
    }
    else if (seleJugador == "Piedra" && opcionPC == "Tijera"){
        subtitulo.innerHTML = "Ganaste la piedra vence a Tijera" ;
        scroreJugador = scroreJugador + 1;

    }
    else if (seleJugador == "Papel" && opcionPC == "Piedra"){
        subtitulo.innerHTML = "Ganaste el papel vence a  Piedra" ;
        scroreJugador = scroreJugador + 1 ;
    }
    else if (seleJugador == "Tijera" && opcionPC == "Papel"){
        subtitulo.innerHTML = "Ganaste la tijera  vence al  Papel" ;
        scroreJugador = scroreJugador + 1 ;
    }
    else {
        subtitulo.innerHTML = "Perdiste crack" ;
        scorePc = scorePc + 1 ;
    }

    Score.innerHTML = scroreJugador;
    ScorePC.innerHTML = scorePc;

    hooverPC()
    ganador()


}
function ganador(){
    if (scroreJugador== 5 && scorePc== 5){
        subtitulo.innerHTML = "Empate definitivo"
        scorePc = 0;
        scroreJugador= 0;

    }
    else if (scroreJugador == 5 && scorePc < 5){
        subtitulo.innerHTML = "Ganaste la partida bien jugado"
        scorePc = 0;
        scroreJugador= 0;

    }
    else if (scroreJugador < 5 && scorePc == 5){
        subtitulo.innerHTML = "Perdiste de manera escandalosa que verguenza :("
        scorePc = 0;
        scroreJugador= 0;

    }
}

function hooverPC (){
    if(opcionPC == "Piedra"){
        PiedraPC.style.transform = "scale(1.2)"
        setTimeout(() => {
            PiedraPC.style.transform = "scale(1)"; 
          }, 2000);
    }
    else if (opcionPC == "Tijera"){
        TijeraPC.style.transform = "scale(1.2)"
        setTimeout(() => {
            TijeraPC.style.transform = "scale(1)"; 
          }, 2000);
    }
    else if (opcionPC == "Papel"){
        PapelPC.style.transform = "scale(1.2)"
        setTimeout(() => {
            PapelPC.style.transform = "scale(1)"; 
          }, 2000);
    }

}
