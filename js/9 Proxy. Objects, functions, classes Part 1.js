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
                .split('_')// Разделяет слова друг от друга, если находит указанные символ
                .map(p => target[p])// Возвращает значение данных полей итерируя по объекту
                .join(' ')// Соединяет эти значение в одну строку через пробел
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