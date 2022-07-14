console.log('-----1-uzduotis----');
console.log('-------------------');
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

console.log('-----2-uzduotis----');
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

console.log('-----3-uzduotis----');
console.log('-------------------');

// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 

const a1 = [...Array(1)].map(_ => rand(1, 10));
const b1 = [...Array(1)].map(_ => rand(1, 10));
const c1 = [...Array(1)].map(_ => rand(1, 10));

const triangle = a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1 ? 'negalima' : 'galima';
console.log(a1, b1, c1);
console.log(a1);
console.log(b1);
console.log(c1);
console.log(triangle);

console.log('-----4-uzduotis----');
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

console.log('-----5-uzduotis----');
console.log('-------------------');

// Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

const numbers = [...Array(3)].map(_ => rand(-10, 10));
console.log(numbers);

const newNumbers = numbers.forEach(x => x < 0 ? console.log(`+${x}+`) : x > 0 ? console.log(`-${x}-`) : x == 0 ? console.log(`*${x}*`) : console.log(x));

console.log('-----6-uzduotis----');
console.log('-------------------');

// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

const zvakes = [...Array(1)].map(_ => rand(5, 3000));
console.log(zvakes);
const kaina = 1;
const nuolaida3 = (3 / 100) * kaina;
const nuolaida4 = (4 / 100) * kaina;
const summa = zvakes * kaina;
const nuolaida = summa <= 1000 ? 0 : summa > 1000 || summa <= 3000 ? 3 / 100 * summa : 4 / 100 * summa ;
const galutineKaina = summa - nuolaida;
console.log('Perkama:', zvakes, 'zvakiu');
console.log('1 zvakes kaina:', kaina, 'EUR');
console.log('Nuolaida:', nuolaida.toFixed(2), 'EUR');
console.log('Viso moketi:', galutineKaina, 'EUR');

console.log('-----7-uzduotis----');
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

console.log('-------------------');


