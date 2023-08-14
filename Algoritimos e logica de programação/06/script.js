/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:
    
    Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    
    --- 
    O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem: 
        "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
let opc;
let item= []
let index=0;
while(opc != 3 ){
    opc = Number(prompt(`
        1- Cadastre um item novo
        2- Ver os items cadastrados
        3- Sair

        Olá usuário! Digite o número da opção desejada: 
    `
)
    )

    if(opc == 1){
        item[index] = prompt("Cadastre um item: ")
        index++
    }

    else if(opc == 2){
        if(item.length == 0){
            alert("Você não colocou nenhuma informação")
        }
        else (alert(item + " está na lista"))
    }
    }