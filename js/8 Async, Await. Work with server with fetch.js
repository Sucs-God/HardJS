// 8 Async, Await. Work with server with fetch

const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/'

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

async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
    try {
        await delay(2000)
        const responce = await fetch(url)
        const data = await responce.json()
        console.log('Data: ', data)
    } catch (e) {
        console.error(e)
    } finally {

    }
}

fetchAsyncTodos()