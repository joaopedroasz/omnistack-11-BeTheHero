<h1 align='center'>🚀 Semana Omnistack 11 - Be The Hero 💪</h1>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
</p>

<p align="center">
  <a href="#-visão-geral">Visão geral</a> |
  <a href="#-tecnologias">Tecnologias</a> |
  <a href="#-projeto">Projeto</a> |
  <a href="#-instalação">Instalação</a> |
  <a href="#-como-contribuir">Como contrubuir</a> |
  <a href="#-licença">Licença</a>
</p>

<br>

## 🌎 Visão Geral:
O **Be The Hero** é um projeto que visa conectar ONG's (Organizações Não Governamentais) com a população. No qual as ONG's podem publicar seus casos de ação, podendo receber quantias financeiras para ajudá-las.

## 💻 Tecnologias:  
O Be The Hero foi desenvolvido com as seguintes tecnologias:
- [NodeJS](https://nodejs.org/pt-br/)
- [KnexJS](http://knexjs.org/)
- [ReactJS](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 📚 Projeto:

### 💾 Backend:
Para ver conceitos e definição do *Backend* desse projeto, clique [aqui](./backend/readme.md).

## 🌐 Instalação:

  ### 💾 Backend:

- Instalando as depedências:

Primeiramente, para instalar todas as depêndencias do *backend*, em seu terminal, entre na pasta `backend` e rode o comando:

```bash
yarn
```

- Banco de dados:

O banco de dados da aplicação já está configurado, para vê-lo, basta clicar [aqui](./backend/knexfile.js). Nesse projeto, foi utilizado o banco de dados SQLite, que armazena os dados em em arquivo local, que você pode encontrar em `backend/src/database/db.sqlite`.

Caso o seu banco de dados dê algum erro, você pode excluir o arquivo e rodar o comando:

```bash
yarn knex migrate:latest
```

- Rotas:

Para testar a API do Be The Hero, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` →  
`Import Data` → `From File` → e selecione [esse arquivo](./.github/Insomnia_routes.json) deste repositório.

- Rodando o backend:
Para iniciar o servidor, com seu terminal, entre em `./backend/` e digite o comando:

```bash
yarn server
```

## 🤔 Como contribuir:

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença:

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Feito com ❤ por João Pedro Araújo. [Veja meu Linkedin!](https://www.linkedin.com/in/jo%C3%A3o-pedro-731ab61a5/)
