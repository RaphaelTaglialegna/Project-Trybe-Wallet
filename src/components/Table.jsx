import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

        </tbody>
      </table>

    );
  }
}

export default Table;

// const { email, expenses } = this.props;
//     const totalExpenses = parseFloat(expenses.reduce((acc, curr) => {
//       const { currency, exchangeRates } = curr;
//       const cotation = exchangeRates[currency].ask;
//       const moeda = parseInt(curr.value, Number) * cotation;
//       return acc + moeda;
//     }, 0)).toFixed(2);
//     return (
//       <header className="navbar navbar-light bg-light">
//         <div className="navbar-brand d-flex flex-row" href="#">
//           <img
//             src={ linkTrybe }
//             className="d-inline-block align-top mx-3"
//             alt=""
//           />
//           <h2>Wallet</h2>
//         </div>
//         <form className="form-inline d-flex flex-row mx-3">
//           <div className=" mr-sm-2" data-testid="email-field">
//             E-mail: &nbsp;
//             { email }
//           </div>
//           <div className="  d-flex mx-3">
//             Despesa Total: &nbsp;
//             <h6 data-testid="total-field">
//               {' '}
//               R$
//               { totalExpenses }
//             </h6>
//           </div>
//           <div className=" mx-3" data-testid="header-currency-field">
//             BRL
//           </div>
//         </form>
//       </header>
//     );
//   }
// }

// Header.propTypes = {
//   email: PropTypes.string.isRequired,
//   expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// const mapStateToProps = (state) => ({
//   email: state.user.email,
//   expenses: state.wallet.expenses,
// });

// export default connect(mapStateToProps)(Header);
