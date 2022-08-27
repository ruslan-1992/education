// let i = (num) => {
//     let j = num ** 2;
//     console.log(j);
// }
// i(5);

// setInterval(() => {
//     let div = document.createElement('div');
//     div.setAttribute('class', 'element');
//     let newDiv = document.getElementsByClassName('element');
//     let body = document.querySelector('body');
//     body.appendChild(div);
//     div.innerHTML = 'govna kusok';
// }, 2000);

// function printNumbers (from, to) {
//     let current = from;
    
//     let timerId = setInterval(() => {
//         console.log(current);
//         if(current == to) {
//             clearInterval(timerId);
//         }
//         current++
//     }, 1000);
// }

// printNumbers(5, 10);

// let elemId = document.getElementById('my-first-elem');
// console.log(elemId);

// let elemClass = document.querySelectorAll('.container');
// console.log(elemClass);

// let elemFirst = document.getElementsByClassName('wrapper')[0];
// console.log(elemFirst);

// let elemOneTwo = document.getElementsByClassName('element');
// let arr = Array.from(elemOneTwo);
// let arr2 = arr.slice(0, 2);
// console.log(arr2);

// let cont = document.querySelector('.container');
// cont.classList.remove('container');
// cont.classList.add('newcont');
// console.log(cont);

// let p = document.createElement('p');
// p.classList.add('text');
// p.innerHTML = 'Это всего лишь текст';
// console.log(p)
// let body = document.querySelector('body');
// body.append(p);
// let div = document.createElement('div');
// div.classList.add('alert');
// div.innerHTML = 'А это сообщение об ошибке';
// div.style.color = 'white';
// div.style.backgroundColor = 'red';
// div.style.padding = '20px' ;
// p.append(div);

// let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
// "Sergey", "Ivan", "Alan"];

// let nameList = document.createElement('ol');
// document.body.append(nameList);

// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = arr[i];
//     nameList.append(li);
    
//     if(i % 2 === 1) {
//         li.classList.add('even');
//         li.style.backgroundColor = 'green';
//     } else {
//         li.classList.add('odd');
//         li.style.backgroundColor = 'blue';
//     }
// }

// let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
//     "Sergey", "Ivan", "Alan"
// ];

// const nameList = document.createElement("ol");
// document.body.append(nameList);
// // arr.forEach(function (name) {
// for (let i = 0; i < arr.length; i++) {
//     let eachName = document.createElement("li");
//     eachName.innerText = arr[i];
//     // eachName.innerText = name;
//     nameList.append(eachName);

//     if (i % 2 == 1) {
//         eachName.setAttribute("class", "even");
//         eachName.style.backgroundColor = "green";
//     } else {
//         eachName.setAttribute("class", "odd");
//         eachName.style.backgroundColor = "blue";
//     }

//     for (j = 0; j < arr[i].length; j++) {
//         if (arr[i].toLowerCase().indexOf(arr[i][j]) !== arr[i].toLowerCase().lastIndexOf(arr[i][j])) {
//             eachName.style.color = "white";
//         }
//     }
// }

// let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
// "Sergey", "Ivan", "Alan"];

// let ol = document.createElement('ol');
// document.body.append(ol);

// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = arr[i];
//     ol.append(li);
    
//     if(i % 2 !== 0) {
//         li.classList.add('even');
//         li.style.backgroundColor = 'green';
//         li.style.textAlign = 'center';
//     } else {
//         li.classList.add('odd');
//         li.style.backgroundColor = 'blue';
//         li.style.textAlign = 'center';
//     }

//     for (let q = 0; q < arr[i].length; q++) {
//         if(arr[i].toLowerCase().indexOf(arr[i][q]) !== arr[i].toLowerCase().lastIndexOf(arr[i][q])) {
//             li.style.color = 'white';
//             li.style.textAlign = 'center';
//         }
//    }
// }

// let showMassage = (message, color, top, left) => {
//     let divMessage = document.createElement('div');
//     divMessage.classList.add('message');
//     console.log(divMessage)
//     document.body.append(divMessage);
//     divMessage.innerText = message;
//     divMessage.style.backgroundColor = color;
//     divMessage.style.marginTop = top + 'px';
//     divMessage.style.marginLeft = left + 'px';
//     divMessage.style.textAlign = 'center';  
// }

// Создать 2 кнопки, открыть и закрыть. При нажатии на кнопку открыть, появляется список,
// принажатии на кнопку закрыть, закрывается.
let list = document.querySelector('.list');

const showList = () => {
    list.classList.remove('list');
}

const closeList = () => {
    list.classList.add('list'); 
}

document.querySelector('.btn-s').addEventListener('click', showList);
document.querySelector('.btn-x').addEventListener('click', closeList);

// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить
// на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько
// угодно раз. При нажатии кнопки удалить - удаляется последний добавленный
// элемент.
let add = document.querySelector('.add');

const textAdd = () => {
    let div = document.createElement('div');
    div.classList = 'class';
    div.innerHTML = 'какой-то текст';
    add.appendChild(div);
}

const delText = () => {
    add.lastChild.remove();
}

document.getElementById('del').addEventListener('click', delText);
document.getElementById('ad').addEventListener('click', textAdd);

// Реализовать функцию drawFigure, которая принимает в качестве аргументов:
// название геометрической фигуры, цвет заливки, положение от верхнего края
// страницы (css свойство top), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если
// прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши,
// например круг - Q, квадрат - W и тд

let addFigure = document.querySelector('.figure');

const drawFigure = (figure, color, top, radius, side, width, height) => {
    if(figure === 'CIRCLE') {
        let addCircle = document.createElement('div');
        addCircle.innerHTML = figure;
        addCircle.style.backgroundColor = color;
        addCircle.style.marginTop = top;
        addCircle.style.borderRadius = radius;
        addCircle.style.width = side;
        addCircle.style.height = side;
        addFigure.append(addCircle);
    } else if(figure === 'SQUARE') {
        let addSquare = document.createElement('div');
        addSquare.innerHTML = figure;
        addSquare.style.backgroundColor = color;
        addSquare.style.marginTop = top;
        addSquare.style.width = side;
        addSquare.style.height = side;
        addSquare.style.color = 'white';
        addFigure.append(addSquare);
    } else if(figure === 'RECTANGLE') {
        let addRactangle = document.createElement('div');
        addRactangle.innerHTML = figure;
        addRactangle.style.backgroundColor = color;
        addRactangle.style.marginTop = top;
        addRactangle.style.width = width;
        addRactangle.style.height = height;
        addRactangle.style.color = 'red';
        addFigure.append(addRactangle);
    }
}

document.addEventListener('keydown', function() {
    if(event.code == 'KeyQ') {
        return drawFigure('CIRCLE', 'red', '100px', '50%', '200px');
    } else if (event.code == 'KeyE') {
        return drawFigure('SQUARE', 'blue', '100px', '0px', '200px');
    } else if (event.code == 'KeyR') {
        return drawFigure('RECTANGLE', 'yellow', '100px', '0px', '0px', '400px', '200px');
    } 
});

