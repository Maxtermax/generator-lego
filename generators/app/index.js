'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the priceless ' + chalk.red('N') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      mkdirp('./app',function(err) {
        if(err)  console.log('Error creating the application folder please create for you self in ./app')
      }) 

      mkdirp('./build/setting',function(err) {
        if(err)  console.log('Error creating build file please create for you self in ./build/setting')
      }) 

      mkdirp('./build/setting',function(err) {
        if(err) return console.log('Error creating build file please create for you self in ./build/setting')
      }) 
      mkdirp('./build/setting/app',function(err) {
        if(err)  console.log('Error creating build file please create for you self in ./build/setting/app')
      }) 




      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_app.js'),
        this.destinationPath('app.js')
      )      
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      )

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
    this.installDependencies();
  }
});
