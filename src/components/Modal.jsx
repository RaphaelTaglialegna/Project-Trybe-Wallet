import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import { actionEditExpense, actionEditedExpense } from '../actions';

class MyVerticallyCenteredModal extends React.Component {
  render() {
    const { id, edit, edited } = this.props;
    return (
      <>
        <button
          type="button"
          className="btn btn-outline-dark mx-2"
          data-testid="edit-btn"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={ () => edit(id) }
        >
          <i className="bi bi-pencil-square" />
        </button>
        <div
          className="modal"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Despesa</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={ () => edited() }
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={ () => edited() }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

MyVerticallyCenteredModal.propTypes = {
  edit: PropTypes.func.isRequired,
  edited: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  edit: (id) => dispatch(actionEditExpense(id)),
  edited: () => dispatch(actionEditedExpense()),
});

export default connect(null, mapDispatchToProps)(MyVerticallyCenteredModal);
