import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './login.scss';

class Home extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.login();
  };

  render() {
    const { password, email, setEmail, setPassword } = this.props;

    return (
      <div className="login">
        <Helmet title="Login" />
        <form className="login__form" onSubmit={this.onSubmit}>
          <input className="login__email" value={email} onChange={setEmail} />
          <input className="login__password" value={password} onChange={setPassword} />
          <button type="submit">Submit</button>
        </form>
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
