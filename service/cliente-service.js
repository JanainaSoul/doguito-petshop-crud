//pede os dados e pega uma resposta

const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }throw new Error ('Não foi possível listar os clientes')
        
    })
}

const criaCliente = (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }        
        throw new Error ('Ñão foi possível criar um cliente')
    })
}

const removeCliente = (id) => { // no db.json cada cliente tem um ID e é isso q vamos usar p deletar
    return fetch(`http://localhost:3000/profile/${id}`, {//faz uma requisição para deletar passando o ID como js valido
        method: 'DELETE' // metodo delete
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error ('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) //vai baixar do cliente especifico
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }        
        throw new Error ('Não foi possível editar o cliente')
    })
}


const atualizaCliente = (id, nome, email) => {   // parametros
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT', //trocar um dado
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ // tem q passar string
            nome: nome, 
            email: email
        })
    }) 
    .then(resposta => {
        if(resposta.ok){
            return resposta.json() //devolve em objeto js valido
        }        
        throw new Error ('Não foi possível atualizar o cliente')
        
    })
}


export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}







