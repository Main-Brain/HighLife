import Sequelize from "sequelize";
import sequelize from "./db_config";
import TB_TOPIC from "./topic.config";
import TB_USER from "./auth.config";

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
  fk_topic_idx: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  board_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  board_content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  file: {
    type: Sequelize.STRING
  },
  fk_user_idx: {
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
  .then(() => {
    TB_BOARD.belongsTo(TB_TOPIC, {foreignKey: 'fk_topic_idx', targetKey: 'idx'});
    TB_BOARD.belongsTo(TB_USER, {foreignKey: 'fk_user_idx', targetKey: 'idx'});
    console.log("Success board.config.");
  })
  .catch(err => console.log("Fail board.config. Error:", err));

export default TB_BOARD;
