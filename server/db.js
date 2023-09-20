import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fashcraft2",
  password: "123456789",
  port: 5432,
});

export default pool