import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';

const linkTrybe = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca4630bc5747_Logo.svg';

class Header extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { email, expenses, currencies } = this.props;
    const totalExpenses = parseFloat(expenses.reduce((acc, curr) => {
      const { currency, exchangeRates } = curr;
      const cotation = exchangeRates[currency].ask;
      const moeda = parseInt(curr.value, Number) * cotation;
      return acc + moeda;
    }, 0)).toFixed(2);
    return (
      <header className="navbar navbar-light bg-light">
        <div className="navbar-brand d-flex flex-row" href="#">
          <img
            src={ linkTrybe }
            className="d-inline-block align-top mx-3"
            alt=""
          />
          <h2>Wallet</h2>
        </div>
        <div className="navbar-brand d-flex flex-row w-50" href="#">

          <Marquee>
            {
              Object.entries(currencies).map((currency) => (
                <h6 key={currency[1].code } className="text-success">
                  {currency[1].code}
                  &nbsp;-&nbsp;$
                  {currency[1].ask}
                  &nbsp;,&nbsp;&nbsp;
                </h6>

              ))
            }
          </Marquee>

        </div>
        <form className="form-inline d-flex flex-row mx-3">
          <div className=" mr-sm-2" data-testid="email-field">
            E-mail: &nbsp;
            { email }
          </div>
          <div className="  d-flex mx-3">
            Despesa Total: &nbsp;
            <h6 data-testid="total-field">
              {' '}
              R$
              { totalExpenses }
            </h6>
          </div>
          <div className=" mx-3" data-testid="header-currency-field">
            BRL
          </div>
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
