let filmes = ['Star Wars', 'Shazam', 'Star Trek', 'Sharknado', 'Bacurau'];
let i =0;

console.log("WHILE")
while(i<filmes.length){
    console.log(filmes[i]);
    i++; //incremento 
}

// for(inicio;filmes;passo){
//     codigo a ser executado caso seja verdade
// } 
console.log("FOR");
for(let j = 0; j < filmes.length; j++){
    console.log(filmes[j]);
}

//FOR IN
console.log("FOR IN");

for(let indice in filmes){
    console.log(filmes[indice]);
}

//FOR OF
console.log("FOR OF");

for(let filme of filmes){
    console.log(filme);
}
