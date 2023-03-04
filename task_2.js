// console.log(document.querySelectorAll('a[href*="site.ua/ua/"]'));
const links = document.querySelectorAll('a[href*="/ua/"]');
console.log(links);
for (const item of links){
    console.log(item);
}
