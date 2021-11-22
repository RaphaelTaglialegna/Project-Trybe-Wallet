// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: false,
  idEdit: '',
  editing: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCY_SUCCESS':
    return ({ ...state, currencies: action.currencies });
  case 'SAVE_EXPENSIVE':
    return ({ ...state, expenses: [...state.expenses, action.expensive] });
  case 'DELETE_EXPENSIVE':
    return ({ ...state, expenses: action.expensive });
  case 'EDIT_EXPENSIVE':
    return ({ ...state, edit: true, editing: true, idEdit: action.edit });
  case 'EDITED_EXPENSIVE':
    return ({ ...state, edit: false });
  case 'SAVE_EDITED_EXPENSIVE':
    return ({ ...state, editing: false, idEdit: '', expenses: action.expensives });
  default:
    return state;
  }
}

export default wallet;
