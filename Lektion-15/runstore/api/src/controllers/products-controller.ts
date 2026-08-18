import { Request, Response } from 'express';
import { db } from '../db';

export const listAllProducts = async (req: Request, res: Response) => {
    const products = await db.product.findMany();
    res.status(200).json({ success: true, statusCode: 200, data: products });
};

export const findProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await db.product.findUnique({
        where: {
            id: id as string
        }
    });

    if (!product) return res.status(404).json({ success: false, statusCode: 404, message: 'No product found' });

    res.status(200).json({ success: true, statusCode: 200, data: product });
};