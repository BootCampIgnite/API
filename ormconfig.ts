import 'dotenv/config';

export default {
  type: 'postgres',
  host: 'localhost',
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['src/modules/model/**/*.ts'],
  migrations: ['src/infra/database/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};
