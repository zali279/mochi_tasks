import Sequelize, { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("todo", "in-progress", "done", "blocked"),
    defaultValue: "todo",
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Task;
