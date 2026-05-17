// Função simples para testar o login do aluno
function testarLoginAluno(matricula, senha) {
    // Matricula correta cadastrada no banco de dados
    const matriculaCorreta = "123456";
    const senhaCorreta = "senha123";

    console.log("Executando Teste 01: Login Inválido");

    if (matricula === matriculaCorreta && senha === senhaCorreta) {
        console.log("Resultado: Login efetuado com sucesso! Redirecionando...");
    } else {
        // O sistema deve cair aqui se os dados estiverem errados
        console.log("Resultado Esperado Atingido: Mensagem exibida -> 'Usuário ou senha incorretos'.");
    }
}

// Executando o teste com dados incorretos de propósito
testarLoginAluno("999999", "senhaErrada");