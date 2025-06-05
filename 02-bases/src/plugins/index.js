const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const {http} = require('./http-client.plugin')

const buildLogger =  require('./logger.plugin')

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger

}