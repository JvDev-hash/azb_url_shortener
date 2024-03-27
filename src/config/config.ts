import { Dialect } from "sequelize";

require('dotenv/config');

export default {
  dialect: 'postgres' as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
  define: {
    timestamps: true,
  },
};