import { Sequelize } from "sequelize";
import { config } from "./env";

const sequelize = new Sequelize(config.databaseUri, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,  
      rejectUnauthorized: false, 
    },
  },
  logging: false
});

export default sequelize;