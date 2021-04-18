import express from 'express';

import { categoriesRouter } from './routes/catregories.routes';
import { specificationRouter } from './routes/specification.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specifications', specificationRouter);

app.listen(3333, () => {
  console.log('Servidor rodando!');
});
