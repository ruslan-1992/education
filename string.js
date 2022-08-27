// String
// const name = 'Ruslan'
// let age = 29
// function getAge () {
//     return age
// }
// // let output = 'Привет, меня зовут '+ name +' и мой возраст ' + age +' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет` // можно использовать тернарный оператор (${name < 30 ? 'да' : 'нет'})
// console.log(output)

// const name = 'Ruslan'
// console.log(name.length)
// console.log(name.toUpperCase()) // приводит строку к верхнему регистру
// console.log(name.toLowerCase()) //приводит строку к нижнему регистру
// console.log(name.charAt(2)) //показывает символ из строки
// console.log(name.indexOf('lan')) // показывает с какого индекса начинается указанный(е) символ строки
// console.log(name.startsWith('Rus')) // показывает начинается ли строка с указанных символов true или false
// console.log(name.endsWith('an')) // показывает заканчивается ли строка указанными символами true или false
// console.log(name.repeat(3)) // метод повторяет строку указанное количество раз

// const string = '    password     '
// console.log(string.trim()) // убирает пробелы с обеих сторон
// console.log(string.trimLeft()) // убирает пробелы слева
// console.log(string.trimRight()) // убирает пробелы справа

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Еще не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}` // данная строка возвращает (Имя: Ruslan, Возраст: 29!)
// }

// const personName = 'Ruslan'
// const personName2 = 'Petushok'
// let personAge = 29
// let personAge2 = -10

// let output = logPerson`Имя: ${personName}, Возраст: ${personAge} лет`
// let output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

// console.log(output)
// console.log(output2)
