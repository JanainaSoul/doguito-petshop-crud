import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL (window.location) // pegar o endereço 

const id = pegaURL.searchParams.get('id') // pega o id da URL q vem do listaCliente-controller

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id) // quando chamar o detalhaCLiente eles vai puxar os dados preenchidos
.then( dados =>{
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]') //seleciona o formulario

formulario.addEventListener('submit', (evento)=>{ // evento de escuta no formulario 
    evento.preventDefault() // prevenir o comportamento padrao do form

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value) // valores preenchidos
    .then(()=>{
        window.location.href = "../telas/edicao_concluida.html" // direciona para a proxima pagina de edição concluida
    })

})