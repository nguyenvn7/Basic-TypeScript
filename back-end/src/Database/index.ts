import mysql, { Connection, Pool } from "mysql";

export class DB {
  private static __instance: Pool;
  private constructor() {}

  public static getInstance() {
    if (this.__instance == null) {
      const pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: 10,
      });
      return (this.__instance = pool);
    }
    return this.__instance;
  }
}
