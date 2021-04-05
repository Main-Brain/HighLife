import React from "react";
import { Authentication } from "../components";
import { connect } from "react-redux";
import { registerRequest } from "../actions/authentication";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(user_id, user_pw, user_name) {
    return this.props.registerRequest(user_id, user_pw, user_name).then(() => {
      if (this.props.status === "SUCCESS") {
        alert("회원가입 성공");
        this.props.history.push("/login");
        return true;
      } else {
        alert("회원가입 실패");
        return false;
      }
    });
  }

  render() {
    return (
      <div>
        <Authentication isMember={false} onRegister={this.handleRegister} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.authentication.register.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: (user_id, user_pw, user_name) => {
      return dispatch(registerRequest(user_id, user_pw, user_name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
