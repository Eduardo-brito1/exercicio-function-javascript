const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

//**a)** Declare uma função de nome `corrigirProva` que tenha apenas um parâmetro chamado `prova`. Faça commit do resultado.
let notaTotal = 0;
let respostasCertas = 0


const corrigirProva = (prova) => {
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            notaTotal = notaTotal + 2;
            respostasCertas = respostasCertas + 1;
        }
    }

}

corrigirProva(prova)

console.log(`O aluno(a) João acertou ${respostasCertas} questões e obteve nota: ${notaTotal}`)
