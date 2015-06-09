'use strict';
var yeoman = require('yeoman-generator')
,  mkdirp = require('mkdirp')
,  fs = require('fs')
,  exec = require('child_process').spawn

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('block', {
      required: true,
      type: String,
      desc: 'The subgenerator express'
    });
    this.log('You called the Lego subgenerator with the argument ' + this.block + '.');
  },

  prompting: function () {
    var self = this; 
    var query = [{
      type:'confirm',
      name:'set',
      message:'¿ Do you like get one setting folder ?',
      default:true
    }];
    self.prompt(query,function(prompt) {      
      var file = self.readFileAsString('./app.js');
      var dest =  self.readFileAsString( self.templatePath('_express.js') );
      file = file.replace("//begin express","//begin express \n"+dest);//put the express block into file string
      self.write('./app.js', file );
      if(prompt.set) {
        //set the setting folder option
        self.write('./app.js', file.replace("//begin setting","//begin setting \n require('./setting/express')(express,app)") );        
        mkdirp('./setting/express',function(err) {
          if(err) return console.log(err,"err");
          self.fs.copy(
            self.templatePath('_set_in_folder.js'),
            self.destinationPath('/setting/express/index.js')
          )
        });
                  
      } else {
        //set the setting directly on the main file  
        var set = self.readFileAsString(self.templatePath('_set.js'));
        self.write('./app.js', file.replace("//begin setting","//begin setting \n"+set) );                 
      }
      var modules = [
        "morgan@^1.0.0",
        "multer@^0.1.0",
        "method-override@^1.0.0",
        "cors@^2.5.2",
        "underscore"
      ]
      self.npmInstall(modules, { 'save': true });

    })//end prompting callback 
  
  },
  writing: function () { 

  }

});




















