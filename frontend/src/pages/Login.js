import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {

  state = {
    username: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@GoWeek:username", username)
    this.props.history.push("/timeline");
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form>
          <input
            placeholder="Nome de usuário"
            onChange={e => {
              this.setState({ username: e.target.value })
            }}
          />
          <button type="submit" onClick={this.handleSubmit}>Entrar</button>
        </form>
      </div>
    );
  }
}