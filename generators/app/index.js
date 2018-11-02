'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const util = require('util');
/**
 * 生命周期
 *prompting - 接收用户输入阶段
 *configuring - 保存配置信息和文件
 *default - 自定义功能函数名称，如 method1
 *writing - 生成项目目录结构阶段
 *conflicts - 统一处理冲突，如要生成的文件已经存在是否覆盖等处理
 *install - 安装依赖阶段
 *end - 生成器结束阶段
 */
module.exports = class extends Generator {
    prompting() {
      // Have Yeoman greet the user.
      this.log(
        yosay(`Welcome to the gnarly ${chalk.red('generator-easy-koa')} generator!  ${chalk.yellow('颤抖吧凡人')}`)
      );
      const prompts = [{
          name: 'projectName', // 用户输入项标识，在获取用户输入值的时候用到
          message: 'your project name?', //给用户提示的信息
          // default: this.appname // 默认值
          default: path.basename(process.cwd()) // 默认值
        }, {
          type: 'confirm', // 非必填 默认text ‘confirm’ 是选择输入‘YES/NO’
          name: 'test',
          message: 'Set up unit tests',
          default: true
        }, {
          type: 'text',
          name: 'author',
          message: 'Your name',
          default: this.user.git.name()
        }, {
          type: 'input',
          name: 'email',
          message: 'Your email',
          default: this.user.git.email()
        }, {
          name: 'installationMethod',
          type: 'list',
          message: 'Choose a way to install the package:',
          choices: [{
              name: 'npm',
              value: 'npm',
              checked: true
            }, {
              name: 'yarn',
              value: 'yarn'
            }, {
              name: 'bower',
              value: 'bower'
            }]
          },
          {
            name: 'db',
            type: 'list',
            message: 'Chich database whould you like',
            choices: [{
              name: 'mongodb',
              value: 'mongodb',
              checked: true
            }, {
              name: 'mysql',
              value: 'mysql'
            }, {
              name: 'none',
              value: 'none'
            }]
          }
        ];

        return this.prompt(prompts).then(props => {
          // To access props later use this.props.projectName;
          this.props = props;
        });
      }

      writing() {
        // this.templatePath 返回template目录下文件的地址
        // this.destinationPath 指定加工完成后文件的存放地址 一般指项目目录
        // this.fs.copy 把文件从一个目录复制到另一个目录，一般是从template目录复制到你所指定的项目目录，用于固定文件和可选文件（根据用户选择）
        // this.fs.copyTpl：和上面的函数作用一样，不过会事先经过模板引擎的处理，一般用来根据用户输入处理加工文件
        let target = [
          //需要加工的文件使用数组
          'bin/app.js',
          //配置文件
          'config/index.js',
          'config/env/common.js',
          'config/env/development.js',
          'config/env/production.js',
          'config/env/test.js',
          'gulpfile.js',
          'index.js',
          'README.md',
          // 'src/db/index.js',
          'src/controllers/index.js',
          'src/controllers/user/router.js',
          'src/controllers/user/controller.js',
          'src/controllers/image/controller.js',
          'src/controllers/image/router.js',
          'src/middleware/error.js',
          'src/middleware/logger-async.js',
          'src/models/user.js',
          'src/prototype/base.js',
          'src/prototype/canvas.js',
          'src/views/index.html',
          'src/views/user.html',
          'Dockerfile',
        ]

        // fix linux 添加隐藏文件
        target = [...target,
          ['_babelrc', '.babelrc'],
          ['_gitignore', '.gitignore'],
          ['dist/_gitkeep', 'dist/.gitkeep'],
          ['docs/_gitkeep', 'docs/.gitkeep'],
          ['src/log/_gitkeep', 'src/log/.gitkeep'],
          ['_package.json', 'package.json'],
          ['src/db/index.js', 'src/db/index.js'],
          ['src/controllers/user/controller.js', 'src/controllers/user/controller.js'],
          ['src/models/user.js', 'src/models/user.js'],
        ]
        // 是否添加单元测试
        this.props.test && target.push('test/index.spec.js')

        target.forEach(item => {
          let toFile, fromFile;
          if (Array.isArray(item)) {
            fromFile = item[0];
            toFile = item[1];
            this.fs.copyTpl(
              this.templatePath(fromFile),
              this.destinationPath(toFile),
              // 将配置参数带过去
              this.props
            );
          } else {
            fromFile = item;
            toFile = item;
            this.fs.copy(
              this.templatePath(fromFile),
              this.destinationPath(toFile),
              this.props
            );
          }
        })
      }

      install() {
        switch (this.props.installationMethod) {
          case 'npm':
            this.npmInstall();
            break;
          case 'yarn':
            this.yarnInstall();
            break;
          case 'bower':
            this.bowerInstall();
            break;
        }
        // 安装npm依赖和bower依赖
        //this.installDependencies(); 
        // 只安装bower依赖
        //this.bowerInstall();
        // 只安装npm组件
        // this.npmInstall();
        // 使用yarn安装依赖
        // this.yarnInstall()
      }
      end() {
        this.log(yosay(`${chalk.green('Now do something ')}${chalk.blue(' whatever you want!!')} `))
      }
    };
