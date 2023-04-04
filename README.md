# Backend-Motors

## Estrutura de pastas

Na raiz do projeto, você encontrará duas pastas e arquivos:
- Prisma
- Src
- Arquivo .env

------

### * Prisma *
##### Schema.prisma -> Arquivo de configuração do prisma e também onde serão feitas as models.

------

### * Src *
##### Controllers -> Estão todos os controllers da aplicação separado por arquivos.
##### Services -> Estão todos os services da aplicação separado por pastas e arquivos.
##### Errors -> Existe um arquivo index.ts responsável por setar um error customizado.
##### Middlewares -> Todos os middlewares da aplicação, separado por pastas e arquivos.
##### @Types -> Todos os tipos extendidos da aplicação.
##### @Types -> Todos as tipagens usadas na aplicação, separada por pastas e arquivos.
##### Rotas -> Todos as rotas da aplicação, separado por pastas e arquivos.
##### Schemas -> Todos os chemas de validação da aplicação, separado por pastas e arquivos.

------

### * .Env *
##### .env.example -> Arquivo de exemplo das variáveis da aplicação, crie uma novo arquivo .env e preencha os dados seguindo a estrutura de .env.example.

------

## Como rodar o projeto?

Ao clonar o projeto, você terá duas pastas: server e outra client, siga os passos abaixo:

1. Abra o terminal na pasta raiz do projeto.
2. Execute o comando "yarn install" para instalar as dependências do servidor.
3. Preencha as variáveis de ambiente seguindo o exemplo em .env.example.
4. Após a instalação e configuração do .env, execute o comando "yarn prisma migrate dev" para executar as migrações do banco de dados (postgres).
5. Execute o comando "yarn dev" para iniciar o servidor. Certifique-se de que o servidor está rodando antes de começar a codificar.
