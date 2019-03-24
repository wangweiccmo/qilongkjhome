const mysql = require('../config/mysql')
const newsSchema = '../schema/newsOnlyTitle'; // 引入user的表结构
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


async function allByMode(mode) {
    return await News.findAll({
        where: {
            mode
        },
            order: [

            ]
        }
    );
}

async function getAllByPage(limit) {
    return await News.findAll({
            limit:limit,
            order: [
            ]
        }
    );
}

async function add(params) {
    return await News.create(params)
}

module.exports = {
    getNewsById,
    allByMode,
    getNewsByTitle,
    add,
    getAll,
    getAllByPage
}

