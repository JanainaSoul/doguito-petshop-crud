//criando template 
const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement ('tr') //criando as linhas de cada cliente
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td> 
                `

        linhaNovoCliente.innerHTML = conteudo
        return linhaNovoCliente

}
//pegando a tabela
const tabela = document.querySelector('[data-tabela]')

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile'); //GET p/ pegar os dados do servidor - 2 argumentos 1° o q vc quer pedir pro servidor e o 2° é p onde vou enviar a requisiçao

http.send()

//metodo onload
http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data) 
    //data.forEach(elemento => {
        //tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))// para cada cliente
    //})
}


