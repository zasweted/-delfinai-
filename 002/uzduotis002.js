function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

console.clear();
console.log('------1-UZDUOTIS-------');
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
const masyvas = [...Array(30)].map(_ => rand(5, 25));
console.log(masyvas);
console.log('-----------------------');
console.log('------2-UZDUOTIS-------');
//  Naudodamiesi 1 uždavinio masyvu:
// -a-Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// -b-Raskite didžiausią masyvo reikšmę ir jos indeksą;
// -c-Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// -d-Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
// -e-Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
// -f-Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
// -g-Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// -h-Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10

const daugiauUzDesimt = masyvas.filter(a => {
    if(a > 10) return a;
});
console.log('a) Reiksmiu kiekis didesniu uz 10:', daugiauUzDesimt.length);

const didziausiasMasyve = masyvas.reduce((a, b)=> a > b ? a : b);
console.log('b) Didziausias masyve:', didziausiasMasyve);

const index = masyvas.indexOf(didziausiasMasyve);
console.log('c) Didziausio masyve indexas:', index);

const lyginiaiIndexai =  masyvas.map((a, i) => {
    if(i % 2 == 0) {
        return i
    }
    
}).filter(a => a);
const lyginiuIndexuSuma = lyginiaiIndexai.reduce((a, b)=> a + b);
console.log('d) Lyginiu indexu suma:', lyginiuIndexuSuma);

const naujasMasyvas = masyvas.map((a, b) => {
    return a - b
});
console.log('d) Naujas masyvas(reiksme - indexas):', naujasMasyvas);

const antrasMasyvas = [...Array(10)].map(_ => rand(5, 25));

const sujungtasMasyvas = masyvas.concat(antrasMasyvas);
console.log('e)Masyvas papilditas 10 elementu:', sujungtasMasyvas);

const poriniai = [];
const neporiniai = [];

sujungtasMasyvas.forEach((el, idx) => {
    if (idx % 2 == 0) return poriniai.push(el);
    if (idx % 2 !== 0) return neporiniai.push(el)
});
console.log('f) Poriniai:', poriniai);    
console.log('f) Neporiniai:', neporiniai);    

const pakeistasPirminisMasyvas = masyvas.map((a, i) => {
    if(i % 2 == 0 && a > 15) return 0;
    else return a;
});

console.log('g) Pirmimnio masyvo elementai su poriniais indexais, kurie > 15, pakeisti i 0:', pakeistasPirminisMasyvas);

const maziausiasIndex = [];
masyvas.forEach((a, i)=> {
    if(a > 10){
        maziausiasIndex.push(i);
    }
});

console.log('h) Indexas pirmo elemento kuris > 10 masyve:', maziausiasIndex[0]);

console.log('-----------------------');
console.log('------3-UZDUOTIS-------');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
function kuriamRandomRaide(){
    const raides = 'ABCD';
    const randomRaide = raides[Math.floor(Math.random() * raides.length)];
    return randomRaide;

};

const raidziuMasyvas = [...Array(200)].map(_ => kuriamRandomRaide())
console.log(raidziuMasyvas);