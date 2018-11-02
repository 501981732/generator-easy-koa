// import user from './user/router.js'

// export default app => {
//  app.use('/user', user);
// }

import glob from 'glob'
import Router from 'koa-router'

export default function initModules(app) {
    //自动匹配modules 里面的路由
    glob(`${__dirname}/*`, { ignore: '**/index.js' }, (err, matches) => {
        if (err) { throw err }
        matches.forEach((mod) => {
            const router = require(`${mod}/router`)

            const routes = router.default
            const baseUrl = router.baseUrl
            const instance = new Router({ prefix: baseUrl })

            console.log(router)
            
            routes.forEach((config) => {
                const {
                    method = '',
                        route = '',
                        handlers = []
                } = config

                const lastHandler = handlers.pop()

                instance[method.toLowerCase()](route, ...handlers, async function(ctx) {
                    return await lastHandler(ctx)
                })
                app
                    .use(instance.routes())
                    .use(instance.allowedMethods()) // 当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.
            })
        })
    })
}