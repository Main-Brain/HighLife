import express from "express";
import TB_BOARD from "../models/board.config";

const router = express.Router();

router.get("/", (req, res) => {
  // const {user_id, user_pw} = req.body;
  
  let status = 404;
  let data_list = [];

  const check = (datas) => {
    if (datas.length > 0) {
      status = 200;
      // console.log(datas);
      for (let i in datas) {
        data_list.push(datas[i].dataValues);
      }
    }
  };

  const respond = () => {
    return res.json({status: status, data: data_list});
  };

  const error = (err) => {
    console.warn(err);
  };

  TB_BOARD.findAll()
  .then(check)
  .then(respond)
  .catch(error)
});

export default router;
