// 1. Гуглим принцып работы метода .filter()
// 2. нашел идеальное обьяснение которое полностью описывает нашу задачу
// Мы вызываем метод filter() на массиве arr, состоящим из объектов и
// передаём функцию, которая отрабатывает на каждом элементе
// этого массива. Внутри функции мы проверяем, есть ли
// значение text для каждого элемента. Если да, то функция
// отдаёт true.
// В противном случае она отдаст false. Метод filter(),
// работая с финальным массивом, включит в него только элемент,
//  на котором отработала функция и который подошел по всем
//  условиям, выдав true.

// let arr = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'Nadya'];
// let text = 'ya';

function filterNames(arr, text) {
  const result = arr.filter(arr => {
    return arr.length > 5 && arr.includes(text);
  });
  return result;
}

filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'Nadya'], 'ya');
