import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT || '5432'),
});

// Function to initialize the database
export const initializeDatabase = async () => {
    const initSqlPath = path.resolve(__dirname, './init.sql');
    const initSql = fs.readFileSync(initSqlPath, 'utf-8');

    try {
        await pool.query(initSql);
        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
};

export default pool;
