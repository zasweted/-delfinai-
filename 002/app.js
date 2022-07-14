console.log('---------FOR-EACH------------');
[1, 5, 77].forEach(a => console.log(a));

console.log('---------------------');

[1, 5, 77].forEach(a =>{
    if(a > 4){
        console.log(a)
    }
});
console.log('---------------------');

[1, 5, 77].forEach((a, i) => console.log(a, i));

console.log('---------------------');

[1, 5, 77].forEach((a, i, t) => console.log(a, i, t));

console.log('---------------------');

[1, 5, 77].forEach((a, i, t) => console.log(t[t.length - i -1])); // reverse array

console.log('---------------------');
console.log('---------MAP------------');

const map = [1, 5, 77].map(a => a);
const map1 = [1, 5, 77].map((a, i) => a * i);
const map2 = [1, 5, 77].map((a, i) => {
    
   return a * i ; // jeigu arrow function eina per kelias eilutes, reikalingas return

});

console.log(map);
console.log(map1);
console.log(map2);

console.log('---------------------');
console.log('---------FILTER------------');

const filter = [1, 5, 77].filter(a => console.log(a));

console.log(filter);