// Массивы
//----------------------------------------------------------------------------------------------------
// Метод push - добавляет элементы в конец массива
// let arr = ['Петя', 'Вася', 'Гусь'];
// arr.push('Оля');
// console.log(arr);

// arr.push('Дима','Катя');
// console.log(arr);
//----------------------------------------------------------------------------------------------------
// Метод pop - удаляет последний элемент массива.
// let arr = ['Петя','Вася','Гусь'];
// arr.pop();
// console.log(arr);
//----------------------------------------------------------------------------------------------------
// Метод unshift - добавляет элемент в начало массива.
// let arr = ['Петя','Вася','Гусь'];
// arr.unshift('Шмоня');
// console.log(arr);

// arr.unshift('Дима','Катя');
// console.log(arr);
//----------------------------------------------------------------------------------------------------
// Метод shift - удаляет первый элемент массиваю
// let arr = ['Петя','Вася','Гусь'];
// arr.shift();
// console.log(arr);
//----------------------------------------------------------------------------------------------------
// Метод splice - Позволяет добавлять, удалять и заметять элементы.
// Синтаксис arr.splice(index [deleteCount, elem1, ... , elemN])

// // Удаляем элемент
// let arrOne = ['Ваня', 'Иштван', 'Оля'];
// // Начиная с перво позиции (Иштван), удаляем один элемент
// arrOne.splice(1, 1);
// console.log(arrOne);

// // Удаляем элемент и возвращаем его в перемнную
// let arrTwo = ['Ваня', 'Иштван', 'Оля'];
// let removed = arrTwo.splice(1, 1);
// console.log(removed);

// // Заменяем элемент
// let arrThree = ['Ваня', 'Иштван', 'Оля'];
// // Начиная с нулевой позиции (Ваня), заменяем один элемнт
// arrThree.splice(0, 1, 'Коля');
// console.log(arrThree);

// // Добавляем элемент
// let arrFour = ['Ваня', 'Иштван', 'Оля'];
// // Начиная с первой позиции (перед 'Иштван'), добавляем 2 элемента
// arrFour.splice(1, 0, 'Коля', 'Маша');
// console.log(arrFour);

// // Удаляем элемент
// let arrFive = ['Ваня', 'Иштван', 'Оля'];
// // Начиная с последней позиции (Оля), удаляем один элемент
// arrFive.splice(-1, 1);
// console.log(arrFive);
//----------------------------------------------------------------------------------------------------
// Метод slice - создает новый массив, в который копирует часть либо весь массив.
// Синтаксис arr.slice (start, end) не включая end

// // Копируем часть массива
// let arrOne = ['Ваня', 'Иштван', 'Оля'];
// // Начиная с 1й позиции (Иштван), до 2й позиции (Оля) не включая
// let arrTwo = arrOne.slice(1, 2);
// console.log(arrTwo);

// // Начиная с предпоследней позиции (Иштван), до последней (Оля) не включая
// let arrThree = arrOne.slice(-2, -1);
// console.log(arrThree);

// // Копируем весь массив
// let arrFour = arrOne.slice();
// console.log(arrFour);
//----------------------------------------------------------------------------------------------------
// // Метод concat - создает новый массив, в который копирует данные из других массивов
// // и дополнительные значения (в конец массива)
// // Синтаксис arr.concat (arg1, arg2...)
// let arrOne = ['Ваня', 'Иштван', 'Оля'];
// let arrTwo = arrOne.concat('Петя');
// console.log(arrTwo);
//----------------------------------------------------------------------------------------------------
// // Методы indexOf / lastIndexOf и includes - поиск в массиве
// // Синтаксис:
// // arr.indexOf(item, from) - ищет item, начиная с индекса from и возвращает индекс,
// // на котором был найден искомый элементб в противном случае (-1)
// let arr = ['Ваня', 'Иштван', 'Оля'];
// console.log(arr.indexOf('Иштван')); // 1
// console.log(arr.indexOf('Вася')); // -1
// console.log(arr.indexOf('Иштван', 2)); // -1
// // arr.lastIndexOf(ite, from) - то же самое, но ищет справа на лево.

// // arr.includes(item, from) - ищет item, начиная с индекса from и возвращает true, если поиск успешен.
// console.log(arr.includes('Иштван')); // true
// console.log(arr.includes('Вася')); // false
// console.log(arr.includes('Иштван', 2)); // false
//----------------------------------------------------------------------------------------------------
// // Метод filter - ищет все элементы, на которых функция-колбэк вернет true
// // let results = arr.filter(function (item, index, array) {
// // если true - элемент добавляется к результату и перебор продолжается
// // возвращается пустой массив в случае, если ничего не найдено
// //});

// let arr = [
//     { name: 'Вася', age: 36 },
//     { name: 'Коля', age: 18 },
//     { name: 'Оля', age: 'Не скажу'},
// ]
// let result = arr.filter(function (item, index, array) {
//     return item.age >= 18;
// });
// console.log(result);
//----------------------------------------------------------------------------------------------------
// // Метод sort() - сортирует массив на месте, меняя в нем порядок элементов.
// // Сортировка слов
// let arrOne = ['Иштван', 'Ваня', 'Оля'];
// console.log(arrOne.sort());
// // Сортировка чисел
// let arrTwo = [8, 22, 1];
// function compareNumeric(a, b) {
//     console.log(`Сравниваем ${a} и ${b}`);
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//     // ИЛИ
//     return a - b
// }
//     // ИЛИ
// console.log(arrTwo.sort((a, b) => a - b));
//----------------------------------------------------------------------------------------------------
// // Метод map - вызывает функцию для каждого элемента массива и возвращает массив
// // результатов выполнения этой функции.
// let arr = ['Ваня', 'Иштван', 'Оля'];

// let result = arr.map(function(item, index, array) {
//     // возвращается новое значение вместо элемента
//     return item[0];
// });
//     // ИЛИ
// // let result = arr.map(item => item[0]);

// console.log(arr); // ['Ваня', 'Иштван', 'Оля']
// console.log(result); // ['В', 'И', 'О']
//----------------------------------------------------------------------------------------------------
// // Метод split - преобразовывает строку в массив по заданному разделителю.
// let str = 'Ваня, Иштван, Оля';

// let arr = str.split(',');
// console.log(arr); // ['Ваня', 'Иштван ', 'Оля']

// // Можно ограничить кол-во объектов которые попадут в массив
// let arrTwo = str.split(',', 2);
// console.log(arrTwo); // ['Ваня', 'Иштван']
//----------------------------------------------------------------------------------------------------
// // Метод - join преобразовывает массив в строку с заданным разделителем.
// let arr = ['Ваня', 'Иштван', 'Оля']
// let str = arr.join(',');
// console.log(str); // Ваня,Иштван,Оля

// // Получение строки из массива
// let arrTwo = ['Ваня', 'Иштван', 'Оля'];
// console.log(String(arrTwo)); // Ваня,Иштван,Оля
//----------------------------------------------------------------------------------------------------
// // Метод forEach - перебирает элементы, выполняя функцию для каждого элемента массива.
// let arr = ['Ваня', 'Иштван', 'Оля'];

// arr.forEach(function(item, index, array) {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });
// // Стрелочная функция
// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });
//----------------------------------------------------------------------------------------------------
// // Метод reduce - перебирает массив и вычисляет единое значение на основе всего массива.
// let arrOne = [1, 2, 3, 4];
// let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array) {
//     return item + previousValue;
// }, 0);
// console.log(reduceValueOne);
//----------------------------------------------------------------------------------------------------




