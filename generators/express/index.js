'use strict';
var yeoman = require('yeoman-generator')
,  mkdirp = require('mkdirp')
,  path = require('path');

var viewHandler = function(self) {
  var view_Path = [{
    name:'path',
    type:'confirm',
    message:'¿Do you like get the views folder in the current path?'
  }] 

  var view_newPath = [{
    name:'newPath',
    type:'input',
    message:'So please write the path for views folder'
  }]

  var new_path = function(e) {
    mkdirp( e.newPath , function(err) {
      if(err) return console.log(err,'Ooops');
      console.log("Creating the views folder at path: ",e.newPath)
    })
  }//new new path

  var default_path = function(res) {
    if(!res.path) {
      self.prompt(view_newPath,new_path)
      return;
    }
    mkdirp('./views',function(err) {
      if(err) return self.log(err,'Ooops');
      self.fs.copy(
        self.templatePath('_index.html'),
        self.destinationPath('./views/index.html')
      );
      console.log('Creating the view folder');
      try{ 
        var file = self.readFileAsString('./setting/index.js');
        file  = file.replace('//end setting',".set('views',__dirname+'/../views')"+"\n //end setting")
        self.write('./setting/index.js', file ); 
      } catch(err) {
        var file = self.readFileAsString('./app.js');
        self.write('./app.js', file.replace('//end setting',"\t.set('views',__dirname+'/../views')"+"\n //end setting") ); 
      }
    })
   }//end default path 
   self.prompt(view_Path,default_path)
  }//end view handler 

var staticHandler = function(self)  {
  var path = [{
    name:"path",
    message:"Write the path to static folder that contain you resources",
    type:"input"
  }]

  self.prompt(path,function(res) {
    try{ 
      var file = self.readFileAsString('./setting/index.js');
      file  = file.replace('//end setting', "\t.use(express.static(__dirname+'"+res.path+"'))//statics resources" + "\n //end setting")
      self.write('./setting/index.js', file ); 
    } catch(err) {
      var file = self.readFileAsString('./app.js');
      self.write('./app.js', file.replace('//end setting',"\t.use(express.static(__dirname+'"+res.path+"'))//statics resources"+"\n //end setting") ); 
    }
  }) }//end static handler 

var engineHandler = function(self) {
 var query = [{
    name:"engine",
    message:"Write the engine view",
    type:"input"
  }]

  self.prompt(query,function(res) {
    try{ 
      var file = self.readFileAsString('./setting/index.js');
      file  = file.replace('//end setting', "\t\t.set('view engine','"+res.engine+"' )//engine view" + "\n //end setting")
      self.write('./setting/index.js', file ); 
    } catch(err) {
      var file = self.readFileAsString('./app.js');
      self.write('./app.js', file.replace('//end setting',"\t.set('view engine','"+res.engine+"' )//engine view"+"\n //end setting") ); 
    }
  })  

}//end engine handler 





module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('set', {
      required: false,
      type: String,
      desc: 'The subgenerator set --views'
    });
  },
  promping:function() {
    var self = this;
    var query = [{
      type:'list',
      name:'option',
      message:'Barcos y putas con express.js',
      choices:[
        'views',
        'engine',
        'static'
      ]
    }]//end query 

    self.prompt(query,function(res) {
      var options = res.option;
      if(options === 'views'){
        console.log('Setting the views')
        viewHandler(self);
      } else if(options === 'engine') {
        console.log('Setting the engine resources')
        engineHandler(self);
      } else if(options === 'static'){
        console.log('Setting the static folder');
        staticHandler(self);
      }        
    })

  }, 
  writing: function () {
    /*
    this.fs.copy(
      this.templatePath('somefile.js'),
      this.destinationPath('somefile.js')
    );
    */
  }
});
