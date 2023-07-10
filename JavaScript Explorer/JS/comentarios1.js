//Para fazer comentarios em JavaScript é preciso colocar duas barras no começo da linha
// e se quiser pode usar /*bla bla bla*/ para comentar varias linhas
console.log('bem vindos ao starter')

console.log('Gabriel Cruz')
console.log(1+8)



//object

 const person = {
     name:'Maikão',
     age: 30 ,
     weight: 99.6,
     isAdmin: true
 }

 console.log(`O ${person.name} tem ${person.age} anos e pesa${person.weight} kilos`)




//array

const animals = [
    'Lion',
    'Monkey',
    {
     name : 'cat',
     age  :  15       
    }
]

// como acessar valores no array
console.log(animals.length)
console.log(animals[1])
console.log(animals[2].name)