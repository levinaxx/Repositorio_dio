const alunos = [{

    nome: 'levi',
    nota: 10,
    turma: '1C'
},
{
    nome: 'emy',
    nota: 3,
    turma: '1A'

},
{   
    nome:'gabriel',
    nota: 6,
    turma: '3B'

}
]



function alunosAprovados(arr, media) {
    let aprovados = []

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome } = arr[i]

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))

