import { Customer } from "./CustomerModel";

export default function customerMapper(value: unknown): Customer | false {
    if (value instanceof Object) {
        const customer: Customer = {
            customer_id: (value as any).CUSTOMER_ID,
            customer_name: (value as any).CUSTOMER_NAME,
            city: (value as any).CITY
        }
        return customer;
    }
    return false;
}