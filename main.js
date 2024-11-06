const form = document.getElementById('formularioContato');
let linhas = ``;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('telefone-ddd');

    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

});
