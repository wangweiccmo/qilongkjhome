module.exports = {
    database:'qilong',
    username:'user01',
    password:'123456',
    host: '47.75.211.203',
    port:3306,
    seq_options: {
        logging: false,
        dialectOptions: {
            charset: 'utf8',
        },
    },
    option:{
        host: '47.75.211.203',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
}