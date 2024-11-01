const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


// creia o una array numeri vuoto
let numeri = []
// utilizziamo il metodo forEach() per iterare l'array nums e gli leghiamo una arrowfunction
// che prende un solo valore come variabile
nums.forEach((num) => {
    // ogniqualvolta il resto di num diviso 2 sarà 0 la funzione puscherà num nell'array numeri
    if (num % 2 === 0) {
        return numeri.push(num)
    }
})
//  stampiamo il nuovo array numeri
console.log(numeri)