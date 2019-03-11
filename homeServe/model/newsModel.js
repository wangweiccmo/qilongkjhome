const mysql = require('../config/mysql')
const newsSchema = '../schema/news'; // 引入user的表结构
const News = mysql.import(newsSchema);// 将Sequelize与表结构对应

async function getNewsById(id) {
    return await News.findOne({
        where: {
            id
        }
    })
}

async function getNewsByTitle(title) {
    return await News.findOne({
        where: {
            title
        }
    })
}

async function getAll() {
    return await News.findAll({
            order: [
            ]
        }
    );
}




async function add(params) {
    return await News.create(params)
}

async function delNewsById(id) {
    return await News.destroy({
        where: {
            id
        }
    })
}

async function editNewsById(params) {
    return await News.update(params,{
        where: {
            id: params.id
        }
    })
}

module.exports = {
    getNewsById,
    getNewsByTitle,
    add,
    getAll,
    delNewsById,
    editNewsById
}

