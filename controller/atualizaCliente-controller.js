import { clienteService } from "../service/cliente-service.js"

(async ()=>{

    const pegaURL = new URL (window.location) // pegar o endereço 

    const id = pegaURL.searchParams.get('id') // pega o id da URL q vem do listaCliente-controller
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    try{
        const dados = await clienteService.detalhaCliente(id) // quando chamar o detalhaCLiente eles vai puxar os dados preenchidos
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
        window.location.href = ' ../telas/erro.html'
    }



        
    const formulario = document.querySelector('[data-form]') //seleciona o formulario
    
    formulario.addEventListener('submit', async (evento)=>{ // evento de escuta no formulario 
        evento.preventDefault() // prevenir o comportamento padrao do form
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value) // valores preenchidos
            //.then(()=>{
                window.location.href = "../telas/edicao_concluida.html" // direciona para a proxima pagina de edição concluida
        }
        catch(erro){
            console.log(erro)
            window.location.href = ' ../telas/erro.html'
        }
        })
    
    //})

})()


