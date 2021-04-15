import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navigation } from '@/components';

class Timetable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>시간표</h1>
      </div>
    );
  }
}

Timetable.propTypes = {};
Timetable.defaultProps = {};

export default Timetable;
