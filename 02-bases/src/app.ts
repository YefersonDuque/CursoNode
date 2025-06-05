// const getPokemonById = require('./js-foundation/06-promises')
// const { buildLogger } = require('./plugins')

// const logger = buildLogger('app.js')

// logger.log('Hola mundo');
// logger.error('Hola mundo');

// getPokemonById(4)
// .then((pokemon)=>logger.log({pokemon}))
// .catch((err)=> logger.error({err}))
// .finally(()=>console.log('Final'))
import {buildLogger} from './plugins/logger.plugin'

const logger = buildLogger('app.ts')

logger.log('hola');
logger.error('error')