const express = require('express');
const { Client } = require('pg');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())

const client = new Client({
    user: "postgres",
    password: "sofia2004",
    host: "localhost",
    port: 5432,
    database: "beer"
});

app.get('/data', async (req, res) => {
    try {
        await client.connect();
        const result = await client.query("SELECT * FROM beertype");
        res.json(result.rows);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.end();
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
