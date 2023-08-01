/*
    Capture 10 items para compor a lista de um supermercado

    Após capturar os 10 itens, imprima-os, separando por vírgula
*/

let items = [] //array

for (let item = 0; item < 10; item++ ){
    let lista = prompt("Digite o item " + (item + 1))
    items[item] = lista
}
alert(items)