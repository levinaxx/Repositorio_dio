let quantityWins = 10
let quantityLoses = 10

function resultadoPartidas(quantityWins, quantityLoses) {
    let partidas = quantityWins - quantityLoses
    return partidas
}

function heroRank(partidas) {
    let rank = ""

    if (partidas <= 0) {
        rank = "Sem classificação"
    }
    else if (partidas <= 10) {
        rank = "Ferro"
    }
    else if (partidas <= 20) {
        rank = "Bronze"
    }
    else if (partidas <= 50) {
        rank = "Prata"
    }
    else if (partidas <= 80) {
        rank = "Ouro"
    }
    else if (partidas <= 100) {
        rank = "Diamante"
    }
    else {
        rank = "Imortal"
    }

    return rank
}

let difference = resultadoPartidas(quantityWins, quantityLoses)

console.log(`O jogador está no rank ${heroRank(difference)}`)