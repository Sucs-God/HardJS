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

// console.log('Start')
//
// console.log('Start 2')
//
// function timeout2sec() {
//     console.log('timeout2sec')
// }
//
// window.setTimeout(function () {
//     console.log('Inside timeout, after 2 seconds')
// }, 5000)

// window.setTimeout(timeout2sec, 2000)// Если будет setTimeout 0, то вывод функции будет
// после обработки синхронных команд
// После того как команда отдаётся на выполнение сторонним api и после получения ответа на этот запрос,
// функция передаётся в очередь - event loop(цикл событий), и как только стек освобождается, JS проходится
// по очереди и помещает функцию из очереди в стек

// console.log('End')

// 5 Promise

// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })
//
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//
// })
//     .then(clientData => {
//         clientData.fromPromise = true
//         return clientData
//     })
//     .then(data => {
//         console.log('Modified', data)
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('All promises')
//     })

// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('Race promises')
//     })

// 6 Flexible configuration of objects
// Цикл for не сможет итерировать эти поля
// const person = Object.create({
//     calculateAge() {
//         console.log('Age: ', new Date().getFullYear() - this.birthYear)
//     }
// }, {
//     name: {
//         value: 'Vladilen',
//         enumerable: true, // цикл for видит это поле
//         writable: true, // этот поле можно изменять
//         configurable: true // это поле можно удалить
//     },
//     birthYear: {
//         value: 1993,
//         enumerable: false,
//         writable: false,
//         configurable: false
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = 'red'
//             console.log('Set age', value)
//         }
//     }
// })

// А в этом примере цикл for отработает как обычно
// const person = {
//     name: 'Vladilen',
//     birthYear: 1993
// }

// person.name = 'Maxim'

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {// Эта проверка сделана для того,
//         console.log('Key', key, person[key])// что цикл 'for in' не итерировал прототип
//     }
// }

// 7 ES6 Classes

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {
//
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice() {
//         console.log('I am Animal!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{
//     static type = 'CAT'
//
//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }
//
//     voice() {
//         super.voice()
//         console.log('I am cat')
//     }
//
//     get ageInfo() {
//         return this.age * 7
//     }
//
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }
//
// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide() {
//         this.$el.style.display = 'none'
//     }
//
//     show() {
//         this.$el.style.display = 'block'
//     }
// }
//
// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }
//
//
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })
//
// const box2 = new Box({
//     selector: '#box2',
//     size: 120,
//     color: 'blue'
// })
//
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//
//         this.$el.style.borderRadius = '50%'
//     }
// }
//
// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'green'
// })

// 8 Async, Await. Work with server with fetch

// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

// delay(2000).then(() => console.log('2 sec'))

// const url = 'https://jsonplaceholder.typicode.com/todos/'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return  delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data)
//     })
//     .catch(e => console.error(e))

// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000)
//         const responce = await fetch(url)
//         const data = await responce.json()
//         console.log('Data: ', data)
//     } catch (e) {
//         console.error(e)
//     } finally {
//
//     }
// }

// fetchAsyncTodos()

// 9 Proxy. Object, function, classes.

// Objects
const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log(`Getting prop ${prop}`)
        if (!(prop in target)) {
            return  prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting... ', prop)
        delete target[prop]
        return true
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log('Construct...')

        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                console.log(`Getting prop "${p}"`)
                return target[p]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)