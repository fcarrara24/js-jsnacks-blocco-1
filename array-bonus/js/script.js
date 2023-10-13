const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');


btn.addEventListener('click', function () {
    //inputEl.
    output1 = '';
    output2 = '';
    let list1 = [
        'a', 'b', 'c', 'd', 'e', 'f'
    ];
    let list2 = [
        '1', '2', '3', '4'
    ];
    if (list1.length > list2.length) {
        for (let i = 0; i < (list1 - list2); i++) {
            list2.add('elemtno');
        }
    } else {
        for (let i = 0; i < (list2 - list1); i++) {
            list1.add('elemtno');
        }
    }
    //assegnazione
    for (let i = 0; i < list1.length; i++) {
        output1 = output1 + " " + String(list1[i]);
        output2 = output2 + " " + String(list2[i]);
    }

    resultEl.innerHTML = `${output1}  <br>  ${output2}`;

});

//14 minuti 16 secondi 