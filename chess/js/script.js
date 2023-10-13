//crating the board 
const row = 8;
const col = 8;

let turno = 0;
//alternarsi tra seleziona e piazza
let seleziona = true;

table = ``;
for (let i = 0; i < row; i++) {
    line = `<div class="line">`;
    for (let j = 0; j < col; j++) {
        let square;
        if ((i + j) % 2 === 1) {
            square = `
                    <div class="square dark d-flex align-items-center justify-content-center"></div>`
        }
        else {
            square = `
                    <div class="square light d-flex align-items-center justify-content-center"></div>`
        }
        line += square;
    }
    table += (line + `</div>`);
}

//listening to the board
document.getElementById('board').innerHTML = table;

const squareList = document.getElementsByClassName('square');

//matrix
matrix =
    [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ]


pieceSelected = ' ';
let selectedX;
let selectedY;



for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (matrix[i][j] === ' ') {

        } else if (matrix[i][j] === matrix[i][j].toUpperCase()) {
            squareList[i * 8 + j].innerHTML = `<img src="img/${matrix[i][j]}${matrix[i][j]}.png" alt="${matrix[i][j]}${matrix[i][j]}">`;
        } else {
            squareList[i * 8 + j].innerHTML = `<img src="img/${matrix[i][j]}.png" alt="${matrix[i][j]}">`;
        }

        squareList[i * 8 + j].addEventListener('click', function () {
            let selected = squareList[i * 8 + j];
            let content = matrix[i][j];
            //turno bianchi
            if (turno % 2 === 0) {
                //fase di selezione pezzo
                if (seleziona) {
                    if (content !== ' ' && content === content.toUpperCase()) {

                        console.log('1')
                        console.log(content)
                        pieceSelected = content;
                        seleziona = false;

                        selectedY = i;
                        selectedX = j;
                        console.log(listLegalMoves(pieceSelected, i, j))
                    }
                } else { //piazza
                    if (content === ' ' || content === content.toLowerCase()) {
                        console.log('2')
                        //removing from document
                        squareList[selectedY * 8 + selectedX].innerHTML = ' ';
                        matrix[selectedY][selectedX] = ' ';

                        content = pieceSelected;
                        matrix[i][j] = content;
                        pieceSelected = ' ';
                        seleziona = true;
                        turno++;
                        selected.innerHTML = `<img src="img/${content}${content}.png">`;

                        printMatrix()

                    } else {//nel caso in cui selezioni ma cambi idea basta premere su un proprio pezzo 
                        error(selectedY, selectedX);
                        pieceSelected = ' ';
                        seleziona = true;
                    }

                }
            }
            //neri
            if (turno % 2 === 1) {
                //fase di selezione pezzo
                if (seleziona) {
                    if (content !== ' ' && content === content.toLowerCase()) {
                        console.log('1')
                        console.log(content)
                        pieceSelected = content;
                        seleziona = false;

                        selectedY = i;
                        selectedX = j;
                    }
                } else { //piazza
                    if (content === ' ' || content === content.toUpperCase()) {
                        console.log('2')
                        //removing from document
                        squareList[selectedY * 8 + selectedX].innerHTML = ' ';
                        matrix[selectedY][selectedX] = ' ';
                        content = pieceSelected;
                        matrix[i][j] = content;

                        pieceSelected = ' ';
                        seleziona = true;
                        turno++;
                        selected.innerHTML = `<img src="img/${content}.png">`;

                        printMatrix()
                    } else {//nel caso in cui selezioni ma cambi idea basta premere su un proprio pezzo 
                        error(selectedY, selectedX);
                        pieceSelected = ' ';
                        seleziona = true;
                    }

                }
            }

        });
    }
}

function error(i, j) {
    //animation
    squareList[i * 8 + j].animate(
        [
            // keyframes (doing immediate transition)
            { border: "4px solid red", borderStyle: "none" },
            { border: "4px solid red", borderStyle: "solid" },
            { border: "4px solid red", borderStyle: "none" },
            { border: "4px solid red", borderStyle: "none" },
            { border: "4px solid red", borderStyle: "solid" },
            { border: "4px solid red", borderStyle: "none" }

        ],
        {
            // timing options
            duration: 400,
        },
    );
}

function printMatrix() {
    console.log(matrix[0][0])
    let string = '';
    for (let i = 0; i < matrix.length; i++) {
        string = ''
        for (let j = 0; j < matrix[0].length; j++) {

            string = string + ' ' + matrix[i][j];
        }
        console.log(string)
    }

}
