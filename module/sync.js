const sequelize = require('./init.js');
require('./List.js');
require('./Movie.js');
require('./Recommend.js');
sequelize.sync({ alter: true }).then(() => {
    console.log('所有模型均已同步')
})