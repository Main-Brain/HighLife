import express from "express";
import TB_TOPIC from "../models/topic.config";

const router = express.Router();

router.get("/", (req, res) => {
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

  TB_TOPIC.findAll()
  .then(check)
  .then(respond)
  .catch(error)
});

export default router;
