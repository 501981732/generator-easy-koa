import common from './env/common'
//根据开发环境自动加载配置文件
const env = process.env.NODE_ENV || 'development'
// import config from `./env/${env}`
const config = require(`./env/${env}`).default

export default Object.assign({}, common, config)