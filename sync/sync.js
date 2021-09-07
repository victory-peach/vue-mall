require('../module/User');
require('../module/Product');
require('../module/Category.js');
require('../module/product_category_relation.js');

const sequelize = require('../sequelize/sequelize')
sequelize.sync({ alter: true }).then(()=>{
    console.log("所有模型均已成功同步.")
});
