import oracledb from 'oracledb';

import dbConfig from "../dbConfig";
import { Customer, CustomerDTO } from "./CustomerModel";

const config = dbConfig();



export default async function createCustomer(customer: CustomerDTO) {
  let conn;

  try {

    conn = await oracledb.getConnection(config);
    const sql = `INSERT INTO customers (customer_id, customer_name, city) VALUES (:1, :2, :3)`;
    const binds = [customer.customer_id, customer.customer_name, customer.city];

    const options = {
      autoCommit: true,
      bindDefs: [
        { type: oracledb.NUMBER },
        { type: oracledb.STRING, maxSize: 50 },
        { type: oracledb.STRING, maxSize: 50 }
      ]
    };

    const result = await conn.execute(sql, binds, options);
    
    console.log(result);
    
    return customer

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