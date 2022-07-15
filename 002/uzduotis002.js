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
console.log('d) Naujas masyvas:', naujasMasyvas);

const papildytasMasyvas = 


