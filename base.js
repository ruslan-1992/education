'use strict';
// 1 Условные операторы
// let isReady = false;

// if (isReady) {
//     console.log('Готово');
// } else {
//     console.log('Не готово');
// }

//Тернарное выражение (тоже что и условие выше)
// isReady ? console.log('Готово') : console.log('Не готово');
//----------------------------------------------------------------------------------------------------
// 2 Функции
// function calculateAge (year) {
//     return 2022 - year
// }

// // const myAge = calculateAge(1992);
// // console.log(myAge);

// function logInfoAbout (name, year) {
//     const age = calculateAge(year);
//     if (age > 0) {
//         console.log('Меня зовут ' + name + ',мне ' + age + ' лет');
//     } else {
//         console.log('ОАО Петушиные технологии')
//     }
// }
// logInfoAbout('Руслан', 1992);
// logInfoAbout('Петя', 2025);
//----------------------------------------------------------------------------------------------------
// 3 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд'];
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porshe'
// cars[cars.length] = 'Mazda'
// console.log(cars)
//----------------------------------------------------------------------------------------------------
// 4 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд'];

// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }
//----------------------------------------------------------------------------------------------------
// 5 Объекты
// const person = {
//     firstName: 'Ruslan',
//     lastName: 'Ashirov',
//     year: 1992,
//     languages: ['ru', 'by', 'en'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()