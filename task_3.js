const ul = document.querySelector('#ul');

const nullLi = document.createElement('li');
nullLi.textContent = '0';
nullLi.id = 'null';

const secondLi = document.createElement('li');
secondLi.textContent = '2';
secondLi.id = 'second';

const fourthLi = document.createElement('li');
fourthLi.textContent = '4';
fourthLi.id = 'fourth';

ul.prepend(nullLi);
ul.append(fourthLi);
ul.insertBefore(secondLi, ul.querySelector('#third'));