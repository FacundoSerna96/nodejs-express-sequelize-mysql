module.exports = {
  HOST: "containers-us-west-88.railway.app",
  USER: "root",
  PORT: "7829",
  PASSWORD: "OhKQf0GLvWH3WtX0jVN3",
  DB: "railway",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
