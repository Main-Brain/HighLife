import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Board extends Component {
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

  handleLogin(event) {
    event.preventDefault();
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
        <p className="input">
          <input
            name="user_id"
            type="text"
            className="text"
            maxLength="20"
            placeholder="아이디"
            onChange={this.handleChange}
            value={this.state.user_id}
          />
        </p>
        <p className="input">
          <input
            name="user_pw"
            type="password"
            className="text"
            maxLength="20"
            placeholder="비밀번호"
            onChange={this.handleChange}
            value={this.state.user_pw}
          />
        </p>
      </div>
    );

    const loginView = (
      <form onSubmit={this.handleLogin}>
        {inputBoxes}
        <p className="submit">
          <input type="submit" className="text" value="로그인" />
        </p>
        <label className="autologin">
          <input type="checkbox" name="autologin" value="1" />
          로그인 유지
        </label>
        <p className="find">
          <Link to="/forgot">아이디/비밀번호 찾기</Link>
        </p>
        <p className="register">
          <span>하이라이프가 처음이신가요?</span>
          <Link to="/register">회원가입</Link>
        </p>
      </form>
    );

    const registerView = (
      <form onSubmit={this.handleRegister}>
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
        <input type="submit" className="text" value="회원가입" />
      </form>
    );

    return (
      <div id="container">
        {this.props.isMember ? loginView : registerView}
      </div>
    );
  }
}

Board.propTypes = {
  isMember: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

Board.defaultProps = {
  isMember: true,
  onLogin: (user_id, user_pw) => {
    console.error("login function not defined");
  },
  onRegister: (user_id, user_pw, user_name) => {
    console.error("onRegister not defined");
  }
};

export default Board;
