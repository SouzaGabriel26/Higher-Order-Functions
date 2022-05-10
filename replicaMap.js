function novoAluno(nome, idade) {
  return { nome, idade }
}
let alunos = [
  novoAluno('Mario', 23),
  novoAluno('Gabriel', 18),
  novoAluno('Marcia', 29),
  novoAluno('João', 35)
]

function strAluno(aluno) {
  return aluno.nome + ' tem ' + aluno.idade + ' anos.'
}

function mapear(callBack) {
  let result = []
  for (let aluno of alunos) {
    result.push(callBack(aluno))
  }

  return result
}

console.log(mapear(strAluno))
