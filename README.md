# generator-easy-koa [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> a generator for a koa

## Installation

First, install [Yeoman](http://yeoman.io) and generator-easy-koa using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-easy-koa
```

Then generate your new project:

```base
yo easy-koa   一键生成可配置项目
yo easy-koa:controller controllerName  一键生成controller
```

## 项目相关依赖

> dependencies 

```
1. koa-bodyparser
2. koa-compose
3. koa-router
4. koa-static
5. koa-swig
6. mini-logger
7. mongodb
8. mongoose
9. mysql
10. canvas-prebuilt
11. co
...
```
> devDependencies
 
```
1. cross-env
2. gulp
3. jsdoc
4. mocha
5. should
6. supertest
7. supervisor
8. chalk
9. babel-polyfill
10.babel-preset-env

```

##生成项目结构

```
.
├── bin                                         // 启动文件
├── config                                      // 项目环境配置
│   ├── index                                   // 入口
│   ├── env                                     // 根据运行环境自动加载相应环境的变量
│   │   ├── common                              // 公共配置项
│   │   ├── development.js                      // 开发环境配置项
│   │   ├── production.js                       // 生产环境配置项                                               │   │   └── test.js                             // 测试环境配置项
├── dist                                        // 上线项目文件
├── docs                                        // jsdoc注释自动生成文档
├── src                                         // 源码目录
│   ├── controller                              // controller
│   │   ├── user                                // usercontroller
│   │   │   ├── controller.js                   // 
│   │   │   └── router.js                       // 单元controller
│   │   ├── image                               // imagecontroller
│   │   │   ├── controller.js                   // 
│   │   │   └── router.js                       // msite和shop页面的餐馆列表公共组件
│   │   └── index.js                            // 导出controller server自动注入controller
│   ├── db                                      //
│   │   └── index.js                            // 数据库连接
│   ├── log                                     // 错误日志存放
│   │   └── 2018-xx-xx-err-r.log                //
│   ├── middleware                              //中间件
│   │   ├── logger-async.js                     // log中间件
│   │   └── error.js                            // error中间件
│   ├── models                                  // models
│   │   └── user.js                             // user模型
│   ├── prototype                               // 可以继承的原型
│   │   ├── Base.js                             // 通用类方法
│   │   └── Canvas.js                           // canvas类
│   ├── views                                   // 视图层
│   │   ├── index.html                          // 
│   │   └── user.html                           // 
├── test                                        // 测试文件
│   └── index.spec.js                           
├── .babelrc   
├── Dockerfile                                    
├── .gitignore                                   
├── .gulpfile                                   
├── .index                                     
├── package.json                                    
├── package-lock.json  
└── README.md                                  
```


## 项目生成器

> 地址[项目生成器](https://github.com/501981732/generator-easy-koa)


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [wangmeng](https://github.com/501981732)


[npm-image]: https://badge.fury.io/js/generator-easy-koa.svg
[npm-url]: https://npmjs.org/package/generator-easy-koa
[travis-image]: https://travis-ci.org/501981732/generator-easy-koa.svg?branch=master
[travis-url]: https://travis-ci.org/501981732/generator-easy-koa
[daviddm-image]: https://david-dm.org/501981732/generator-easy-koa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/501981732/generator-easy-koa
[coveralls-image]: https://coveralls.io/repos/501981732/generator-easy-koa/badge.svg
[coveralls-url]: https://coveralls.io/r/501981732/generator-easy-koa
