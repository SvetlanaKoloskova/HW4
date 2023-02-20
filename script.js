//Задание 1

for (let counter = 1; counter <=2; counter++) {
    console.log('Привет');
}

let counter = 1;

while (counter <=2) {
    console.log('Привет');
    counter++;
}

let counter = 1;

do {
    console.log('Привет');
    counter++;
} while (counter <=2);

//Задание 2

for (let i = 1; i < 6; i++){
    console.log(i);
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//Задание 3

for (let i = 7; i <= 22; i++){
    console.log(i);
}

let i = 7;

do {
    console.log(i);
    i++;
} while (i < 23);

let i = 7;

while (i <= 22) {
    console.log(i);
    i++;
}

//Задание 4

let obj = {
    'Коля' : 200,
    'Вася' : 300,
    'Петя' : 400
};

for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}

//Задание 5

let i = 0;
let n = 1000;

for (n; n > 50; i++) {
    n /= 2;
}
console.log(n);
console.log(i);

let n = 1000;
let i = 0;

while (n > 50) {
    n /= 2;
    i++;
}
console.log(n);
console.log(i);

//Задание 6

let firstFriday = 3;

for (firstFriday; firstFriday <= 31; firstFriday += 7) {
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
}