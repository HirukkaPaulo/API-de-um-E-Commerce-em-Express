Este é o sexto desafio proposto pela Escola DNC. Trata-se de uma API projetada em Express e conectada a um Banco de Dados Relacional.
Caso deseje utilizar este projeto em seu computador, repita os seguintes passos:

1. Clone o repositório para alguma pasta:

    - Com seu editor de código, crie e abra uma nova pasta onde deseja armazenar o projeto.

    - Utilizando o terminal, digite a seguinte instrução: git clone https://github.com/HirukkaPaulo/API-de-um-E-Commerce-em-Express.git

    - Pronto, o projeto já estará copiado no seu computador.

2. Instale as dependências necessárias:

    Para que o projeto funcione corretamente, é necessário instalar as dependências necessárias. Para isso, siga as instruções a seguir:

    - No terminal, digite: cd .\API-de-um-E-Commerce-em-Express
\ para entrar na nova pasta criada com os arquivos do projeto.

    - Logo após digite: npm run build para instalar as dependências.

    - Aguarde até todos os arquivos serem instalados.

3. Configure a conexão com o Banco de Dados:

    Para que a API conecte-se ao seu Banco de Dados, é necessário configurar o arquivo de conexão do projeto.

    - Entre na src/config e clique no arquivo database.js com seu editor de código.
    - Substitua as informações do knexService pelas informações do seu Banco de Dados para se conectar a ele.
    - Você também pode criar uma arquivo .env na raiz do projeto e configurar as variáveis de ambiente presentes no knexService para manter suas informações seguras.

4. Rode o projeto no seu computador:

    - Após ter finalizado as instalações e configurações, utilize o comando npm run dev para iniciar o seu projeto.


O projeto também está disponível na web pelo seguinte link:

https://api-de-um-e-commerce-em-express.onrender.com