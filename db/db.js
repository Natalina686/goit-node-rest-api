import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "db_contacts_caz9",
    "db_contacts_caz9_user",
    "r6uj0HmbKz01UTmSm7CaRnSjdwZAgSrN",
    {
        host: "dpg-d4ivoceuk2gs73bh19kg-a.oregon-postgres.render.com",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

export default sequelize;