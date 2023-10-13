const btn = document.querySelector('button');
const inputEl = document.getElementById('data');

const stampa = document.getElementById('stampa');

const resultEl = document.querySelector('.alert');

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

btn.addEventListener('click', function () {
    //inputEl.
    let array = [];
    let arrLen = parseInt(inputEl.value);
    let stamp = parseInt(stampa.value);
    if (!isNaN(stamp) && !isNaN(arrLen) && arrLen > stamp) {

        for (i = 0; i < arrLen; i++) {
            array.push(randInt(1, 100));
        }
        let string = ''
        for (let i = 0; i < stamp; i++) {
            string = string + " " + array[arrLen - 1 - i];
        }
        resultEl.classList.add('bg-success');

        resultEl.innerHTML = string;

    } else {
        resultEl.classList.add('bg-danger');
        resultEl.innerHTML = `qualcosa è andato storto`;
    }




    resultEl.classList.remove('d-none');
});

// 9 minuti 6 secondi