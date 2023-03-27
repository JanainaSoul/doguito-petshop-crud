//pede os dados e pega uma resposta

const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
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
        return resposta.body
    })
}

const removeCliente = (id) => { // no db.json cada cliente tem um ID e é isso q vamos usar p deletar
    return fetch(`http://localhost:3000/profile/${id}`, {//faz uma requisição para deletar passando o ID como js valido
        method: 'DELETE' // metodo delete
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) //vai baixar do cliente especifico
    .then(resposta => {
        return resposta.json()
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
        return resposta.json() //devolve em objeto js valido
    })
}


export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}







