function novoAluno(nome, idade) {
  return { nome, idade }
}

// reduce - reduz todas as entradas de um array numa única entrada
// pode ser um somatório, uma média... etc

let alunos = [
  novoAluno('Mario', 23),
  novoAluno('Gabriel', 18),
  novoAluno('Marcia', 29),
  novoAluno('João', 35)
]

function somaIdade(aluno) {
  return aluno.idade
}

function reduz(callBack) {
  let total = 0
  for (let aluno of alunos) {
    total += callBack(aluno)
  }

  return total
}

console.log(reduz(somaIdade))
