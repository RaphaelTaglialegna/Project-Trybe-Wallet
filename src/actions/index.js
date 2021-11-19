// Coloque aqui suas actions
import fetchApi from '../services/requestAPI';

const saveEmail = (value) => ({ type: 'SAVE_EMAIL', value });

export const actionCurrency = (currencies) => ({
  type: 'GET_CURRENCY_SUCCESS',
  currencies,
});

export const actionSaveExpensives = (expensive) => ({
  type: 'SAVE_EXPENSIVE',
  expensive,
});

export const actionFetchCurrencies = () => (dispatch) => {
  fetchApi()
    .then((result) => dispatch(actionCurrency(result)));
  // .catch((err) => dispatch(actionGetCharactersFail(err)));
};

export default saveEmail;
