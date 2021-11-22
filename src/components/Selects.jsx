import PropTypes from 'prop-types';
import React from 'react';

class Selects extends React.Component {
  render() {
    const classLabel = 'col mx-2 d-flex align-items-center justify-content-center';
    const { onChange, method, tag } = this.props;
    return (
      <>
        <label className={ classLabel } htmlFor="method" onChange={ onChange }>
          <h6>Método de pagamento:&nbsp;</h6>
          <select
            data-testid="method-input"
            className="custom-select mr-2"
            id="method"
            value={ method }
          >
            <option> - </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label className={ classLabel } htmlFor="tag" onChange={ onChange }>
          <h6>Tag:&nbsp;</h6>
          <select
            data-testid="tag-input"
            className="custom-select mr-sm-2"
            id="tag"
            value={ tag }
          >
            <option> - </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Selects.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
export default Selects;
