
const CONSUMO_AUTOMOVEL = 12

function gastocCombustivel (tempoGasto, velocidadeMedia ){
    const distancia = velocidadeMedia * tempoGasto;
    const consumoFinal = distancia / CONSUMO_AUTOMOVEL
    return consumoFinal.toFixed(3);
}
console.log(gastocCombustivel(10,85))
console.log(gastocCombustivel(2,92))
console.log(gastocCombustivel(22,67))