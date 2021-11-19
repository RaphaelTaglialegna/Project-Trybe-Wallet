import PropTypes from 'prop-types';
import React from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import './Login.css';
import saveEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errorEmail: false,
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendUser = this.sendUser.bind(this);
  }

  // Requisito 2 - validando estado do email e senha
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (name === 'email') {
      this.validateEmail(value);
    }
  }

  // Email Validation - https://www.geeksforgeeks.org/how-to-validate-an-email-in-reactjs/
  // Foi usada um módulo do React JS que valida emails, do codigo original foram feitas algumas modificações.
  validateEmail(email) {
    if (validator.isEmail(email)) {
      this.setState({
        errorEmail: true,
      });
    } else {
      this.setState({
        errorEmail: false,
      });
    }
  }

  // Função de Redirecionamento ao Clicar no Botão.
  sendUser() {
    const { history, emailUser } = this.props;
    const { email } = this.state;
    emailUser(email);
    history.push('/carteira');
  }

  render() {
    const maxLength = 6;
    const { errorEmail, password } = this.state;
    const valid = password.length >= maxLength && errorEmail === true;
    return (
      <form className="form_control">
        <div className="form-row">
          TrybeWallet
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">
              Email
              <input
                data-testid="email-input"
                type="email"
                name="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                // onChange={(e) => this.validateEmail(e)}
                onChange={ this.handleChange }
              />
            </label>
            <span>{errorEmail}</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">
              Password
              <input
                data-testid="password-input"
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={ !valid }
            onClick={ () => this.sendUser() }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  emailUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  emailUser: (value) => dispatch(saveEmail(value)),
});

export default connect(null, mapDispatchtoProps)(Login);
