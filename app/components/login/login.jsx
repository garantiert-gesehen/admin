import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../button/button.jsx';
import Input from '../input/input.jsx';

import './login.scss';

class Home extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.login();
  };

  render() {
    const { password, email, setEmail, setPassword, error, loading } = this.props;

    return (
      <div className="login">
        <Helmet title="Login" />
        <div className="login__island">
          <form className="login__form" onSubmit={this.onSubmit}>
            <Input
              hint="E-mail"
              className="login__email"
              value={email}
              onChange={setEmail}
            />
            <Input
              hint="Password"
              type="password"
              className="login__password"
              value={password}
              onChange={setPassword}
            />
            <div className="login__error">
              {error}
            </div>
            <Button className="login__submit" primary type="submit" disabled={loading}>
              {loading ? 'Signing…' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  login: PropTypes.func
};

export default Home;
