const route = require('express').Router()



route.use('/users', require('./users'))
route.use('/smartphone', require('./smartphone'))
route.use('/laptop', require('./laptop'))
route.use('/fashion', require('./fashion'))

exports = module.exports = {
    route
}