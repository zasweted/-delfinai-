console.clear();
function randString(){
    const raides = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];
    const randomRaide = raides[Math.floor(Math.random() * raides.length)];
    return randomRaide;

};
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//1. Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
// Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite su console.log();

const cats = [...Array(10)].map(_ => rand(2, 12));
const owners = [...Array(10)].map(_ => randString());

console.log('Cats:', cats);
console.log('Owners:', owners);

//2. Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log();

console.log('Katinuku suma:', cats.reduce((a, b)=> a + b));
const catsDivide = [];
cats.forEach(a => {
    if(a % 3 == 0) return catsDivide.push(a);
});
console.log('Katinai kurie dalijasi is 3:', catsDivide.length, catsDivide);
console.log('Suma katinu kurie dalijasi is 3:', catsDivide.reduce((a, b)=> a + b));

//3. Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;
owners.unshift('Nausėda')
console.log(owners);

//4. Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats), naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'), o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();

let i1 = 1;
let i0 = 0;
let catOwners = [...Array(10)].map(_ => `${owners[i1++]} has ${cats[i0++]} cats`);
console.log(catOwners);

//5. Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().
const x = owners.filter(a => {
    if(a >) return a;
});
console.log(x);

