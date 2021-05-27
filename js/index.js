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

// 2 This additionally
// function hello() {
//     console.log('Hello', this)
// }
//
// const person = {
//     name: 'Vladilen',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
//
// const lena = {
//     name: 'Elena',
//     age: 23
// }

// person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
// person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')
// person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

/// ================ More about prototypes using an example

// const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }
//
// console.log(array.multBy(20))

// 3 Closures

// function createCalcFunction(n) {
//     return function () {
//         console.log(1000* n)
//     }
// }
//
// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(10))
// console.log(addOne(41))
//
// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
//
// console.log(ruUrl('yandex'))
// console.log(ruUrl('vkontakte'))
//
// console.log(comUrl('vkontakte'))

// Practice
/*
    Написать свою функцию bind
    Пример работы:

    function logPerson() {
        console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    }

    const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
    const person2 = {name: 'Елена', age: 19, job: 'SMM'}

    bind(person1, logPerson)
    bind(person2, logPerson)
 */
// function bind(contex, fn) {
//     return function (...args) {
//         fn.call(contex, args)
//     }
// }
//
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Елена', age: 19, job: 'SMM'}
//
// bind(person1, logPerson)()
// bind(person2, logPerson)()

// 4 Asynchrony

console.log('Start')

console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(function () {
    console.log('Inside timeout, after 2 seconds')
}, 5000)

window.setTimeout(timeout2sec, 2000)// Если будет setTimeout 0, то вывод функции будет
// после обработки синхронных команд
// После того как команда отдаётся на выполнение сторонним api и после получения ответа на этот запрос,
// функция передаётся в очередь - event loop(цикл событий), и как только стек освобождается, JS проходится
// по очереди и помещает функцию из очереди в стек

console.log('End')

