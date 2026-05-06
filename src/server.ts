import app from "./app";
import { testDbConnection } from "./config/db";
import { connectRedis } from "./config/redis";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

async function startServer() {
  try {
    await testDbConnection();
    await connectRedis();

    app.listen(PORT, () => {
      console.log(`taste-api running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
