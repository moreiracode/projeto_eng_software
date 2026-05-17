// Função para testar se o aluno pode ou não gerar o QR Code com base na nota
function testarGeracaoQRCodePorNota(mediaAluno) {
    console.log("Executando Teste 02: Bloqueio por Média");
    console.log("Média do aluno testado: " + mediaAluno);

    // Regra de negócio: Média precisa ser maior ou igual a 7
    if (mediaAluno >= 7) {
        console.log("Resultado: QR Code gerado com sucesso!");
    } else {
        // O aluno com nota menor que 7 cai aqui
        console.log("Resultado Esperado Atingido: Tela bloqueada. Mensagem Exibida -> 'Acesso indisponível. Média mínima é 7.0'.");
    }
}

// Simulando um aluno com média 5.5
testarGeracaoQRCodePorNota(5.5);