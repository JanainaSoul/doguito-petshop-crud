import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento)=> { // evento de escuta escutar o evento de submit
    evento.preventDefault()                                        // previne o comportamento padrao do form que é o de enviar
    const nome = evento.target.querySelector('[data-nome]').value // nos queremos o valor
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(()=>{
        window.location.href = '../telas/cadastro_concluido.html'
    })
})