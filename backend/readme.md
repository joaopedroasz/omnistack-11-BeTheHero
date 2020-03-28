# Conceitos de uma API - Backend:

## Rotas:
 - São os caminhos da nossa aplicação.
 EX: ``` https://meusite/usuarios ``` ('/usuarios' vai ser a minha rota, e ao mesmo tempo o meu recurso).

    ### Tipos de parâmetros usados nas rotas:

    - Query Params: Parâmetros nomeados enviados na rota após "?". São usados para Filtros, Paginação, etc. É possível acessar esses parâmtros usando:
  
    ```javascript
      const params = request.query;
    ```
    EX: ``` https://meusite/users?name=joao ```. Nesse caso, o 'name' que vai ser o 'Query Param'.

    - Route Params: Parâmetros utilizados para identificar recursos únicos. É possível acessar esses parâmetros utiliando:

    ```javascript
      const params = request.params;
    ```
    EX: ``` https://meusite/users/:id ```. Nesse caso, o ':id' seria o 'Route Param'.

    - Request Body: Informações que são passadas no corpo da requisição. É possível acessar esse parâmetro utilizando:
  
    ```javascript
      const body = request.body;
    ```

    - Request Headers: Informações do contexto da requisição. Esse parâmetro armazena informações como: ID do usuário logado, autenticação de login, etc.
    Tendo acesso as informações desse parâmetro:

    ```javascript
      const params = request.headers;
    ```


## Recursos:
 - Informações que vamos buscar com base na rota.
 EX: ``` https://meusite/postagens ```. ('/postagens' o recurso postagens vai listar os tipos de postagens).

## Métodos HTTP:
 - Métodos que são usados para manipular informações no backend:
    - *GET*: Usado para buscar informações;
    - *POST*: Usado para criar informações;
    - *PUT*: Usado para editar informações;
    - *DELETE*: Usado para deletar informações;

## Bancos de dados:
  ### Bancos de dados relacionais:
  - SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server.
  - Mais utilizado no mercado.

  - #### Opções para banco de dados relacionais:
    - Driver: É usado com linguagem SQL. <br />
    EX: Para pegar todos os *users*:
    ```sql
      SELECT * FROM users;
    ```

    - Query Builder: As buscas são feitas em JavaScript: <br />
    EX: Pegar todos os *users*:
    ```javascript
      table('users').select('*').where('...');
    ```

    **Veja as configurações do banco de dados desse projeto [aqui](./knexfile.js).**
    
    **Para conhecer o Query Builder usado nesse projeto, clique [aqui](http://knexjs.org/)**
  
  ### Banco de dados não relacionais:
  - NoSQL: MongoDB, CouchDB, etc.
---
# Definindo a aplicação:

 ## Entidades da aplicação:
 - [X] [ONG](./src/database/migrations/20200328114421_create_ongs.js);
 - [X] [Incidents](./src/database/migrations/20200328115641_create_incidents.js);

 ## Funcionalidades:
 - [X] Login de ONG;
 - [ ] Logout de ONG;
 - [X] Cadastro de novas ONG's;
 - [X] ONG consegue cadastrar novos casos;
 - [X] ONG consegue deletar seus casos;
 - [X] Listar todas as ONG's;
 - [X] Listar todos os casos de todas as ONG's;
 - [X] Listar casos específicos de uma ONG;
 - [ ] Entrar em contato com a ONG (WhatsApp e E-mail);
