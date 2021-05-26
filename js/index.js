// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }
// 1 Prototype
// const person = new Object({
//         name: 'Maxim',
//         age: 25,
//         greet: function () {
//             console.log('Greet!')
//         }
//     }
// )
//
// Object.prototype.sayHello = function () {
//     console.log('Hello!')
// }
//
// const lena = Object.create(person)
// lena.name = 'Elena'
//
// const str = new String('I am string')

// 2 This
function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
// person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

/// ================ More about prototypes using an example

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(20))