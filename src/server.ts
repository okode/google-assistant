import { WelcomeController } from './controllers';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app: express.Application = express.default();
const port = 3000;

app.use(bodyParser.json());
app.use('/welcome', WelcomeController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});