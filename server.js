import dotenv from "dotenv";
dotenv.config();


import app from "./app.js";
import sequelize from "./db/db.js";

import User from "./models/userModel.js";
import Contact from "./models/contact.js";

User.hasMany(Contact, { foreignKey: "owner", onDelete: "CASCADE" });
Contact.belongsTo(User, { foreignKey: "owner" });

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");

    await sequelize.sync({ alter: true });

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

} catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

startServer();