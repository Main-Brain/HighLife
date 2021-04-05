import React from "react";
import { Authentication } from "../components";
import { connect } from "react-redux";
import { loginRequest } from "../actions/authentication";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user_id, user_pw) {
    return this.props.loginRequest(user_id, user_pw).then(() => {
      if (this.props.status === "SUCCESS") {
        let loginData = {
          isLoggedIn: true,
          user_id: user_id
        };

        alert("로그인 성공");
        this.props.history.push("/");
        return true;
      } else {
        alert("로그인 실패");
        return false;
      }
    });
  }

  render() {
    return (
      <div>
        <Authentication isMember={true} onLogin={this.handleLogin} />
        {/* <Redirect to="/" />; */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.authentication.login.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (user_id, user_pw) => {
      return dispatch(loginRequest(user_id, user_pw));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
