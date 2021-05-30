// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }
// 1 Prototype
const person = new Object({
        name: 'Maxim',
        age: 25,
        greet: function () {
            console.log('Greet!')
        }
    }
)

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')