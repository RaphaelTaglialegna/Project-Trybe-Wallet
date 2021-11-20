import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpensives } from '../actions';

class Buttons extends React.Component {
  constructor() {
    super();
    this.deleteExpensives = this.deleteExpensives.bind(this);
  }

  deleteExpensives(id) {
    const { expenses, saveExpensives } = this.props;
    const deletedExpensive = expenses.filter((element) => element.id !== id);
    saveExpensives(deletedExpensive);
  }

  render() {
    const btnClass1 = 'btn btn-outline-dark mx-2';
    const btnClass2 = 'btn btn-danger mx-2';
    const { id } = this.props;
    return (
      <>
        <button type="button" className={ btnClass1 }>
          <i className="bi bi-pencil-square" />
        </button>
        <button
          type="button"
          data-testid="delete-btn"
          className={ btnClass2 }
          id={ id }
          onClick={ () => this.deleteExpensives(id) }
        >
          <i className="bi bi-trash-fill" />
        </button>
      </>
    );
  }
}

Buttons.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  saveExpensives: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpensives: (expenses) => dispatch(actionDeleteExpensives(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
