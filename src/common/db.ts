import { denodb } from "../../debs.ts";
import configs from "../config/settings.ts";

const { Database, MySQLConnector } = denodb;
const connection = new MySQLConnector({
  database: configs.dbName,
  host: configs.dbHost,
  username: configs.dbUsername,
  password: configs.dbPassword,
  port: 3306,
});

const db = new Database(connection);

export default db;
