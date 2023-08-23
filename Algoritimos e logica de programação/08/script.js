/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

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

function printPatient(patients){
    alert(`
        Paciente ${patients.name} possui o IMC de 
        ${(patients.weight / ((patients.height / 100)** 2)).toFixed(2)}
    `)
}

for (let patient of patients){
    printPatient(patient)
}