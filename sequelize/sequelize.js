const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mall','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})
// async function test(){
//  try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// }
// test();
module.exports = sequelize