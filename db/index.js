const pg = require("pg");

const pgConfig = {
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_SERVER_PORT,
};

const pool = new pg.Pool(pgConfig);

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
