// 10 Proxy. Objects, functions, classes Part 2 Example

// Wrapper
const withDefaultValue = (targer, defaultValue = 0) => {
    return new Proxy(targer, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
        x: 24,
        y: 42
    },
    0)

// console.log(position)

// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Vladilen',
    age: 25,
    _uid: '1231231'
})

// Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [argArray], newTarget) {
        const index = {}
        argArray.forEach(item => index[item.id] = item)

        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                switch (p) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            target[p].call(target, item)
                        }
                    case 'findById': return id => index[id]
                    default:
                        return target[p]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 11, name: 'Vladilen', job: 'Fullstack', age: 25},
    {id: 22, name: 'Elena', job: 'Student', age: 22},
    {id: 33, name: 'Victor', job: 'Backend', age: 23},
    {id: 44, name: 'Vasilisa', job: 'Teacher', age: 24}
])