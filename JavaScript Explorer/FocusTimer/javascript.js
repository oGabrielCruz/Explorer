function tema() {
    const elementoFundo = document.getElementById("fundo");
    console.log('WTF é elementoFundo: ', elementoFundo)

    console.log("Olha isso biel 1: ", elementoFundo.style.background)
    if (elementoFundo.style.background == "rgb(0, 0, 0)" || !elementoFundo.style.background){
        elementoFundo.style.background="#ffffff"
    }
    else(
        elementoFundo.style.background= "#000000"
    )
    console.log("Olha isso biel 2: ", elementoFundo.style.background)

}
