import React from "react"
import { Navigation, BoardDetail } from '@/components';

const Post = props => {
  return (
    <div>
      <Navigation />

      <section id="container" className="mainboard">
        <BoardDetail board_idx={Number(props.match.params.board_idx)} />
        {/* <div className="main">
          {topic_list.data.map((value, key) =>
            <div key={key} className="board">
              <h2>
                {value.topic_name}
              </h2>
              <BoardList topic_idx={value.idx} board_list={board_list.data}/>
            </div>
          )}
        </div> */}
      </section>
    </div>
  );
}

export default Post;
