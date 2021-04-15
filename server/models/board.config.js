import Sequelize from "sequelize";
import sequelize from "./db_config";

const TB_BOARD = sequelize.define("tb_board", {
  idx: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  board_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  depth: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  topic_idx: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  board_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  board_content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  file: {
    type: Sequelize.STRING
  },
  user_idx: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  views: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  create_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  update_date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

TB_BOARD.sync()
  .then(() => console.log("Success board.config."))
  .catch(err => console.log("Fail board.config. Error:", err));

export default TB_BOARD;
