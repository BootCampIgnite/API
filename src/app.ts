import express from 'express';
import swaggerUI from 'swagger-ui-express';

import routes from './routes';
import ApiSchema from './shared/docs/swagger.json';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(ApiSchema));

export { app };
