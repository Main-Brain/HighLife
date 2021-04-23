import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Navigation, BoardList } from '@/components';
import { topicList } from "@/actions/topic";
import { boardList } from "@/actions/board";

const MainBoard = props => {
  const topic_list = useSelector(state => state.topic.list.data);
  const board_list = useSelector(state => state.board.list.data);
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

      <section id="container" className="mainboard">
        <div className="main">
          {topic_list.map((value, key) =>
            <div key={key} className="board">
              <h2>
                {value.topic_name}
              </h2>
              <BoardList topic_idx={value.idx} board_list={board_list}/>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MainBoard;
