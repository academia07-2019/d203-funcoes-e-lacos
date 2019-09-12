// EXERCICIO

// CONSTRUIR UMA ESCADA DE 5 DEGRAUS NO CONSOLE
// O MATERIAL DEVE SER #

// #
// ##
// ###
// ####
// #####

// CONSTRUIR UMS ESCADA COM O MATERIAL QUE O USUARIO QUISER E QUANTOS DEGRUAS ELE QUISER

// DICAS: TEM QUE USAR LAÇO
// FOR NORMAL É MAIS FÁCIL DE USAR NESSE CASO

let material = prompt("Digite o material");
let qtdDegraus = Number(prompt("Digite a quantidade de degraus"));
let escada = "";

for(let contador = 0; contador < qtdDegraus;contador++){
    escada += material;
    console.log(escada);
}