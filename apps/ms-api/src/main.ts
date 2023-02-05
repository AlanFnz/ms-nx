import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';

// data set
import { links } from './data/links';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/links', (req, res) => {
  res.send(links);
});

app.get('/', (req, res) => {
  res.send({ message: 'all good!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
