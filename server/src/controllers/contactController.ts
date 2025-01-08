import { Request, Response } from 'express';
import pool from '../db';

export const submitContactForm = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    try {
        await pool.query(
            'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        );
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
