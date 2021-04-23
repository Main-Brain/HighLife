import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BoardList = props => {
  const topic_idx = props.topic_idx;

  let board_list_count = 5;
  const board_list = props.board_list.filter((data) => {
    board_list_count -= 1;
    return data.fk_topic_idx === topic_idx && board_list_count >= -1;
  })

  return (
    <div className="topic-list">
      {board_list.map((value, key) =>
        <Link to={`/board/${value.idx}`} key={key} className="list">
          <span className="title">{value.board_title}</span>
          <span className="views">{value.views}</span>
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
