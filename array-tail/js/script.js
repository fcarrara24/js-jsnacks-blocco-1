const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

btn.addEventListener('click', function () {
    //inputEl.
    numberprint = parseInt(inputEl.value);
    let numExtract;
    let print = '';
    if (!isNaN(numberprint)) {

        for (let i = 0; i < numberprint; i++) {
            numExtract = randInt(0, 100);
            print = print + " " + String(numExtract);
        }
    } else {
        for (let i = 0; i < 5; i++) {
            numExtract = randInt(0, 100);
            print = print + " " + String(numExtract);
        }
    }
    resultEl.innerHTML = print;



    resultEl.classList.remove('d-none');
});

// 9 minuti 6 secondi