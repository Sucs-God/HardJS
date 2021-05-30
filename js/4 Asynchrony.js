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