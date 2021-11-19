import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ComponentsForm from './componentsForm';
import { actionFetchCurrencies, actionSaveExpensives } from '../actions';

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
  }

  handleChange({ target }) {
    const { id, value } = target;
    const { currencies } = this.props;
    this.setState({
      [id]: value,
      exchangeRates: currencies,
    });
  }

  saveExpensives() {
    const { getCurrencies, saveExpensives } = this.props;
    const { id } = this.state;
    getCurrencies();
    saveExpensives(this.state);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <nav className="navbar navbar-light bg-light px-4 align-items-center">
        <label
          className="mx-2 d-flex align-items-center justify-content-center"
          htmlFor="currency"
        >
          <h6>Moeda:&nbsp;</h6>
          <select
            className="custom-select mr-sm-2"
            id="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {Object.entries(currencies).map((item) => (
              item[0] !== 'USDT'
                ? (
                  <option
                    key={ item[1].code }
                    value={ item[1].code }
                  >
                    {item[1].code}
                  </option>)
                : null))}
          </select>
        </label>
        <ComponentsForm onChange={ this.handleChange } />
        <div className="mx-2 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={ () => this.saveExpensives() }
          >
            Adicionar despesa
          </button>
        </div>
      </nav>
    );
  }
}

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  saveExpensives: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(actionFetchCurrencies()),
  saveExpensives: (expenses) => dispatch(actionSaveExpensives(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
