import React, { useEffect } from "react"
import { Authentication } from "@/components";
import { useDispatch } from "react-redux";
import { login } from "@/actions/authentication";

const Login = props => {
  const dispatch = useDispatch();

  const handleLogin = (user_id, user_pw) => {
    return dispatch(login(user_id, user_pw))
      .then((res) => {
        if (res) {
          props.history.push("/");
        }

        return res;
      })
  }

  return (
    <div>
      <Authentication isMember={true} onLogin={handleLogin} />
    </div>
  );
}

export default Login;
