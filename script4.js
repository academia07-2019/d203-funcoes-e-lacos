// prompt()
// alert()
// console.log()

function somar(){
    let soma = 0;
    for(let i =0; i < arguments.length;i++){
        soma += arguments[i]; 
    }
    return soma;
}

function fazerEscadinha(material, qtdDegraus){
    // let material = prompt("Digite o material");
    // let qtdDegraus = Number(prompt("Digite a quantidade de degraus"));
    let escada = "";
    
    for(let contador = 0; contador < qtdDegraus;contador++){
        escada += material;
        console.log(escada);
    }
}

const subtrair = function(n1, n2){
    return n1 - n2;
}

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min +1)) + min;
}

let lerolero = ["Alucinacao", "seja o seu onibus","matar o javascripto", "rusbe", 'it']

const gerarLeroLero = () =>{
    return lerolero[gerarAleatorio(0,lerolero.length-1)];
}


