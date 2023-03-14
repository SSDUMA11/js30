const ul = document.querySelector('#ul');

const nullLi = document.createElement('li');
nullLi.textContent = '0';
nullLi.id = 'null';

const fourthLi = document.createElement('li');
fourthLi.textContent = '4';
fourthLi.id = 'fourth';

ul.prepend(nullLi);
ul.append(fourthLi);
ul.querySelector('#third').insertAdjacentHTML('beforebegin', '<li id="second">2</li>');