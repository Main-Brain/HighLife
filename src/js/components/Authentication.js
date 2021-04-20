import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Authentication = props => {
  const [values, setValues] = useState({ user_id: "", user_pw: "", user_re_pw: "", user_name: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let user_id = values.user_id;
    let user_pw = values.user_pw;
    props.onLogin(user_id, user_pw).then(res => {
      if (!res) {
        setValues({ ...values, user_pw: "" });
      }
    });
  }

  const handleRegister = () => {
    // let user_id = this.state.user_id;
    // let user_pw = this.state.user_pw;
    // let user_name = this.state.user_name;
    // this.props.onRegister(user_id, user_pw, user_name).then(res => {
    //   if (!res) {
    //     this.setState({
    //       user_pw: "",
    //       user_re_pw: ""
    //     });
    //   }
    // });
  }

  const inputBoxes = (
    <div>
      <p className="input">
        <input
          name="user_id"
          type="text"
          className="text"
          maxLength="20"
          placeholder="아이디"
          onChange={handleChange}
          value={values.user_id}
        />
      </p>
      <p className="input">
        <input
          name="user_pw"
          type="password"
          className="text"
          maxLength="20"
          placeholder="비밀번호"
          onChange={handleChange}
          value={values.user_pw}
        />
      </p>
    </div>
  );

  const loginView = (
    <form onSubmit={handleLogin}>
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
    <form onSubmit={handleRegister}>
      {inputBoxes}
      <input
        name="user_re_pw"
        type="password"
        placeholder="비밀번호 재확인"
        onChange={handleChange}
        value={values.user_re_pw}
      />
      {values.user_pw == values.user_re_pw ? (
        ""
      ) : (
        <div>비밀번호가 일치하지 않습니다.</div>
      )}
      <br />
      <input
        name="user_name"
        type="text"
        placeholder="이름"
        onChange={handleChange}
        value={values.user_name}
      />
      <br />
      <input type="submit" className="text" value="회원가입" />
    </form>
  );

  return (
    <div id="container" className="login">
      {props.isMember ? loginView : registerView}
    </div>
  );
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
