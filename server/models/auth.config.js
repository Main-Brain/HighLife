import Sequelize from "sequelize";
import sequelize from "./db_config";

const TB_USER = sequelize.define("tb_user", {
  idx: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_pw: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_nickname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  school_auth: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  school_name: {
    type: Sequelize.STRING
  }
});

TB_USER.sync()
  .then(() => console.log("Success auth.config."))
  .catch(err => console.log("Fail auth.config. Error:", err));

export default TB_USER;
