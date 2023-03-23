//pede os dados e pega uma resposta

const listaClientes = () =>{
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        return resposta.json() // a resposta e texto e temos q fazer json para ele entender q é java script
    }) // metodo global da API ela ja faz um get e a promise
}

const criaClente = (nome,email) =>{
    return fetch('http://localhost:3000/profile', {
        method:'POST',
        headers: {
            'contet-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
                
    })
    .then(resposta =>{
        return resposta.body
    })
}   


export const clienteService ={
    listaClientes,
    criaCliente
}







