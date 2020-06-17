'use strict';

const collections = document.querySelectorAll('.book'),
elems = document.getElementsByTagName('li'),
adv = document.querySelector('.adv'),
h2 = document.getElementsByTagName('a');


// Восстановить порядок книг.
collections[0].before(collections[1]);
collections[2].before(collections[4]);
collections[2].before(collections[3]);
collections[2].before(collections[5]);
// Замена заднего фона

document.body.style.backgroundImage ='url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

h2[2].firstChild.data ='"Книга 3. this и Прототипы Объектов"';

//Удалить рекламу со страницы

adv.remove();

//Восстановить порядок глав во второй и пятой книге 


// 2 book
elems[15].after(elems[8]);
elems[8].after(elems[11]);
elems[9].after(elems[13]);


//5 book


elems[37].after(elems[45]);
elems[38].after(elems[40]);
elems[39].after(elems[41]);
elems[44].after(elems[42]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let elemClone = elems[55].cloneNode(true);
elemClone.textContent =  'Глава 8: За пределами ES6';

collections[2].append(elemClone);
collections[2].append(elems[56]);
