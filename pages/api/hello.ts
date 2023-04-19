// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import oracledb from 'oracledb';
import dbConfig from './dbConfig'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method)
  const config = dbConfig();

  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      'select current_timestamp from dual'
    );
    console.log(result);
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
  res.status(200).json({ name: 'John Doe' })
}
