module.exports = {
  HOST: "35.192.104.228",
  USER: "postgres",
  PASSWORD: "ashikurpostgres",
  DB: "nodejs-test",
  PGPORT: 5432,
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
