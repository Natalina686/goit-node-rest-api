import app from "./app.js";
import sequelize from "./db/db.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");

    await sequelize.sync();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

} catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

startServer();