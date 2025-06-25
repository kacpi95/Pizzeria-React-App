import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const router = jsonServer.router('dist/db/app.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/tables', middlewares, router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
