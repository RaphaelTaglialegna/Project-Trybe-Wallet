// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCY_SUCCESS':
    return ({ ...state, currencies: action.currencies });
  case 'SAVE_EXPENSIVE':
    return ({ ...state, expenses: [...state.expenses, action.expensive] });
  case 'DELETE_EXPENSIVE':
    return ({ ...state, expenses: action.expensive });
  default:
    return state;
  }
}

export default wallet;
