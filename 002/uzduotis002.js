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


console.log('b) Didziausio masyve indexas:', masyvas.indexOf(didziausiasMasyve));

const lyginiaiIndexai =  masyvas.map((_, i) => {
    if(i % 2 == 0) {
        return i
    }
    
}).filter(a => a);
//console.log(masyvas.filter((_, i) => i % 2 === 0).reeduce((a, b) => a + b));
const lyginiuIndexuSuma = lyginiaiIndexai.reduce((a, b)=> a + b);
console.log('c) Lyginiu indexu suma:', lyginiuIndexuSuma);

const naujasMasyvas = masyvas.map((a, b) => a - b);
console.log('d) Naujas masyvas(reiksme - indexas):', naujasMasyvas);

const antrasMasyvas = [...Array(10)].map(_ => rand(5, 25));
//masyvas.push(...[...Array(10)].map(_ => rand(5, 25)));
const sujungtasMasyvas = masyvas.concat(antrasMasyvas);
console.log('e)Masyvas papilditas 10 elementu:', sujungtasMasyvas);

const poriniai = [];
const neporiniai = [];

sujungtasMasyvas.forEach((a, i) => {
    if (i % 2 == 0) return poriniai.push(a);
    if (i % 2 !== 0) return neporiniai.push(a)
});
// const [a, b] = [masyvas.filter((_, i) => i % 2 === 0),masyvas.filter((_, i) => i % 2 !== 0)];
console.log('f) Poriniai:', poriniai);    
console.log('f) Neporiniai:', neporiniai);    

const pakeistasPirminisMasyvas = masyvas.map((a, i) => {
    if(i % 2 == 0 && a > 15) return 0;
    else return a;
});

console.log('g) Pirmimnio masyvo elementai su poriniais indexais, kurie > 15, pakeisti i 0:', pakeistasPirminisMasyvas);

let maziausiasIndex = [];
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

const a = [];
const b = [];
const c = [];
const d = [];

raidziuMasyvas.filter(x => {
    if(x == 'A') return a.push(x);
    if(x == 'B') return b.push(x);
    if(x == 'C') return c.push(x);
    if(x == 'D') return d.push(x);
});
console.log('A raidziu kiekis:', a.length);
console.log('B raidziu kiekis:', b.length);
console.log('C raidziu kiekis:', c.length);
console.log('D raidziu kiekis:', d.length);

console.log('-----------------------');
console.log('------4-UZDUOTIS-------');

// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

const array1 = [...Array(200)].map(_ => kuriamRandomRaide());
const array2 = [...Array(200)].map(_ => kuriamRandomRaide());
const array3 = [...Array(200)].map(_ => kuriamRandomRaide());


const array4 = [];
for(let i = 0; i < 200; i++){ 
    array4.push(array1[i] + array2[i] + array3[i]);
};
const array5 = [...array4].sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
});
console.log('Original arr:', array4.length, array4);
console.log('Sorted:', array5.length,  array5);

const arrayz5 = [...new Set(array4)].sort();
console.log('Unikalus:', arrayz5.length, arrayz5);




console.log('-----------------------');
console.log('------5-UZDUOTIS-------');
// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
const unikalusMasyvas1 = [];
while (unikalusMasyvas1.length < 100) {
  const x = rand(100, 999)
  if (unikalusMasyvas1.indexOf(x) === -1) {
    unikalusMasyvas1.push(x);
  }
};
console.log('Ilgis:', unikalusMasyvas1.length);
console.log(unikalusMasyvas1);

const unikalusMasyvas2 = [];
while (unikalusMasyvas2.length < 100) {
    const y = rand(100, 999)
    if (unikalusMasyvas2.indexOf(y) === -1) {
        unikalusMasyvas2.push(y);
    }
};
console.log('Ilgis:', unikalusMasyvas2.length);
console.log(unikalusMasyvas2);

console.log('-----------------------');
console.log('------6-UZDUOTIS-------');

//6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.

const uniqArr1 = unikalusMasyvas1.sort((a, b) => a - b); //sort nebutinas
const uniqArr2 = unikalusMasyvas2.sort((a, b) => a - b);
console.log(uniqArr1);
console.log(uniqArr2);

const newUniqArr = uniqArr1.filter(a => uniqArr2.indexOf(a) === -1); // kodel taip veikia??
console.log('Naujas masyvas:', newUniqArr.length, newUniqArr);

console.log('-----------------------');
console.log('------7-UZDUOTIS-------');

//7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.

const newUniqArr2 = uniqArr1.filter(a => uniqArr2.indexOf(a) !== -1); // kodel taip veikia??
console.log('Naujas masyvas:', newUniqArr2.length, newUniqArr2);

console.log('-----------------------');
console.log('------8-UZDUOTIS-------');

// 8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
unikalusMasyvas1[101]='fjjf'
console.log(unikalusMasyvas1)
console.log(unikalusMasyvas2)


console.log('-----------------------');
console.log('------9-UZDUOTIS-------');

//9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

const lastArr = [...Array(2)].map(_ => rand(5, 25));
console.log('Pradiniai 2 skaiciai:', lastArr);

for (let i = 2;i < 10; i++){
   lastArr[i] = lastArr[i - 2] + lastArr[i - 1]; 
};
console.log('Fibonacci sequence:', lastArr);
// 4 uzdotis
// 8 uzdotis