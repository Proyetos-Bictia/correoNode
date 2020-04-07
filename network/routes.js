const mail = require('../components/network')

const routes = function (server){
    server.use('/mail', mail)
}

module.exports = routes