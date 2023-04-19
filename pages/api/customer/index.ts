// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createCustomer from './createCustomer';
import { Customer, CustomerDTO } from './CustomerModel';
import getCustomers from './getCustomers';

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[] | Customer | Error>
) {

  switch (req.method) {
    case 'GET':
      const customers = await getCustomers();
      res.status(200).json(customers as Customer[])
      break;
    
    case 'POST':
      const body: CustomerDTO = {
        customer_id: req.body.id,
        customer_name: req.body.name,
        city: req.body.city
      }
      const customer = await createCustomer(body);
      res.status(200).json(customer as Customer)
      break;
  
    default:
      res.status(405).json({ message: 'Method not Allowned' })
      break;
  }
}

