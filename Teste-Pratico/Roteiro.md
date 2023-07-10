

1. Desenvolver uma aplicação WEB, que permita cadastrar e pesquisar contatos para uma agenda telefônica.
 Neste cadastro deve conter o nome da pessoa, idade, e número dos possíveis telefones que ela pode ter. 

 Na parte de pesquisa, deve permitir pesquisar pelo nome e numero do telefone.
  ***Obs.: As estruturas das tabelas estarão discriminadas no fim do relatório.***
  
 A tela de cadastro de CONTATO será composta por:

a. Botão de inclusão para contato;
A tela de pesquisa de CONTATO será composta por:
b. Botão de pesquisa para os CONTATOS;
c. Botão de alteração para o CONTATO SELECIONADO;
d. Botão de exclusão para o CONTATO SELECIONADO;

2. Precisamos também de um LOG, para nos mostrar quando foi excluido um contato. Esse LOG será gravado em um arquivo texto. 


3. Classifique o Teste que terminou de realizar. Comente o porquê de sua resposta.

***MODELO DE TABELA NO PDF***



Roteiro passo-a-passo para desenvolver uma aplicação web de agenda telefônica usando Node.js:

**Passo 1: Configuração inicial**
1. Crie uma nova pasta para o projeto da aplicação.
2. Abra o terminal na pasta do projeto e inicialize um novo projeto Node.js usando `npm init`. Siga as instruções no terminal para configurar o projeto.
3. Instale as dependências necessárias, como o Express para criar o servidor web e outras bibliotecas que você pode precisar. Por exemplo: `npm install express`.

**Passo 2: Criação das rotas e endpoints**
1. Crie um arquivo `server.js` para definir o servidor e as rotas da aplicação.
2. Importe as bibliotecas necessárias, como o Express e outras bibliotecas auxiliares.
3. Defina as rotas para a página inicial, a página de cadastro e a página de pesquisa.
4. Crie os endpoints para lidar com as requisições GET e POST nessas rotas.
5. Implemente a lógica para cada endpoint, como salvar um novo contato, pesquisar contatos por nome ou número, atualizar um contato existente e excluir um contato.

**Passo 3: Criação das páginas HTML**
1. Crie uma pasta `public` para armazenar os arquivos estáticos da aplicação, como arquivos HTML, CSS e scripts JavaScript.
2. Crie um arquivo HTML para a página inicial, com um formulário de cadastro de contato e botões para pesquisa, alteração e exclusão de contatos.
3. Crie um arquivo HTML para a página de pesquisa, com um formulário de pesquisa por nome ou número e uma tabela para exibir os resultados da pesquisa.
4. Estilize as páginas HTML com CSS, se desejar.

**Passo 4: Implementação do log**
1. Crie uma função que receba os dados relevantes quando um contato é excluído.
2. Dentro dessa função, abra um arquivo de log em modo de escrita e adicione as informações do contato excluído ao arquivo. Certifique-se de adicionar uma nova linha para cada entrada de log.
3. Chame essa função sempre que um contato for excluído com sucesso.

**Passo 5: Teste e classificação**
1. Inicie o servidor usando o comando `node server.js` no terminal.
2. Abra o navegador e acesse a aplicação em `http://localhost:3000` (ou a porta que você definiu).
3. Realize os testes de cadastro, pesquisa, alteração e exclusão de contatos. Verifique se os resultados estão corretos e se o log é gravado adequadamente.
4. Classifique o teste como bem-sucedido se todas as funcionalidades estiverem funcionando corretamente, sem erros e seguindo os requisitos especificados. Caso contrário, classifique como falha e revise o código para corrigir os problemas identificados.

**Estrutura das tabelas:**

Tabela Contato:
- ID: Identificador único do contato (gerado automaticamente pelo sistema).
- Nome: Nome da pessoa.
- Idade: Idade da pessoa.
- Telefones: Array contendo os números de telefone do contato.

Log:
- Data: Data e hora em que o contato foi excluído.
- Nome: Nome do contato excluído.
- Idade: Idade do contato excluído.
- Telefones: Array contendo os números de telefone do contato excluído.

Observação: Certifique-se de criar as tabelas correspondentes em um banco de dados ou utilizar algum método de persistência de dados, como arquivos JSON ou MongoDB, para armazenar os contatos e o log.

**Comentário sobre a classificação do teste:**
A classificação do teste depende da execução bem-sucedida de todas as funcionalidades propostas e do correto armazenamento dos dados de contato e do log. O teste deve ser classificado como bem-sucedido se todas as funcionalidades estiverem funcionando corretamente, sem erros e se os dados são armazenados adequadamente. Caso contrário, se houver erros ou problemas que impeçam o correto funcionamento da aplicação ou a gravação do log, o teste deve ser classificado como falha. É importante garantir que todas as etapas do roteiro sejam seguidas corretamente e que os requisitos sejam atendidos para que o teste seja considerado bem-sucedido.