const Sequelize = require('sequelize')

const sequelize = new Sequelize('root', 'root', 'root', {
    dialect: 'postgres',
    port: 5432,
    host: "postgres",
    pool: {
        max: 100,
        min: 0,
        idle: 200000,
        // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
        acquire: 1000000,
    },
});

module.exports = sequelize;