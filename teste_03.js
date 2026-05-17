// Função que valida a liberação do ônibus considerando o período do aluno
function testarLiberacaoCalouro(periodoAluno, mediaAluno) {
    console.log("Executando Teste 03: Aluno Ingressante");

    // Regra de negócio: Se for do 1º período, não importa a nota atual
    if (periodoAluno === 1) {
        console.log("Resultado Esperado Atingido: Aluno é calouro. QR Code liberado sem restrição de nota!");
    } else if (mediaAluno >= 7.0) {
        console.log("Resultado: Aluno veterano aprovado por nota. QR Code liberado!");
    } else {
        console.log("Resultado: Aluno veterano bloqueado.");
    }
}
