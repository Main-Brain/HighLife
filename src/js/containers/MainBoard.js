import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Navigation, BoardList } from '@/components';
import { topicList } from "@/actions/topic";
import { boardList } from "@/actions/board";

const MainBoard = props => {
  const topic_list = useSelector(state => state.topic.list);
  const board_list = useSelector(state => state.board.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topicList());
  }, []);

  useEffect(() => {
    dispatch(boardList());
  }, []);

  return (
    <div>
      <Navigation />

      <div id="container" className="mainboard">
        {topic_list.data.map((value, key) =>
          <div key={key}>
            <h2>
              {value.topic_name}
            </h2>
            <BoardList topic_idx={value.idx} board_list={board_list.data}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainBoard;
