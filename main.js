
function adicionaLinha() {
    const tabela = document.getElementById('tabelaContatos');
    const inputNome = document.getElementById('nome-completo').value;
    const inputDDD = document.getElementById('ddd').value;
    const inputTelefone = document.getElementById('telefone').value; 

    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell();
    const CelulaTelefone = novaLinha.insertCell();

    celulaNome.textContent = nome-completo;
    CelulaTelefone.textContent = telefone;

}

    



// Limpar os campos do formulário após o cadastro
document.getElementById("nome-completo").value = "";
document.getElementById("ddd").value = "";
document.getElementById("telefone").value = "";

