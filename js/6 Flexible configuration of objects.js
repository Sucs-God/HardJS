// 6 Flexible configuration of objects
// Цикл for не сможет итерировать эти поля
const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Vladilen',
        enumerable: true, // цикл for видит это поле
        writable: true, // этот поле можно изменять
        configurable: true // это поле можно удалить
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})

// А в этом примере цикл for отработает как обычно
// const person = {
//     name: 'Vladilen',
//     birthYear: 1993
// }

// person.name = 'Maxim'

for (let key in person) {
    if (person.hasOwnProperty(key)) {// Эта проверка сделана для того,
        console.log('Key', key, person[key])// чтобы цикл 'for in' не итерировал прототип
    }
}