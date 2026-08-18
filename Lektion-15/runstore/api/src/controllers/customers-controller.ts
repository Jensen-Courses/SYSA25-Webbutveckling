import { Request, Response } from 'express';
import { db } from '../db';

export const addCustomer = async (req: Request, res: Response) => {
    try {
        // const data = { ...req.body };
        const customer = await db.customer.create({ data: { ...req.body } });
        // const customer = await db.customer.create({ data: data });
        res.status(201).json({ success: true, statusCode: 201, data: customer });
    } catch (error: any) {
        res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }

};

export const addCustomerAddress = async (req: Request, res: Response) => {
    try {
        const { customerId, addressLine, postalCode, city } = { ...req.body };

        const address = await db.address.create({
            data: {
                customerId: customerId,
                addressLine: addressLine,
                postalCode: postalCode,
                city: city
            }
        });

        res.status(201).json({ success: true, statusCode: 201, data: address });
    } catch (error: any) {
        res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }
};

export const listAllCustomers = async (req: Request, res: Response) => {
    const customers = await db.customer.findMany({ include: { addresses: true } });
    res.status(200).json({ success: true, statusCode: 200, data: customers });
};