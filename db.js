require('dotenv').config()
const Sequelize = require('sequelize')
const db=new Sequelize({
    host:'localhost',
    database:'shopdb',
    username:'shopper',
    password:`${process.env.password}`,
    dialect:'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    }
    },

    {
        freezeTableName: true
})


const Smartphone = db.define('Smartphones', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    image:Sequelize.STRING,
    category:{
        type:Sequelize.STRING,
        defaultValue:'smartphone'
    }
})


const Laptop = db.define('Laptops', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    image:Sequelize.STRING,
    category:{
        type:Sequelize.STRING,
        defaultValue:'laptop'
    }
})



const Fashion = db.define('Fashion', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    image:Sequelize.STRING,
    category:{
        type:Sequelize.STRING,
        defaultValue:'fashion'
    }
})



db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Smartphone, Laptop, Fashion
}