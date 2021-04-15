import Sequelize from "sequelize";
import sequelize from "./db_config";

const TB_TOPIC = sequelize.define("tb_topic", {
  idx: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  topic_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

TB_TOPIC.sync()
  .then(() => console.log("Success topic.config."))
  .catch(err => console.log("Fail topic.config. Error:", err));

export default TB_TOPIC;
