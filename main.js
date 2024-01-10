const form = document.getElementById('form-agenda');
const nome = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato')


        nome.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    corpoTabela.addEventListener('click', function (e){
        if(e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        }else{
            e.target.classList.add('checked');
        }
    })

}