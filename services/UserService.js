const User = require('../module/User')

exports.login = async function(email, pwd){
    const res = await User.findOne({
        where:{
            email,
            password: pwd
        }
    })
    return res;
    // console.log(res.toJSON());
}
exports.logon = async function(user){
    const u = await User.create(user);
    console.log(u.toJSON()+'保存数据库成功');
}