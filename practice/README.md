# Microtasks

## Микротаски Рекурсия

Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.

```js
// 5! = 1 * 2 * 3 * 4 * 5 = 120
```

## Стрелочные функции. rest && spread operators

Создайте функцию, **которая принимает неограниченное количество входящих данных**, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.

Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию.

Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

## Минитаска. Методы примитивов

Напишите следующие функции:

- Функция которая принимает строку и возвращает количество слов в ней.
- Функция, которая получает строку и возвращает размер самого большого слова в ней

## Минитаска Функции-конструкторы+прототипы

Создать функцию-конструктор User\
у пользователей должны быть свойства:

- *`firstName`*
- *`lastName`*
- *`email`*
- *`age`*
- *`isLoggedIn`*

Создать прототип для обїектов пользователей
в прототипе реализовать следующий методы:

- *`getFullName`* - метод, который вернет строчку, содержащую имя и фамилию пользователя
- *`logout`* - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
- *`login`* - метод, который имитирует логин пользователя, меняя переменную isLoggedIn

## JS Arrays methods practice

### Задачи на работу с массивами в JavaScript

#### Работа с concat

Для решения задач данного блока вам понадобятся следующие методы: [concat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

1\. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

#### Работа с reverse

Для решения задач данного блока вам понадобятся следующие методы: [reverse](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).

2\. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

#### Работа с push, unshift

Для решения задач данного блока вам понадобятся следующие методы: [push](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [unshift](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift).

3\.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.\
4\.  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

#### Работа с shift, pop

Для решения задач данного блока вам понадобятся следующие методы: [shift](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [pop](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop).

5\.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.\
6\.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его.

#### Работа с slice

Для решения задач данного блока вам понадобятся следующие методы: [slice](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

7\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].\
8\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

#### Работа с splice

Для решения задач данного блока вам понадобятся следующие методы: [splice](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

9\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].\
10\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].\
11\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].\
12\.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

#### Работа с sort

Для решения задач данного блока вам понадобятся следующие методы: [sort](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

13\.  Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.

#### Работа с forEach

Для решения задач данного блока вам понадобятся следующие методы: [forEach](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

14\. Дан массив со следующими объектами внутри:

```js
{firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
```

Для каждого элемента выведите сообщение в консоль типа "Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет"

#### Работа с map

Для решения задач данного блока вам понадобятся следующие методы: [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

15\. Дан массив со следующими объектами внутри:

```js
{firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
```

Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

#### Работа с filter

Для решения задач данного блока вам понадобятся следующие методы: [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

16\. Дан массив со следующими объектами внутри:

```js
{firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',},
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},
{firstName: 'Undefined', lastName: 'Undefinovich', age: 99},
{firstName: 'Null', lastName: 'Nullovich', gender: 'male'}                                
```

Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.

#### Работа с flat

Для решения задач данного блока вам понадобятся следующие методы: [flat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

17\. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]].\
Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
