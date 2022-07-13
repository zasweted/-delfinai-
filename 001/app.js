
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const arr = [...Array(10)].map(_ => rand(7, 77));
    console.log(arr);
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(n => console.log(n)); // forEach tink tik masyvams
