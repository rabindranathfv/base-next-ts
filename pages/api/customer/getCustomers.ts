import oracledb from 'oracledb';

import dbConfig from "../dbConfig";
import customerMapper from './CustomerMapper';
import { Customer } from "./CustomerModel";

const config = dbConfig();



export default async function getCustomers(){
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const sql = `SELECT * FROM customers`;
    const options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    };

    const result = await conn.execute(sql, {}, options);

    return result.rows?.map( (row) => customerMapper(row) );

  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

