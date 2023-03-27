// ta gerando um template
//ta percorrendo o DOM
// ta fazendo uma junção com a listCliente(promise) p exibir os dados na tela

//criando template 

import { clienteService} from '../service/cliente-service.js'
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement ('tr') //criando as linhas de cada cliente
    const conteudo = ` 
        <td class="td" data-td>${nome}</td> 
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td> 
                `

        linhaNovoCliente.innerHTML = conteudo
        linhaNovoCliente.dataset.id = id //criamos um data atributs chamado ID e passei o ID como propriedade
        return linhaNovoCliente

}
//pegando a tabela
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) =>{ // colocar um evento p escutar na tabela qdo clicar no botão excluir - async=função assincrona
    let ehBotaoDeletar = evento.target.className === 
    'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        try {
            const linhaCliente = evento.target.closest('[data-id]') // mais proximo da TR
            let id = linhaCliente.dataset.id
           await clienteService.removeCliente(id) //deletando cliente da API mas tb temos q deletar o elemento HTML- com o await vc pode remover o .then
            //.then(() => { - com o await vc pode remover o .then - vc ganha legebilidade
                linhaCliente.remove() //remover a tr inteira
            }
            catch(erro){
                console.log(erro)
                window.location.href = '../telas/erro.html'
        }
    }
})

const render = async ()=> {// função render renderiza dados na tela
    try {
        const listaClientes = await clienteService.listaClientes() //fazendo uma promessa - qdo for compeltada vai retornar os dados
        //.then(data =>{// .then -> então
            listaClientes.forEach(elemento => {
                tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))// para cada cliente
            })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}
render()
