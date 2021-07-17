let player
let res_sorteio
let resultado_final

function sortear() {
    let sorteio = Math.floor(Math.random() * 3 )
    if (sorteio === 0) { // 0
        res_sorteio = 'pedra'
    } else if (sorteio === 1) { //1
        res_sorteio = 'papel'
    }
    else {
        res_sorteio = 'tesoura' //2
    }
} 

let botao = document.getElementById('jogar')
botao.onclick = function() {
    let escolha = prompt('Escolha: Pedra, Papel ou Tesoura')
    
    if (escolha === 'Pedra') {
        player = 'pedra'
    } else if (escolha === 'Papel') {
        player = 'papel'
    } else if (escolha === 'Tesoura') {
        player = 'tesoura'
    }  else if (escolha === 'pedra') {
        player = 'pedra'
    } else if (escolha === 'papel') {
        player = 'papel'
    } else if (escolha === 'tesoura') {
        player = 'tesoura'
    } else {
        alert('Opção Digitada Inválida');
    }
    sortear()
    resultado()
    showResults()
}


// so ta faltndo comparar corretamente, retornando undefined

function resultado () {
  console.log(res_sorteio)
  console.log(player)
    if ((res_sorteio === 'pedra') && (player === 'pedra')) {
        resultado_final = 'Empate, afinal pedra empata com pedra'
    } else if ((res_sorteio === 'pedra') && (player ==='papel')) {
        resultado_final = 'Ganhou, afinal papel ganha de pedra'
    } else if ((res_sorteio === 'pedra') && (player === 'tesoura')) {
        resultado_final = 'Perdeu, pois tesoura perde para a pedra'
    } else if ((res_sorteio === 'papel') && (player ==='pedra')) {   //papel
        resultado_final = 'Perdeu, pois pedra perde de papel'
    } else if ((res_sorteio === 'papel') && (player ==='papel')) {
        resultado_final = 'Empate, afinal papel empata com papel'
    } else if ((res_sorteio === 'papel') && (player ==='tesoura')) {
        resultado_final = 'Ganhou, afinal tesoura ganha de papel.'
    } else if ((res_sorteio === 'tesoura') && (player==='pedra')) {      //tesoura
        resultado_final = 'Ganhou, afinal pedra ganha de tesoura'
    } else if ((res_sorteio === 'tesoura') && (player ==='papel')) {
        resultado_final = 'Perdeu, afinal papel perde de tesoura'
    } else if ((res_sorteio=== 'tesoura') && (player === 'tesoura')) {
        resultado_final = 'Empate pois tesoura empata com tesoura'
    }
    console.log(resultado_final)
    
} 

// fazer o codigo escrever no html

function showResults() {
    let elemento = document.createElement('p')

    let text = document.createTextNode('O resultado é: ' + resultado_final)
    elemento.appendChild(text)

    let destino = document.getElementById('resultado')
    destino.appendChild(elemento)

}
