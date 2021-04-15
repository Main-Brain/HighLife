import React from "react";
import { Authentication } from "@/components";
import { connect } from "react-redux";
import { getTopic } from "@/actions/topic";
import { Navigation } from '@/components';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(1);
  };

  render() {
    return (
      <div>
        <Navigation />
        <h1>메인 페이지</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopic: () => {
      return dispatch(getTopic(user_id, user_pw));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
