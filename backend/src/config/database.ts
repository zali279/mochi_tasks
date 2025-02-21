import { Sequelize } from "sequelize";
import { config } from "./env";

const databaseUrl = config.databaseUri;
console.log(config)
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined");
}
const sequelize = new Sequelize(config.databaseUri, {
  dialect: "postgres",
  protocol: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: true,  
  //     rejectUnauthorized: false, 
  //   },
  // },
  logging: false
});

export default sequelize;
