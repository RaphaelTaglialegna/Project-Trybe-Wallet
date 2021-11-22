import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ComponentsForm from './componentsForm';
import { actionFetchCurrencies, actionSaveExpensives, actionSaveEditedExpense, actionEditedExpense } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveExpensives = this.saveExpensives.bind(this);
    this.saveEditedExpense = this.saveEditedExpense.bind(this);
    this.editedfunction = this.editedfunction.bind(this);
  }

  componentDidUpdate() {
    const { expenses, edit, idEdit } = this.props;
    const editExpense = expenses.filter((expense) => expense.id === idEdit);
    if (edit === true) {
      this.editedfunction(editExpense);
    }
  }

  saveEditedExpense() {
    const { idEdit, expenses, saveEditedExpensives } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const objIndex = expenses.findIndex(((obj) => obj.id === idEdit));
    const newExpenses = [...expenses];
    newExpenses[objIndex] = { ...newExpenses[objIndex],
      value,
      currency,
      method,
      description,
      tag,
    };
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
    saveEditedExpensives(newExpenses);
  }

  handleChange({ target }) {
    const { id, value } = target;
    const { currencies } = this.props;
    this.setState({
      [id]: value,
      exchangeRates: currencies,
    });
  }

  editedfunction(expense) {
    const { edited } = this.props;
    this.setState({
      value: expense[0].value,
      description: expense[0].description,
      currency: expense[0].currency,
      method: expense[0].method,
      tag: expense[0].tag,
    });
    edited();
  }

  saveExpensives() {
    const { saveExpensives, getCurrencies } = this.props;
    const { id } = this.state;
    getCurrencies();
    saveExpensives(this.state);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  render() {
    const { currencies, editing } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const classLabel = 'mx-2 d-flex align-items-center justify-content-center';
    return (
      <nav className="navbar navbar-light bg-light px-4 align-items-center">
        <label className={ classLabel } htmlFor="currency">
          <h6>Moeda:&nbsp;</h6>
          <select
            className="custom-select mr-sm-2"
            id="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
            value={ currency }
          >
            {Object.entries(currencies).map((item) => (
              item[0] !== 'USDT'
                ? (
                  <option key={ item[1].name } value={ item[1].code }>
                    {item[1].code}
                  </option>)
                : null))}
          </select>
        </label>
        <ComponentsForm
          value={ value }
          onChange={ this.handleChange }
          description={ description }
          method={ method }
          tag={ tag }
        />
        {editing
          ? (
            <div className="mx-2 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ () => this.saveEditedExpense() }>
                Editar despesa
              </button>
            </div>)
          : (
            <div className="mx-2 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary" onClick={ () => this.saveExpensives() }>
                Adicionar despesa
              </button>
            </div>)}
      </nav>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  edit: PropTypes.bool.isRequired,
  edited: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
  getCurrencies: PropTypes.func.isRequired,
  idEdit: PropTypes.number.isRequired,
  saveEditedExpensives: PropTypes.func.isRequired,
  saveExpensives: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  edit: state.wallet.edit,
  editing: state.wallet.editing,
  expenses: state.wallet.expenses,
  idEdit: state.wallet.idEdit,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(actionFetchCurrencies()),
  saveExpensives: (expenses) => dispatch(actionSaveExpensives(expenses)),
  saveEditedExpensives: (expenses) => dispatch(actionSaveEditedExpense(expenses)),
  edited: () => dispatch(actionEditedExpense()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
