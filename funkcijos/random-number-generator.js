function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function uniqRandom() {
    const uniqArray = [];
        while (uniqArray.length < 100) {
        const x = rand(100, 999)
        if (uniqArray.indexOf(x) === -1) {
        uniqArray.push(x);
        }
    };
};


