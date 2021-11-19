import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Form from '../components/form';
import { actionFetchCurrencies } from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(actionFetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Wallet);
