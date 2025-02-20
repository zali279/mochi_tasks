import dotenv from "dotenv";
import env from "env-var";

dotenv.config();

export const config = {
  port: env.get("PORT").default(5000).asIntPositive(),
  databaseUri: env.get("DB_URI").required().asString(),
  frontEndUrl: env.get("FRONT_END_URL").required().asString(),
};
