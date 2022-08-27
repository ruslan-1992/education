// 1 Number
// const num = 42 //integer
// const float = 42.34 //float
// const pow = 10e3
// console.log(pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53)-1)

// const stringInt = '40'
// const stringFloat = '40.42'

// // Приведение строки к целому числу
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// // Приведение строки к числу с остатком
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat +2)

// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // 0.6 String
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6 Number
//----------------------------------------------------------------------------------------------------
// 2 BigInt
// console.log(90071992547409919999999n - 90071992547409919999n)
// console.log(-90071992547409919999999n)

// console.log(10n -4) // error
// console.log(parseInt(10n) - 4) // 6
// console.log(10n - BigInt(4)) // 6n
// console.log(5n / 2n) // 2n
//----------------------------------------------------------------------------------------------------
// 3 Math
// console.log(Math.E) // константа
// console.log(Math.PI) // константа

// console.log(Math.sqrt(25)) // Math.sqrt (квадратный корень числа)
// console.log(Math.pow(5, 3)) // Math.pow (возведение в степень)
// console.log(Math.abs(-42)) // Math.abs (оставляет число без минуса(негативной части оставляет модуль 42))
// console.log(Math.max(42, 12, 23, 11, 422)) // Math.max (максимальное число)
// console.log(Math.min(42, 12, 23, 11, 422)) //Math.min (минимальное число)
// console.log(Math.floor(4.6)) // Math.floor (округляет дробное число в меньшую сторону)
// console.log(Math.ceil(4.4)) // Math.ceil (округляет дробное число в большую сторону)
// console.log(Math.round(4.7)) // Math.round (округляет дробное число к ближайшему целому)
// console.log(Math.random()) // Math.random (возвращает случайное дробное число меньше 1)

// // (функция возвращает случайное целое число в диапазоне)
// function getRandomBetween (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 420))