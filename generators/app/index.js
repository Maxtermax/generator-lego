'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('Lego') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    },
    {
      type:'confirm',
      name:'express',
      message:'Do you like start with express.js'
    }
    ];


    this.prompt(prompts,function (props) {
      this.props = props;
      console.log(props)
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_app.js'),
        this.destinationPath('app.js')
      );      
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
  //  this.installDependencies();
  }
});
