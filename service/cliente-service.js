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
        method: 'DELETE'
    })
}

export const clienteService ={
    listaClientes,
    criaCliente,
    removeCliente
}







