const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }
  initializing() {
    this.argument('controller', { type: String, required: true });
  }
  prompting() {}
 
  writing() {
    this.fs.copyTpl(
      this.templatePath('src/controllers/controllerName/controller.ejs'),
      this.destinationPath('src/controllers/' + this.options.controller + '/controllers.js'),
      { controller: this.options.controller }
    );
    this.fs.copyTpl(
      this.templatePath('src/controllers/controllerName/router.ejs'),
      this.destinationPath('src/controllers/' + this.options.controller + '/router.js'),
      { controller: this.options.controller }
    );
    this.fs.copyTpl(
      this.templatePath('src/models/models.ejs'),
      this.destinationPath('src/models/' + this.options.controller + '.js'),
      { controller: this.options.controller }
    );
  }
  install() {}

  end() {
        this.log(yosay(`Now the controller ${chalk.green(this.options.controller)} is ready!`))
  }
};