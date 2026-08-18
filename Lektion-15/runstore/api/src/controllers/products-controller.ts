import { Request, Response } from 'express';
import { db } from '../db';

export const addProduct = async (req: Request, res: Response) => {
    try {
        const data = { ...req.body };
        const product = await db.product.create({
            data: data
        });

        res.status(201).json({ success: true, statusCode: 201, data: product });
    } catch (error: any) {
        res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { price } = req.body;

        const product = await db.product.findUnique({ where: { id: id as string } });
        if (!product) return res.status(404).json({ success: false, statusCode: 404, message: 'Product not found' });

        await db.product.update({
            where: { id: id as string },
            data: {
                price: +price!
            }
        });

        res.status(204).end();

    } catch (error: any) {
        res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }
};

export const removeProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // const id = req.params.id;

        await db.product.delete({ where: { id: id as string } });

        res.status(204).end();
    } catch (error: any) {
        res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }
};

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