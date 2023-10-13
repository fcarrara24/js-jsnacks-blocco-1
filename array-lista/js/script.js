const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');


btn.addEventListener('click', function () {
    //lista 
    const frigo = [
        'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
    ];
    //inputEl.
    let pesca = 'pesca';
    stampa(frigo);

    //aggiunta della pesca
    frigo.push(pesca);
    stampa(frigo);


    //cerca cocomero 
    let found = false;
    for (let i = 0; i < frigo.length; i++) {
        if (frigo[i] === 'cocomero') {
            found = true;
        }
    }
    let msg = '';
    if (found) {
        resultEl.classList.remove('bg-danger')
        resultEl.classList.add('bg-success')

        msg = 'Trovato! Devo solo preparare il cocktail';
    } else {
        resultEl.classList.remove('bg-success')
        resultEl.classList.add('bg-danger')

        msg = 'Oh no, devo uscire a comprare il cocomero!';
    }

    //stampo
    resultEl.classList.remove('d-none');
    resultEl.innerHTML = msg;
});

function stampa(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

// 11 minuti 27 secondi