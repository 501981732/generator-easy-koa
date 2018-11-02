import user from './../../models/user.js' 
import Base from './../../prototype/base.js'
/**
 * @fileOverview 实现Users
 * @author wm
 */

/**
 * 用户Users类
 * @class
 * @extends Base
 */
<% if(db == 'mongodb'){ %>

class User extends Base{
    /**
     * Create a user
     * author   wm
     * @DateTime 2018-10-31
     *      
     */
    constructor(args) {
        super(args)        
        this.baseUrl = '/user'
        this.demo.bind(this)
    }
    async index(ctx, next) {
        ctx.body = 'index'
        next && next()
    }
    /**
     * userList 获取用户列表
     * 
     */
    async userList(ctx, next) {
        try {
            const users = await user.find({}, '-age')
            if (!users) {
                ctx.throw(404)
            }
            ctx.body = {
                users
            }
        } catch (err) {
            if (err === 404 || err.name === 'CastError') {
                ctx.throw(404)
            }

            ctx.throw(500)
        }

        if (next) { return next() }
    }
    /**
     * checkUser 检查是否有改用户
     * 
     */
    async checkUser(ctx) {
        let { username } = ctx.query
        try {
            const res = await user.find({ username })
            if (!res.length) {
                // throw new Error('未找到当前用户')
                ctx.body = {
                    status: 0,
                    message: 'fail',
                    data: null
                }
            } else {
                ctx.body = {
                    status: 1,
                    message: 'success',
                    data: res
                }
            }
        } catch (err) {
            err === 404 ? ctx.throw(404) : ctx.throw(500)
        }
    }
    /**
     * addUser 增加用户
     */
    async addUser(ctx) {
        let { username, age } = ctx.request.body
        let res = await user.find({username})
        if(res.length) {
            ctx.body = {
                status: 0,
                message: '该名称已被注册'
            }
            return 
        }
        if (!username) {
            ctx.body = {
                status: 0,
                message: '请填写名字',
            }
            return 
        }
        if (!age) {
            ctx.body = {
                status: 0,
                message: '请填写年龄',
            }
            return 
        }
        const newUser = new user({ username, age })
        try {
            await newUser.save()
            console.log('添加成功')
            ctx.body = {
                status: 1,
                message: 'success'
            }
        } catch(err) {
            err === 404 ? ctx.throw(404) : ctx.throw(500)
        }
    }
    /**
     * demo 模拟数据
     */
    async demo(ctx) {
        ctx.body = { "page_id": "837135091787390976", "preTag": "2017womenzt", "city_id": "bj", "city_name": "北京", "local_id": "1", "styles": { "commonImage": { "pageBgImage": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/pcBg.png", "imgRepeat": "repeat" }, "common": { "pageBg": "#1a1416" }, "scrollNav": { "bgNav": "#221d24", "borderNav": "#eaaf6b", "navList": "#eaaf6b", "hoverNavList": "#221d24", "hoverBgNavList": "#eaaf6b", "more": "#a6a3a1", "goTop": "#ce9b62" }, "topList": { "bigTitle": "#eaaf6b", "borderSubTitle": "#593fc9", "bgCards": "#53b0ff", "borderCards": "#919191", "tilCards": "#fff", "borderLogo": "#e6d3bd", "detailCards": "#a6a3a1", "wealCards": "#c0a485", "wealBgCards": "", "wealBorderCards": "#c0a485", "shadowCards": "#588fff", "bgCardsHover": "#eab956", "borCardsHover": "#588fff", "iconCardsHover": "#82693a", "itemCardsHover": "#4b422e", "itemHCardsHover": "#1b1916", "hrefCardsHover": "#fff", "hrefBgCardsHover": "#927541", "hrefBorCardsHover": "#927541", "hrefHCardsHover": "#fff", "hrefBgHCardsHover": "#785d2e", "hrefBorHCardsHover": "#785d2e", "moreCardsHover": "#fff", "moreHCardsHover": "#fff" }, "otherTabs": { "bigTitle": "#eaaf6b", "bgTitle": "#180b51", "hoverTitle": "#180b51", "hoverTri": "#180b51", "bgOtherTabs": "#2a2328", "bgCards": "#faf5ef", "shadowCards": "#588fff", "borderCards": "#e6d3bd", "tilCards": "#483a44", "borderLogo": "#e6d3bd", "detailCards": "#6f6f6f", "wealCards": "#fff", "wealBgCards": "#e5ab69", "wealBorderCards": "#e5ab69", "moreCards": "#588fff", "hoverCards": "#588fff", "bgMoreCards": "#588fff", "hoverBgMoreCards": "#588fff", "shadowMoreCards": "#588fff", "bgMore": "#588fff", "borderMore": "#588fff", "tilMore": "#588fff", "bgCardsHover": "#eab956", "tilCardsHover": "#4b422e", "iconCardsHover": "#82693a", "itemCardsHover": "#4b422e", "itemHCardsHover": "#1b1916", "moreCardsHover": "#fff", "moreHCardsHover": "#fff", "moreBgCardsHover": "#bd7b31", "moreBgHCardsHover": "#bd7b31", "moreBorCardsHover": "#bd7b31", "moreBorHCardsHover": "#bd7b31" } }, "pageDataList": [{ "bgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/pcNew.jpg", "id": 148842324470459, "modelType": "banner" }, { "lfBgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/lfTilBg.png", "rtBgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/rtTilBg.png", "bgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/topBg.png", "bgUrlHover": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/topBgHover.png", "modelTitle": "top榜", "id": 148842341038379, "modelType": "topList", "trackUrl": "zphcitytopsee", "dataList": [] }, { "itemList": [{ "title": "销售专场", "name": "first", "cardsNum": 6, "trackUrl": "zphhaofulisee" }, { "title": "美容美发", "name": "second", "cardsNum": 7, "trackUrl": "zphdagongsisee" }, { "title": "客服专场", "name": "third", "cardsNum": 8, "trackUrl": "zphrqmqsee" }, { "title": "普工专场", "name": "third", "cardsNum": 9, "trackUrl": "zphrqmqsee" }, { "title": "教育培训", "name": "third", "cardsNum": 10, "trackUrl": "zphrqmqsee" }, { "title": "人气热招", "name": "third", "cardsNum": 11, "trackUrl": "zphrqmqsee" }, { "title": "餐饮专场", "name": "third", "cardsNum": 12, "trackUrl": "zphrqmqsee" }], "bgUrl": "", "bgHoverUrl": "", "lfBgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/lfTilBg.png", "rtBgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/rtTilBg.png", "id": 148842341038378, "modelType": "otherTabs", "dataList": [ [], [], [] ] }, { "itemList": [{ "title": "销售专场", "trackUrl": "zphdhhaofuli" }, { "title": "美容美发", "trackUrl": "zphdhdagongsi" }, { "title": "客服专场", "trackUrl": "zphdhrqmq" }, { "title": "普工专场", "trackUrl": "zphdhrqmq" }, { "title": "教育培训", "trackUrl": "zphdhrqmq" }, { "title": "人气热招", "trackUrl": "zphdhrqmq" }, { "title": "餐饮专场", "trackUrl": "zphdhrqmq" }], "bgUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/nav.png", "qrCodeUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/qrCode.jpg", "goTopUrl": "//img.58cdn.com.cn/crop/baseteam/yunying/pc/zhaopin02/img/goTop.png", "id": 148842341038376, "modelType": "scrollNav" }], "pageDataDetail": [{ "userId": 54464864832533, "logoPath": "//pic1.58cdn.com.cn/nowater/jltx/n_v2f5d697f89d3840caa63152da69ba00d5.jpg", "name": "天九", "industry": "销售", "welfare": "五险一金,年底双薪,", "scale": "2000人以上", "qyUrl": "http://qy.58.com/54464864832533", "localId": 1, "type": 6 }, { "userId": 5672475214855, "logoPath": "//pic1.58cdn.com.cn/nowater/jltx/n_v2f5d697f89d3840caa63152da69ba00d5.jpg", "name": "中国平安", "industry": "销售", "welfare": "周末双休,年终奖,", "scale": "2000人以上", "qyUrl": "http://qy.58.com/5672475214855", "localId": 1, "type": 6 }, { "userId": 51734114369808, "logoPath": "//pic3.58cdn.com.cn/m1/bigimage/n_v28e3e3fc50d9e4557946592c6c0f7b303.jpg", "name": "中国平安人寿保险股份有限公司北京分公司", "industry": "销售", "welfare": "周末双休,年终奖,", "scale": "2000人以上", "qyUrl": "http://qy.58.com/51734114369808", "localId": 1, "type": 6 }, { "userId": 53978630526739, "logoPath": "//pic1.58cdn.com.cn/nowater/jltx/n_v2f5d697f89d3840caa63152da69ba00d5.jpg", "name": "国安社区", "industry": "超市/百货/零售", "welfare": "包吃包住,五险一金,", "scale": "2000人以上", "qyUrl": "http://qy.58.com/53978630526739", "localId": 1, "type": 11 }, { "userId": 40507659415311, "logoPath": "//pic3.58cdn.com.cn/m1/bigimage/n_v1bkuyfvo7nsifpeg4dyqq.png", "name": "德邦快递", "industry": "物流仓储", "welfare": "五险,带薪年假,", "scale": "2000人以上", "qyUrl": "http://qy.58.com/40507659415311", "localId": 1, "type": 11 }] }

    }
}
<% }else { %>
// mysql
class User extends Base{
    /**
     * Create a user
     * author   wm
     * @DateTime 2018-10-31
     *      
     */
    constructor(args) {
        super(args)        
        this.baseUrl = '/user'
        this.demo.bind(this)
    }
    async index(ctx, next) {
        ctx.body = 'index'
        next && next()
    }
    /**
     * userList 获取用户列表
     * 
     */
    async userList(ctx, next) {

    }
    /**
     * checkUser 检查是否有改用户
     * 
     */
    async checkUser(ctx) {

    }
    /**
     * addUser 增加用户
     */
    async addUser(ctx) {

    }
    /**
     * demo 模拟数据
     */
    async demo(ctx) {

    }
}
<% }%>

export default new User()