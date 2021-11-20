import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            ? (expenses.map((expense) => {
              const { currency, exchangeRates } = expense;
              return (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{expense.value}</td>
                  <td>{exchangeRates[currency].name }</td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>
                    { parseFloat(exchangeRates[currency].ask * expense.value).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <Buttons id={ expense.id } />
                  </td>
                </tr>
              );
            }))
            : null}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
