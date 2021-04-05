import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      user_pw: "",
      user_re_pw: "",
      user_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleLogin() {
    let user_id = this.state.user_id;
    let user_pw = this.state.user_pw;
    this.props.onLogin(user_id, user_pw).then(res => {
      if (!res) {
        this.setState({
          user_pw: ""
        });
      }
    });
  }

  handleRegister() {
    let user_id = this.state.user_id;
    let user_pw = this.state.user_pw;
    let user_name = this.state.user_name;
    this.props.onRegister(user_id, user_pw, user_name).then(res => {
      if (!res) {
        this.setState({
          user_pw: "",
          user_re_pw: ""
        });
      }
    });
  }

  render() {
    const inputBoxes = (
      <div>
        <input
          name="user_id"
          type="text"
          placeholder="아이디(이메일)"
          onChange={this.handleChange}
          value={this.state.user_id}
        />
        <br />
        <input
          name="user_pw"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChange}
          value={this.state.user_pw}
        />
      </div>
    );

    const loginView = (
      <div>
        {inputBoxes}
        <button type="submit" onClick={this.handleLogin}>
          로그인
        </button>
        <br />
        <Link to="/register">회원가입</Link>
      </div>
    );

    const registerView = (
      <div>
        {inputBoxes}
        <input
          name="user_re_pw"
          type="password"
          placeholder="비밀번호 재확인"
          onChange={this.handleChange}
          value={this.state.user_re_pw}
        />
        {this.state.user_pw == this.state.user_re_pw ? (
          ""
        ) : (
          <div>비밀번호가 일치하지 않습니다.</div>
        )}
        <br />
        <input
          name="user_name"
          type="text"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.user_name}
        />
        <br />
        <button type="submit" onClick={this.handleRegister}>
          회원가입
        </button>
      </div>
    );

    return (
      <div>
        <h1>{this.props.isMember ? loginView : registerView}</h1>
      </div>
    );
  }
}

Authentication.propTypes = {
  isMember: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

Authentication.defaultProps = {
  isMember: true,
  onLogin: (user_id, user_pw) => {
    console.error("login function not defined");
  },
  onRegister: (user_id, user_pw, user_name) => {
    console.error("onRegister not defined");
  }
};

export default Authentication;
