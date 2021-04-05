import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>메인 페이지</h1>
      </div>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
