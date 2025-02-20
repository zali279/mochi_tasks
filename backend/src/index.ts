import app from "./app";
import { config } from "./config/env";
import sequelize from "./config/database";

const startServer = async () => {
  try {
    console.log("\n [server] Connecting to database...");
    await sequelize.authenticate();
    console.log("\n [server] Database connection has been established successfully");

    await sequelize.sync();

    app.listen(config.port, () => {
      console.log(`\n [server] Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("\n [server] Database connection error:", error);
  }
};

startServer();
