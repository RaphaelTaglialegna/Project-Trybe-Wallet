import PropTypes from 'prop-types';
import React from 'react';
import Selects from './Selects';

class ComponentsForm extends React.Component {
  render() {
    const classLabel = 'col mx-2 d-flex align-items-center justify-content-center';
    const { onChange, value, description, method, tag } = this.props;
    return (
      < >
        <label className={ classLabel } htmlFor="value" onChange={ onChange }>
          <h6>Valor:&nbsp;&nbsp; </h6>
          <input
            data-testid="value-input"
            className="form-control"
            id="value"
            type="number"
            value={ value }
          />
        </label>
        <Selects
          method={ method }
          tag={ tag }
          onChange={ onChange }
        />
        <label className={ classLabel } htmlFor="description" onChange={ onChange }>
          <h6>Descrição:&nbsp;</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Descrição"
            id="description"
            data-testid="description-input"
            value={ description }
          />
        </label>
      </>
    );
  }
}

ComponentsForm.propTypes = {
  description: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default ComponentsForm;
