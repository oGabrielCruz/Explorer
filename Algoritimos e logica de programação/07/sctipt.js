/*
    Crie uma lista de pacientes

    Cada paciende dentro da lista, deverá conter
    nome
    idade
    peso
    altura

*/

const patients = [
    {
        name: "Biel",
        age: 17,
        weight:70,
        height: 180,
    },
    {
        name: "Heloisa",
        age: 25,
        weight:80,
        height: 160,
    },
    {
        name: "Mateus",
        age: 31,
        weight:95,
        height: 190,
    }
]


let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []


// for (let i = 0; i < patients.length; i++) {
    // os dois fazem a mesma coisa
    // patientsNames[i] = patients[i].name
    // patientsNames.push(patients[i].name)
// }


for(let pacienteDaMinhaLista of patients) {
    patientsNames.push(pacienteDaMinhaLista.name)

}
for(let pacienteDaMinhaLista of patients){
    patientsAge.push(pacienteDaMinhaLista.age)
}
for(let pacienteDaMinhaLista of patients){
    patientsHeight.push(pacienteDaMinhaLista.weight)
}
for(let pacienteDaMinhaLista of patients){
    patientsWeight.push(pacienteDaMinhaLista.height)
}

alert("Nome " + patientsNames)
alert("Idade " + patientsAge)
alert("Peso " + patientsHeight)
alert("Altura " + patientsWeight)