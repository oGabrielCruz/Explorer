var sec=0
var min=0
var interval=0

function tema() {
    const elementoFundo = document.getElementById("fundo");
    console.log('WTF é elementoFundo: ', elementoFundo)

    console.log("Olha isso biel 1: ", elementoFundo.style.background)
    if (elementoFundo.style.background == "rgb(0, 0, 0)" || !elementoFundo.style.background){
        elementoFundo.style.background="#ffffff"

        const fundo = document.getElementById("fundo");
        fundo.innerHTML= '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5462 17.425C29.3538 17.2322 29.1125 17.0954 28.8483 17.0293C28.584 16.9633 28.3067 16.9704 28.0462 17.05C26.2264 17.5994 24.2916 17.6449 22.4479 17.1815C20.6043 16.7182 18.9208 15.7635 17.5769 14.4191C16.233 13.0746 15.2789 11.3908 14.8163 9.54699C14.3537 7.70316 14.3999 5.76839 14.95 3.94875C15.0302 3.68812 15.0379 3.41056 14.9722 3.14589C14.9065 2.88123 14.7699 2.63949 14.5771 2.44666C14.3842 2.25384 14.1425 2.11723 13.8778 2.05152C13.6132 1.98581 13.3356 1.9935 13.075 2.07375C10.338 2.91499 7.93609 4.59819 6.21124 6.88375C4.70287 8.88861 3.78303 11.2741 3.55493 13.7727C3.32684 16.2712 3.79952 18.7839 4.91994 21.0287C6.04035 23.2736 7.76416 25.1618 9.89795 26.4815C12.0317 27.8012 14.4911 28.5002 17 28.5C19.9292 28.5086 22.7803 27.5562 25.1162 25.7887C27.4006 24.0622 29.082 21.659 29.9212 18.9212C30.0001 18.6613 30.0069 18.3847 29.9408 18.1212C29.8748 17.8577 29.7384 17.6171 29.5462 17.425ZM23.3112 23.3925C21.2894 24.9146 18.7858 25.6552 16.2612 25.4781C13.7367 25.3009 11.361 24.218 9.57153 22.4285C7.78202 20.6389 6.69904 18.2633 6.5219 15.7388C6.34477 13.2142 7.0854 10.7106 8.60749 8.68875C9.4084 7.62933 10.401 6.72959 11.5337 6.03625C11.5112 6.35625 11.5 6.6775 11.5 7C11.504 10.5792 12.9275 14.0107 15.4584 16.5416C17.9893 19.0724 21.4208 20.496 25 20.5C25.3225 20.5 25.6437 20.4887 25.9637 20.4662C25.2707 21.5992 24.3709 22.5919 23.3112 23.3925Z" fill="#121214"/></svg>'
        
    }
    else {
        elementoFundo.style.background= "#000000"
        // const fundo = document.getElementById("fundo");
        // fundo.innerHTML=
        
    }
    console.log("Olha isso biel 2: ", elementoFundo.style.background)

}


function timerOrStop(){
    min++
    document.getElementById('timer').innerText=doisDigitos(min)+':'+doisDigitos(sec)
    clearInterval(interval)
    min=0
    sec=0
    document.getElementById('timer').innerText='00:00'
}

function startOrPause(){
    console.log(interval)
    if(interval > 0){
        clearInterval(interval)
        interval = 0
        console.log('PARE')
        //Alterando SVG
        const elementPlay = document.getElementById("play");
        elementPlay.innerHTML ='<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 6C26.8577 6 21.8309 7.52487 17.5552 10.3818C13.2795 13.2387 9.94702 17.2994 7.97914 22.0502C6.01127 26.8011 5.49638 32.0288 6.49959 37.0723C7.50281 42.1159 9.97907 46.7486 13.6152 50.3848C17.2514 54.0209 21.8842 56.4972 26.9277 57.5004C31.9712 58.5036 37.1989 57.9887 41.9498 56.0209C46.7007 54.053 50.7613 50.7205 53.6182 46.4448C56.4751 42.1691 58 37.1423 58 32C57.9927 25.1066 55.2511 18.4976 50.3767 13.6233C45.5024 8.74889 38.8934 6.00728 32 6ZM32 54C27.6488 54 23.3953 52.7097 19.7775 50.2923C16.1596 47.8749 13.3398 44.439 11.6747 40.419C10.0095 36.3991 9.57386 31.9756 10.4227 27.708C11.2716 23.4404 13.3669 19.5204 16.4437 16.4437C19.5204 13.3669 23.4404 11.2716 27.708 10.4227C31.9756 9.57385 36.3991 10.0095 40.419 11.6747C44.439 13.3398 47.875 16.1596 50.2923 19.7775C52.7097 23.3953 54 27.6488 54 32C53.9934 37.8327 51.6734 43.4247 47.5491 47.549C43.4247 51.6734 37.8327 53.9934 32 54ZM41.11 30.335L29.11 22.335C28.8087 22.134 28.4585 22.0186 28.0968 22.001C27.735 21.9835 27.3753 22.0645 27.056 22.2355C26.7367 22.4064 26.4699 22.6609 26.2839 22.9716C26.0979 23.2824 25.9998 23.6378 26 24V40C25.9998 40.3622 26.0979 40.7176 26.2839 41.0284C26.4699 41.3391 26.7367 41.5936 27.056 41.7645C27.3753 41.9355 27.735 42.0165 28.0968 41.999C28.4585 41.9814 28.8087 41.866 29.11 41.665L41.11 33.665C41.3843 33.4824 41.6093 33.2349 41.7649 32.9444C41.9205 32.654 42.002 32.3295 42.002 32C42.002 31.6705 41.9205 31.346 41.7649 31.0556C41.6093 30.7651 41.3843 30.5176 41.11 30.335ZM30 36.2625V27.75L36.395 32L30 36.2625Z" fill="#42D3FF"/></svg>';
        
        const elementTimerStop = document.getElementById("timer-stop")
        elementTimerStop.innerHTML='<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 10C27.2533 10 22.6131 11.4076 18.6663 14.0447C14.7195 16.6819 11.6434 20.4302 9.8269 24.8156C8.0104 29.201 7.53512 34.0266 8.46116 38.6822C9.38721 43.3377 11.673 47.6141 15.0294 50.9706C18.3859 54.327 22.6623 56.6128 27.3178 57.5388C31.9734 58.4649 36.799 57.9896 41.1844 56.1731C45.5698 54.3566 49.3181 51.2805 51.9553 47.3337C54.5924 43.3869 56 38.7467 56 34C55.9927 27.637 53.4618 21.5368 48.9625 17.0375C44.4632 12.5382 38.363 10.0073 32 10ZM32 54C28.0444 54 24.1776 52.827 20.8886 50.6294C17.5996 48.4318 15.0362 45.3082 13.5224 41.6537C12.0087 37.9991 11.6126 33.9778 12.3843 30.0982C13.156 26.2186 15.0608 22.6549 17.8579 19.8579C20.6549 17.0608 24.2186 15.156 28.0982 14.3843C31.9778 13.6126 35.9992 14.0087 39.6537 15.5224C43.3082 17.0362 46.4318 19.5996 48.6294 22.8886C50.827 26.1776 52 30.0444 52 34C51.9941 39.3025 49.885 44.3861 46.1356 48.1356C42.3861 51.885 37.3025 53.994 32 54ZM43.415 22.585C43.601 22.7707 43.7485 22.9913 43.8491 23.2341C43.9498 23.4769 44.0016 23.7372 44.0016 24C44.0016 24.2628 43.9498 24.5231 43.8491 24.7659C43.7485 25.0087 43.601 25.2293 43.415 25.415L33.415 35.415C33.2292 35.6008 33.0086 35.7482 32.7658 35.8488C32.523 35.9494 32.2628 36.0011 32 36.0011C31.7372 36.0011 31.477 35.9494 31.2342 35.8488C30.9914 35.7482 30.7708 35.6008 30.585 35.415C30.3992 35.2292 30.2518 35.0086 30.1512 34.7658C30.0507 34.523 29.9989 34.2628 29.9989 34C29.9989 33.7372 30.0507 33.477 30.1512 33.2342C30.2518 32.9914 30.3992 32.7708 30.585 32.585L40.585 22.585C40.7708 22.399 40.9913 22.2515 41.2341 22.1509C41.4769 22.0502 41.7372 21.9984 42 21.9984C42.2628 21.9984 42.5231 22.0502 42.7659 22.1509C43.0087 22.2515 43.2293 22.399 43.415 22.585ZM24 4C24 3.46957 24.2107 2.96086 24.5858 2.58579C24.9609 2.21071 25.4696 2 26 2H38C38.5304 2 39.0392 2.21071 39.4142 2.58579C39.7893 2.96086 40 3.46957 40 4C40 4.53043 39.7893 5.03914 39.4142 5.41421C39.0392 5.78929 38.5304 6 38 6H26C25.4696 6 24.9609 5.78929 24.5858 5.41421C24.2107 5.03914 24 4.53043 24 4Z" fill="#F8FBFC"/></svg>'
    }
    else{
        interval=setInterval(timer,100)
        const play = document.getElementById("play");
        play.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 6C26.8577 6 21.8309 7.52487 17.5552 10.3818C13.2795 13.2387 9.94702 17.2994 7.97914 22.0502C6.01127 26.8011 5.49638 32.0288 6.49959 37.0723C7.50281 42.1159 9.97907 46.7486 13.6152 50.3848C17.2514 54.0209 21.8842 56.4972 26.9277 57.5004C31.9712 58.5036 37.1989 57.9887 41.9498 56.0209C46.7007 54.053 50.7613 50.7205 53.6182 46.4448C56.4751 42.1691 58 37.1423 58 32C57.9927 25.1066 55.2511 18.4976 50.3767 13.6233C45.5024 8.74889 38.8934 6.00728 32 6ZM32 54C27.6488 54 23.3953 52.7097 19.7775 50.2923C16.1596 47.8749 13.3398 44.439 11.6747 40.419C10.0095 36.3991 9.57386 31.9756 10.4227 27.708C11.2716 23.4404 13.3669 19.5204 16.4437 16.4437C19.5204 13.3669 23.4404 11.2716 27.708 10.4227C31.9756 9.57385 36.3991 10.0095 40.419 11.6747C44.439 13.3398 47.875 16.1596 50.2923 19.7775C52.7097 23.3953 54 27.6488 54 32C53.9934 37.8327 51.6734 43.4247 47.5491 47.549C43.4247 51.6734 37.8327 53.9934 32 54ZM28 24V40C28 40.5304 27.7893 41.0391 27.4142 41.4142C27.0392 41.7893 26.5304 42 26 42C25.4696 42 24.9609 41.7893 24.5858 41.4142C24.2107 41.0391 24 40.5304 24 40V24C24 23.4696 24.2107 22.9609 24.5858 22.5858C24.9609 22.2107 25.4696 22 26 22C26.5304 22 27.0392 22.2107 27.4142 22.5858C27.7893 22.9609 28 23.4696 28 24ZM40 24V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0392 41.7893 38.5304 42 38 42C37.4696 42 36.9609 41.7893 36.5858 41.4142C36.2107 41.0391 36 40.5304 36 40V24C36 23.4696 36.2107 22.9609 36.5858 22.5858C36.9609 22.2107 37.4696 22 38 22C38.5304 22 39.0392 22.2107 39.4142 22.5858C39.7893 22.9609 40 23.4696 40 24Z" fill="#42D3FF"/></svg>';
    
        const elementTimerStop = document.getElementById("timer-stop")
        elementTimerStop.innerHTML ='<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 6C26.8577 6 21.8309 7.52487 17.5552 10.3818C13.2795 13.2387 9.94702 17.2994 7.97914 22.0502C6.01127 26.8011 5.49638 32.0288 6.49959 37.0723C7.50281 42.1159 9.97907 46.7486 13.6152 50.3848C17.2514 54.0209 21.8842 56.4972 26.9277 57.5004C31.9712 58.5036 37.1989 57.9887 41.9498 56.0209C46.7007 54.053 50.7613 50.7205 53.6182 46.4448C56.4751 42.1691 58 37.1423 58 32C57.9927 25.1066 55.2511 18.4976 50.3767 13.6233C45.5024 8.74889 38.8934 6.00728 32 6ZM32 54C27.6488 54 23.3953 52.7097 19.7775 50.2923C16.1596 47.8749 13.3398 44.439 11.6747 40.419C10.0095 36.3991 9.57386 31.9756 10.4227 27.708C11.2716 23.4404 13.3669 19.5204 16.4437 16.4437C19.5204 13.3669 23.4404 11.2716 27.708 10.4227C31.9756 9.57385 36.3991 10.0095 40.419 11.6747C44.439 13.3398 47.875 16.1596 50.2923 19.7775C52.7097 23.3953 54 27.6488 54 32C53.9934 37.8327 51.6734 43.4247 47.5491 47.549C43.4247 51.6734 37.8327 53.9934 32 54ZM38 24H26C25.4696 24 24.9609 24.2107 24.5858 24.5858C24.2107 24.9609 24 25.4696 24 26V38C24 38.5304 24.2107 39.0391 24.5858 39.4142C24.9609 39.7893 25.4696 40 26 40H38C38.5304 40 39.0392 39.7893 39.4142 39.4142C39.7893 39.0391 40 38.5304 40 38V26C40 25.4696 39.7893 24.9609 39.4142 24.5858C39.0392 24.2107 38.5304 24 38 24ZM36 36H28V28H36V36Z" fill="#F8FBFC"/></svg>'
    }
    // ver se o timer ta parado ou rodando?
    // iniciar ou parar o timer
    
}
// function parar(){
//     clearInterval(interval)
//     min=0
//     sec=0
//     document.getElementById('timer').innerText='00:00'
// }



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