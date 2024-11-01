const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


// risoluzione 1
// così stampi in console tutto l'array

// console.log(names)



// risoluzione 2
// soluzione utilizzante il metodo join

// const joinSol = names.join()
// console.log(joinSol)



// risoluzione 3
// andiamo ad utilizzare il forEach()

names.forEach((nome, i) => console.log(i, nome))