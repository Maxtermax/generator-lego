'use strict';
var yeoman = require('yeoman-generator');

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

    this.prompt(query,function(prompt) {  
      var file = self.readFileAsString('./app.js');
      var dest =  self.readFileAsString( self.templatePath('_express.js') );
      file = file.replace("//begin express","//begin express \n"+dest);//put the express block into file string
      self.write('./app.js', file );
      if(prompt.set) {
        //set the setting folder option
        self.write('./app.js', file.replace("//begin setting","//begin setting \n require('./setting/index.js')(app)") );       
        self.mkdir('./setting');
      } else {
        //set the setting directly on the main file  
        var set = self.readFileAsString(self.templatePath('_set.js'));
        self.write('./app.js', file.replace("//begin setting","//begin setting \n"+set) );                 
      }

          
    })//end prompting callback 
          
  },
  writing: function () { 

  }

      

});
