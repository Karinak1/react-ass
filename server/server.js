import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// app.get('/', function (request, response) {
//   response.json('You are looking at my route route. How roude!');
// });

app.get('/', async function (request, response) {
  const result = await db.query(`
SELECT 
wines.id,
wines.town,
wines.country,
ARRAY_AGG(categories.name) AS categories
FROM wines
JOIN category_wine ON wines.id = category_wine.wine_id
JOIN categories    ON category_wine.category_id = categories.id
GROUP BY wines.id, wines.town, wines.country`);

  const wines = result.rows;

  response.json(wines);
});

app.listen(8080, () => console.log('app is running on 8080'));
