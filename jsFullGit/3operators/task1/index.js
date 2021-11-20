/* eslint-disable */

// Унарный плюс приводит операнд к числу
+17; // 17 number
+'77'; // 77 number

// Бинарный плюс складывает строки или прибавляет числа
10 + '5'; // '105' string
'some' + 'text'; // 'sometext' string

// Математические операции с undefined возвращают NaN
undefined + 1; // NaN
null + 8; // 8 number
undefined + '5'; // 'undefined5' string
7 - null; // 7 number
5 - undefined; // NaN
'text' + null; // 'textnull' string

// Постфиксная и префиксная форма записи
let num = 17;
++num; // 18 number =1+17
num++; // 18 number =17+1

// математические операторы приводят операнды к числам
const a = 17; // 17 number
const b = -a; // -17 number
'24' / 4; // 6 number
18 * '3'; // 54 number
'9' - '3'; // 6 number
'seventeen' / 3; // NaN 
4 * 'four'; // NaN
17 / 0; // infinity number

10 + 'seven'; // '10seven' string
undefined + 1; // NaN
null + 8; // 8 number
undefined + '5'; // 'undefined5' string
'text' + null; // 'textnull' string
