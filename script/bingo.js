// salvo in una costante il numero totale di "numeri" disponibili per il tabellone del bingo
// e creo un array vuoto che dovrà contenere i numeri estratti

const totalBingoNumbers = 76
const extractedNumbers = []

// creo funzione che costruisca il tabellone sulla base dei numeri totali che desidero
const createNumberCells = function () {
  // recupero il riferimento su HTML della tabella
  const bingoTable = document.getElementById('bingo-table')
  // creo un ciclo che mi permetta di creare una cella per ogni numero del tabellone
  for (let i = 0; i < totalBingoNumbers; i++) {
    // creo un div per ogni cella di cui ho bisogno
    const numberCell = document.createElement('div')
    // applico una classe (utile per css) ad ogni cella creata
    numberCell.classList.add('number')
    // inserisco il contenuto in ogni cella
    const cellValue = document.createElement('h3')
    cellValue.innerText = i + 1 // da 1 a 76 (totale numeri del tabellone)
    // "appendo" il contenuto ad ogni cella e successivamente ogni cella al tabellone
    numberCell.appendChild(cellValue)
    bingoTable.appendChild(numberCell)
  }
}

// creo una funzione che attivi il bottone al suo "click"
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function (e) {
  const extractedNumber = Math.ceil(Math.random() * bingoCage.length)
  // ora faccio in modo di evidenziare la cella del numero estratto
  // per prima cosa recupero il riferimento di tutte le celle ed ottengo un array di 76 elementi
  const numberCell = document.querySelectorAll('section div')
  // applico una classe (con stile css diverso) alla cella corrispondente al numero estratto
  numberCell[extractedNumber - 1].classList.add('extracted')
  console.log(extractedNumber)
})

// chiamata delle funzioni all'avvio della pagina
createNumberCells()
