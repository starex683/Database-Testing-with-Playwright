import { pool } from './DbConnection';

export class Database {

    static async execute(query: string, values?: any[]) {
        const [rows] = await pool.execute(query, values);
        return rows;
    }

}