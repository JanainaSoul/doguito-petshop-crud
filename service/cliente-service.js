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



const listaClientes = () =>{
    const promise = new Promise((resolve, reject)=>{
        const http = new XMLHttpRequest()
        http.open('GET', 'http://localhost:3000/profile'); //GET p/ pegar os dados do servidor - 2 argumentos 1° o q vc quer pedir pro servidor e o 2° é p onde vou enviar a requisiçao
    
    
    http.onload = () => {
        if(http.status >= 400){
            reject(JSON.parse(http.response))
        }else{
            resolve(JSON.parse(http.response))
            }
        }
        http.send()
    })
    //console.log(promise)
    return promise
}

listaClientes() //fazendo uma promessa - qdo for compeltada vai retornar os dados
.then(data =>{
    //const data = (http.response)
    //console.log(data) 
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))// para cada cliente
    })
})






//     const http2 = new XMLHttpRequest()
//     http2.open('GET', 'http://localhost:3000/profile/semanaPassada');

//     http2.onload = () =>{
//         ..

//         const http3 = new XMLHttpRequest()
//             http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada')
        
//             http3.onload = () =>{ - função auxiliar qdo uma função assincrona é chamada - call back

//             }
//             http3.send() 
//     }
//     http2.send()
// } -> dificuldade de entender , dificil manuntenção