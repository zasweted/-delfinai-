console.clear();
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('-----------------------');
console.log('------1-UZDUOTIS-------');
//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

const pinigine = [...Array(rand(10, 30))].map(_ => rand(0, 10));
console.log('Pinigine:', pinigine.length, pinigine);

console.log('-----------------------');
console.log('------2-UZDUOTIS-------');
//2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log('Pinigu esanciu pinigineje suma:', pinigine.reduce((a, b) => a + b));

console.log('-----------------------');
console.log('------3-UZDUOTIS-------');
//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

const pinigaiDidesniUzDu = pinigine.filter(a => {
    if(a > 2) return a;
});
console.log('Pinigu, reiksmiu didesniu uz 2, suma:', pinigaiDidesniUzDu.reduce((a, b) => a + b));


console.log('-----------------------');
console.log('------4-UZDUOTIS-------');
//4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

const moneySpent = pinigine.map(a => {
    if(a <= 2) return 0;
    if(a > 2) return a;
});
console.log(moneySpent);

console.log('-----------------------');
console.log('------5-UZDUOTIS-------');
//5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

const didziausiaReiksme = pinigine.sort((a, b) => b - a);
const ats = [];
const didziausiuReiksmiuKiekis = pinigine.map(a => {
    if(a === didziausiaReiksme[0]) return ats.push(a);
    else return a;
    
});
console.log('Didziausia reiksme:', ats[0]);
console.log('Didziausiu reiksmiu kiekis masyve:', ats.length);

console.log('-----------------------');
console.log('------6-UZDUOTIS-------');
//6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

const moneyAdd = moneySpent.map((a, i) => {
    if(a !== 0) return a;
    if(a === 0) return i;
});
console.log('Nuliai pakeisi i nulio indexa:', moneyAdd);