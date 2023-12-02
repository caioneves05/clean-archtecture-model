import 'reflect-metadata';

import express from 'express';
import { router } from './server/routes';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});