var sec=0
var min=0
function tema() {
    const elementoFundo = document.getElementById("fundo");
    console.log('WTF é elementoFundo: ', elementoFundo)

    console.log("Olha isso biel 1: ", elementoFundo.style.background)
    if (elementoFundo.style.background == "rgb(0, 0, 0)" || !elementoFundo.style.background){
        elementoFundo.style.background="#ffffff"
    }
    else (
        elementoFundo.style.background= "#000000"
    )
    console.log("Olha isso biel 2: ", elementoFundo.style.background)

}


function start(){
    console.log('começo')
    interval=setInterval(timer,100)
    
}
function pause(){
    clearInterval(interval)
}
function parar(){
    clearInterval(interval)
    min=0
    sec=0
    document.getElementById('timer').innerText='00:00'
}



function timer(){
    sec++
    document.getElementById('timer').innerText=doisDigitos(min)+':'+doisDigitos(sec)
    if(sec==60){
        min++
        sec=0
    }
}

function doisDigitos(digito){
    if(digito < 10){
        return('0'+digito)
    }
    else{
        return(digito)
    }

}
