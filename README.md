#  JS na web: crud com JavaScript assíncrono

# Linguagens

JavaScript

# Comandos 

>>
npx json-server --watch db.json

>>
browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html

# Aprendizados

01 - Comunicação Assincrona

Fazer requisições utilizando XMLHttpRequest.

Lidar com promises.

Fazer uma requisição http utilizando XMLHttpRequest para buscar todos os clientes do servidor.

Refatorar o código utilizando promises melhorando a leitura do código.

Utilizar template literals para criar um template html.

02 - Fetch API

Entender a ordem de execução do código JavaScript.

Puxar dados do servidor utilizando a função a fetch api ao invés do xmlhttprequest para modernizar o código.

Refatorar as responsabilidades do código pensando na manutenção da aplicação no futuro.

03 - Criar e Remover Clientes

Usar a método closest para encontrar o elemento do DOM mais próximo ao que queremos remover

Criar um cliente utilizando o verbo http POST.

Remover um elemento do dom com método remove()

Deletar um cliente utilizando o verbo http DELETE

04 - Editar Clientes:

Fazer uma query string utilizando a propriedade searchParams.get() para encontrar um id.

Criar uma IIFE ou função auto executável.

Editar os dados utilizando o verbo http PUT.

05 - Async/Await

Utilizar async/await para indicar funções assíncronas.

Tratar erros com try/catch

# Links
Começando com fetch no Javascript -> https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript
Latentflip -> http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
