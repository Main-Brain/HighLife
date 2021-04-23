import express from "express";
import Sequelize from "sequelize";
import TB_BOARD from "../models/board.config";
import TB_TOPIC from "../models/topic.config";

const router = express.Router();

router.get("/", (req, res) => {
  const { board_idx } = req.query;
  let result = false;
  let data_list = [];
  let filter = {};

  const check = (datas) => {
    if (datas.length > 0) {
      result = true;
      for (let i in datas) {
        data_list.push(datas[i].dataValues);
      }
    }
  };

  const respond = () => {
    return res.json({result: result, data: data_list});
  };

  const error = (err) => {
    console.warn(err);
  };
  
  if (board_idx !== undefined) {
    filter = { idx: board_idx }
  }

  TB_BOARD.findAll({
    where: filter,
    include: [
      {
        model: TB_TOPIC,
        required: false,
        attributes: ['idx', 'topic_name'],
      }
    ]
  })
  .then(check)
  .then(respond)
  .catch(error)
});

export default router;
