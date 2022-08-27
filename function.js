// 1 Функции
// Function Declaration можно вызвать как после так и до ее объявления
// function greet(name) {
//     console.log('Привет -', name)
// }

// //Function Expression можно вызвать только после ее объявления, вызов до даст ошибку
// const greet2 = function greet2(name) {
//     console.log('Привет -', name)
// }

// greet('Petuh')
// greet2('Petuh')
//----------------------------------------------------------------------------------------------------
// 2 Анонимные функции
// let counter = 0
// const interval = setInterval (function() {  // setTimeout
//     if(counter === 5){
//     clearInterval(interval)  // clearTimeout
//  } else {
//     console.log(++counter)
//  }
// }, 1000)
//----------------------------------------------------------------------------------------------------
// 3 Стрелочные функции
// function greet(name) {
//     console.log('Привет', name)
// }

// const arrow = (name) => {
//     console.log('Привет', name)
// }

// const arrow2 = name => console.log('Привет', name)
// arrow2('Ruslan')

// const pow2 = num => num ** 2
// console.log(pow2(5))
//----------------------------------------------------------------------------------------------------
// 4 Параметры по умолчанию
// const sum = (a = 20, b = a * 2) => a + b
// console.log(sum(20, 22)) //42
// console.log(sum()) //60

// function sumAll (...all) {
//     let result = 0
//     for (let num of all) {
//         result += num // сумма всех переданных чисел в функцию sumAll
//     }
//     return result
// }

// let res = sumAll (1,2,3,4,5)
// console.log(res)
//----------------------------------------------------------------------------------------------------
//Замыкание
// function createMember (name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }

// const logWithLastName = createMember('Ruslan')
// console.log(logWithLastName(' Ashirov'))
// console.log(logWithLastName(' Kuznecov'))