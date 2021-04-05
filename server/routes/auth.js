import express from "express";
import TB_USER from "../models/user";

const router = express.Router();

router.post("/login", (req, res) => {
  let dataObject = [];

  TB_USER.findAll({
    where: {
      user_id: req.body.user_id,
      user_pw: req.body.user_pw
    }
  })
    .then(data => {
      // user[0].dataValues
      if (data[0]) {
        dataObject.push({
          status: 200
        });
      } else {
        dataObject.push({
          status: 401
        });
      }

      return res.json(dataObject);
    })
    .catch(err => {
      console.warn(err);
    });
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
