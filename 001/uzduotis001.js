// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const a = [...Array(1)].map(_ => rand(0, 4));
const b = [...Array(1)].map(_ => rand(0, 4));
const answer = a > b ? a / b : b / a;
console.log(a);
console.log(b);
console.log(answer);
console.log('-------------------');

// Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.

const c = [...Array(1)].map(_ => rand(0, 25));
const d = [...Array(1)].map(_ => rand(0, 25));
const e = [...Array(1)].map(_ => rand(0, 25));

const f = [];
f.push(c, d, e);
const answer2 = f.sort((a, b) => a - b);
console.log(answer2);
console.log(f[1]);
console.log('-------------------');

// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 

const a1 = [...Array(1)].map(_ => rand(1, 10));
const b1 = [...Array(1)].map(_ => rand(1, 10));
const c1 = [...Array(1)].map(_ => rand(1, 10));

const triangle = a1 + b1 > c1 ? 'galima' : a1 + c1 > b1 ? 'galima' : b1 + c1 > a1 ? 'galima' : 'negalima';
console.log(a1);
console.log(b1);
console.log(c1);
console.log(triangle);
console.log('-------------------');

// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems
//  reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()

const aa = [...Array(1)].map(_ => rand(0, 2));
const bb = [...Array(1)].map(_ => rand(0, 2));
const cc = [...Array(1)].map(_ => rand(0, 2));
const dd = [...Array(1)].map(_ => rand(0, 2));
const empty = [];
empty.push(aa, bb, cc, dd);
console.log(empty);
const zeroes = empty.filter(x => x == 0);
console.log(zeroes);
const ones = empty.filter(x => x == 1);
console.log(ones);
const twoes = empty.filter(x => x == 2);
console.log(twoes);
console.log('Nuliu:', zeroes.length);
console.log('Vienetu:', ones.length);
console.log('Dvejetu:', twoes.length);

console.log('-------------------');

// Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

const numbers = [...Array(3)].map(_ => rand(-10, 10));
console.log(numbers);

const newNumbers = numbers.forEach(x => x < 0 ? console.log(`+${x}+`) : x > 0 ? console.log(`-${x}-`) : x == 0 ? console.log(`*${x}*`) : console.log(x));

console.log('-------------------');

// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

const newArr = [...Array(3)].map(_ => rand(0, 100));
const sum = newArr.reduce((a, b) => a + b);
const avrg = sum / newArr.length;
console.log(newArr);
console.log(avrg);

const filteredArray = newArr.filter(x => x > 10 && x < 90);
console.log(filteredArray);
const filteredSum = filteredArray.reduce((a, b) => a + b);
const filteredAvrg = filteredSum / filteredArray.length;
console.log(filteredAvrg);