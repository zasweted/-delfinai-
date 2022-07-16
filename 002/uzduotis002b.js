console.clear();
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function kuriamKorteles(){
    const raides = ['MasterCard Visa', 'Visa'];
    const randomRaide = raides[Math.floor(Math.random() * raides.length)];
    return randomRaide;

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

console.log('-----------------------');
console.log('------7-UZDUOTIS-------');
//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log('Originali pinigine:', pinigine.length, pinigine);
const newArrLength = 30 - pinigine.length;
const pinigine2 = [...Array(newArrLength)].map(_ => rand(0, 10));
console.log('Nauja pinigine:', pinigine2.length, pinigine2);
pinigine2.forEach(a => pinigine.push(a));
console.log('Papildita pinigine:', pinigine.length, pinigine);


console.log('-----------------------');
console.log('------8-UZDUOTIS-------');
//8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

const monetos =[];
const kupiuros = [];
pinigine.forEach(a => {
    if(a <= 2) return monetos.push(a);
    if(a > 2) return kupiuros.push(a);
});
console.log('Kupiuros:', kupiuros.length, kupiuros);
console.log('Monetos:', monetos.length, monetos);

console.log('-----------------------');
console.log('------9-UZDUOTIS-------');
//9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

const pinigineNew = [];
pinigineNew.push(monetos, kupiuros);
console.log(pinigineNew);

console.log('-----------------------');
console.log('------10-UZDUOTIS-------');
//10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačių', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
pinigineNew.push(korteles);
console.log(pinigineNew);


console.log('-----------------------');
console.log('------11-UZDUOTIS-------');

//11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
pinigineNew[2].sort((a, b) =>{
    if(a > b) return 1;
    if(a < b) return -1;
} );
console.log('Korteles surusiotos pagal abecele:', pinigineNew[2]);

console.log('-----------------------');
console.log('------12-UZDUOTIS-------');
//12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

const korteliuKiekis = 20 - pinigineNew[2].length;
console.log(korteliuKiekis);
const naujosKorteles = [...Array(korteliuKiekis)].map(_ => kuriamKorteles());
console.log(naujosKorteles);