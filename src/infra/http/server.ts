import 'dotenv/config';
import { app } from './app';

app.listen(process.env.API_PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.API_PORT}`);
});
