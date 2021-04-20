import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BoardList = props => {
  const topic_idx = props.topic_idx;
  const board_list = props.board_list.filter((data) => {
    return data.fk_topic_idx === topic_idx;
  })

  return (
    <div className="board">
      {console.log(board_list)}
    {board_list.map((value, key) =>
      <Link to="/" key={key}>
        {value.board_title}
        <p>{value.views}</p>
      </Link>
    )}
    </div>
  );
}

BoardList.propTypes = {
  topic_idx: PropTypes.number,
  board_list: PropTypes.array
};

BoardList.defaultProps = {
  topic_idx: 0,
  board_list: ''
};

export default BoardList;
