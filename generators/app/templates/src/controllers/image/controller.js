// import user from './../../modules/user.js' 
import Canvas from './../../prototype/Canvas.js'
/**
 * @file 实现Image
 * @author wm
 */

/**
 * Class Image Image类
 * @class
 * @extends Canvas
 */
class Image extends Canvas {

    constructor(args) {
        super(args)
        this.baseUrl = '/image'

        this.index = this.index.bind(this)

    }
    /**
     * 根据参数返回相应图像颜色的图片
     * @param    {Object}   ctx  - ctx
     * @param    {Function} next - next
     * @return   {Object}   image - imgBuffer   
     */
    async index(ctx, next) {
        let sizeAry = ctx.params.size && ctx.params.size.includes('*') ? ctx.params.size.split('*') : [ctx.params.size, ctx.params.size];
        let shape = ctx.params.shape ? ctx.params.shape : 'rectangle'; //'rectangle||circle'
        let bgColor = ctx.params.bg ? `${ctx.params.bg}` : `#e83632`;
        console.log(sizeAry)
        let imgBuffer = this.getCanvas({ width: Number(sizeAry[0]), height: Number(sizeAry[1]), shape, bgColor })
        ctx.type="image/jpg"
        ctx.status = 200
        ctx.body = imgBuffer
        next && next()
    }

}

export default new Image()