// Requisição API retirada do Exercicio - https://codesandbox.io/s/floral-shadow-wmkrw?file=/src/store/actions/charactersAction.js
const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = () => fetch(ENDPOINT)
  .then((response) => response.json());

export default fetchApi;
