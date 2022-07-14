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