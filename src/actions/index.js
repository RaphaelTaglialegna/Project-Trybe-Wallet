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
export const actionDeleteExpensives = (expensive) => ({
  type: 'DELETE_EXPENSIVE',
  expensive,
});
export const actionEditExpense = (edit) => ({
  type: 'EDIT_EXPENSIVE',
  edit,
});
export const actionEditedExpense = (edit) => ({
  type: 'EDITED_EXPENSIVE',
  edit,
});
export const actionSaveEditedExpense = (expensives) => ({
  type: 'SAVE_EDITED_EXPENSIVE',
  expensives,
});

export const actionFetchCurrencies = () => (dispatch) => {
  fetchApi()
    .then((result) => dispatch(actionCurrency(result)));
  // .catch((err) => dispatch(actionGetCharactersFail(err)));
};

export default saveEmail;
