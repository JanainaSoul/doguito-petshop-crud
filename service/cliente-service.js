//pede os dados e pega uma resposta

const listaClientes = () =>{
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        return resposta.json() // a resposta e texto e temos q fazer json para ele entender q é java script
    }) // metodo global da API ela ja faz um get e a promise
}

export const clienteService ={
    listaClientes
}







