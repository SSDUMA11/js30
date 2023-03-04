const body = document.querySelector('body');
let link = document.createElement('a');
link.id = 'link';
link.href = "https://dom.spec.whatwg.org/";
console.log(link);

body.prepend(link);

let title = document.querySelector('h1');

link.prepend(title);