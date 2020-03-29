# Conceitos do Frontend e do ReactJS:

## Componente:
Componentes são funções dentro do React, que vão retornar uma estrutura JSX.
Os componentes também podem ter outras funcionalidades, como códigos JavaScript, CSS, etc.

## JSX: (JavaScript XML)
JSX é a junção de JavaScript com HTML, que é usada no returno dos componentes.

## Propriedades:
São os atributos dos componenetes do React. São informações passadas de um componente pai para um componente filho.
É possível ter acesso as propriedades passadas para um componente através dos parâmetros desse componente, tendo em vista que ele é uma função.
Acessando a propriedade *children* é possível ver o que foi passado do componente pai para o filho.

## Estado:
Uma informação que vai ser mantida pelo componente. Para usar um estado, é necessário importar o `useState()` de dentro do *React*.
Quando um estado de um componente muda, esse componente é renderizado novamente para mostrar a nova informação em tela.

## Imutabilidade:
As informações mantidas pelo componente não podem ser alteradas de forma direta, é preciso **sobrepor** as informações por outras novas.

---

# Definindo a aplicação:

## Páginas necessárias:
- [X] Página de login;
- [X] Página de cadastro de ONG's;
- [X] Página de cadastro de novos casos;
- [X] Página de listagem dos casos da ONG cadastrada.

## Funcionalidades:
- [X] Login da ONG;  
- [X] Logout da ONG.

## Integração com o backend:
- [X] Conecxão com a API.