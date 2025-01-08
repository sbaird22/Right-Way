import pool from '../db/db';

// Define the Contact data type for TypeScript
export interface Contact {
    id?: number; // Optional because it will be auto-generated
    name: string;
    email: string;
    message: string;
    created_at?: Date; // Optional because it's auto-generated
}

// Function to create a new contact entry
export const createContact = async (contact: Contact): Promise<Contact> => {
    const query = `
        INSERT INTO contacts (name, email, message)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, message, created_at
    `;
    const values = [contact.name, contact.email, contact.message];

    const result = await pool.query(query, values);
    return result.rows[0]; // Return the inserted contact record
};

// Function to fetch all contact entries (if needed for admin or analytics)
export const getAllContacts = async (): Promise<Contact[]> => {
    const query = 'SELECT * FROM contacts ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
};
