const mysql = require('../config/mysql')
const userSchema = '../schema/user'; // 引入user的表结构
const User = mysql.import(userSchema);// 将Sequelize与表结构对应

async  function getUserById(id) {
    return await User.findOne({
        where: {
            id
        }
    })
}

async function getUserByName(uname) {
    return await User.findOne({
        where: {
            uname
        }
    })
}
module.exports ={
    getUserById,
    getUserByName
}

