import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { boardList } from "@/actions/board";

const BoardDetail = props => {
  const board_idx = props.board_idx;

  const board_list = useSelector(state => state.board.list.data[0]);
  const dispatch = useDispatch();
  console.log(board_list);

  useEffect(() => {
    dispatch(boardList(board_idx));
  }, []);

  return (
    <div className="content">
      {board_list === undefined ?
        <div>없음</div> :
        <div className="article">
          <div className="article-head">
            {board_list.tb_topic.topic_name}
            {board_list.board_title}
          </div>
        </div>
      }
    </div>
  );
}

BoardDetail.propTypes = {
  board_idx: PropTypes.number
};

BoardDetail.defaultProps = {
  board_idx: 0
};

export default BoardDetail;
