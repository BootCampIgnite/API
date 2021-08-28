import { createConnection, getConnectionOptions, Connection } from 'typeorm';

getConnectionOptions().then(options => {
  createConnection({
    ...options,
  })
    .then((connection: Connection) => {
      console.log(`🟩 Database ${connection.name} Connection Successful!`);
    })
    .catch((error: Error) => {
      console.log(`🟥 Database ${error.message} Connection failed!`);
    });
});
