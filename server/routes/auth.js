import express from "express";
import TB_USER from "../models/auth.config";

const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/login", (req, res) => {
  const {user_id, user_pw} = req.body;
  
  let status = 404;
  let data_list = [];

  const check = (datas) => {
    if (datas.length > 0) {
      let user_info = datas[0].dataValues;

      const token = jwt.sign({
        user_name: user_info.user_name
      }, 'secret', {
        algorithm: 'HS256',
        expiresIn: '10m'
      });

      status = 200;
      data_list.push({
        status: true,
        token: token
      });
    }
  };

  const respond = () => {
    return res.json({status: status, data: data_list});
  };

  const error = (err) => {
    console.warn(err);
  };

  TB_USER.findAll({
    where: {
      user_id: user_id,
      user_pw: user_pw
    }
  })
  .then(check)
  .then(respond)
  .catch(error)
});

router.post("/register", (req, res) => {
  let dataObject = [];

  TB_USER.create({
    user_id: req.body.user_id,
    user_pw: req.body.user_pw,
    user_name: req.body.user_name
  })
  .then(() => {
    dataObject.push({
      status: 200
    });

    return res.json(dataObject);
  })
  .catch(err => {
    console.warn(err);
  });
});

export default router;
