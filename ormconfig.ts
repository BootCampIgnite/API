import 'dotenv/config';

export default {
  type: 'postgres',
  host: 'localhost',
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['./src/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations',
  },
};
