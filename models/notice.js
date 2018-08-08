const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/notices.db'
})

const Content = db.define('cont',{
    content : DataTypes.STRING,
    class : DataTypes.INTEGER,
    fileName : DataTypes.STRING
})

db.sync().then(() => console.log('Synced'))

module.exports = {
    db, Content
}