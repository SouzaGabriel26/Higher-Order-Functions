function novoAluno(nome, idade) {
  return { nome, idade }
}

// filter

let alunos = [
  novoAluno('Mario', 23),
  novoAluno('Gabriel', 18),
  novoAluno('Marcia', 29),
  novoAluno('João', 35)
]

function temMenosDe25(aluno) {
  return aluno.idade < 25
}

function nomeMenorde7(aluno) {
  return aluno.nome.length < 7
}

// console.log(alunos.filter(temMaisde25))

function filtro(callback) {
  let result = []
  for (let aluno of alunos) {
    if (callback(aluno)) {
      result.push(aluno)
    }
  }

  return result
}

console.log('nomes com menos de 7 caracteres')
console.log(filtro(nomeMenorde7))

console.log('menos de 25 anos')
console.log(filtro(temMenosDe25))
