'use strict';
var yeoman = require('yeoman-generator')
,  mkdirp = require('mkdirp')
,  fs = require('fs')
,  exec = require('child_process').spawn


var createFolder = function (path,self) {
  var query = [{
    type : 'input',
    message:"Write the dbuser to connect the db",
    name:'dbuser'
  },{
    type : 'password',
    message:"Write the dbpassword to connect the db",
    name:'dbpassword'    
  },{
    type : 'input',
    message:"Write the port to connect the db",
    name:'port'        
  },{
    type : 'input',
    message:"Write the database name to connect the db",
    name:'database'            
  }]
  self.prompt(query,function(res) {
    mkdirp(path,function () {
      self.fs.copyTpl(
        self.templatePath("_model.js"),
        self.destinationPath("./setting/model/index.js"),
        {
          database:res.database,
          dbuser:res.dbuser,
          dbpassword:res.dbpassword,
          port:res.port
        }
      )
      mkdirp(path+'/schemas',function() {
        self.fs.copyTpl(
          self.templatePath("_schemas.js"),
          self.destinationPath(path+'/schemas/index.js')              
        )
      })

      var app = self.readFileAsString('./app.js')
      self.write("./app.js",app.replace("//end setting","//end setting\n\n//begin model\nrequire('./setting/model')(app)\n//end model"))       

    })//end create model folder
  })   
}//end createFolder

var WriteInMain = function (self) {
  var query = [{
    type : 'input',
    message:"Write the dbuser to connect the db",
    name:'dbuser'
  },{
    type : 'password',
    message:"Write the dbpassword to connect the db",
    name:'dbpassword'    
  },{
    type : 'input',
    message:"Write the port to connect the db",
    name:'port'        
  },{
    type : 'input',
    message:"Write the database name to connect the db",
    name:'database'            
  }]
  var app = self.readFileAsString("./app.js")
  self.prompt(query,function(res) {
    self.write("./app.js",
      app 
        .replace("//server http","//server http\n,  mongoose = require('mongoose')//mongodb driver\n,  Schema = mongoose.Schema//db schemas")
        .replace("//db schemas","//db schemas\n,  database = '"+res.database+"'\n,  dbuser = '"+res.dbuser+"'\n,  dbpassword = '"+ res.dbpassword +"'\n,  port = '"+ res.port +"'//uri variables") 
        .replace("//end setting","\n\t.set('uri', app.get('status log') === 'dev' ? `mongodb://localhost/${database}` : `mongodb://${dbuser}:${dbpassword}@ds0${port}.mongolab.com:${port}/${database}`)//set uri\n//end setting")
        .replace("//end setting","\n\t.set('model',mongoose.model('"+res.dbuser.toUpperCase()+"',Cat))//end model\n//end setting")
        .replace("//end setting","//end setting\n\nmongoose.connect( app.get('uri') ,(err)=> { if(err) return console.log(err); console.log('OK connected to '+app.get('uri')) })//open connection")
        .replace("//uri variables","//uri variables\n\n//begin ListSchemas\n\nvar Cat = new Schema({\n\tname:{type:String,required:true,unique:false},\n\tage:{type:Number,required:true,unique:false}//last field\n})//end Cat\n\n//end ListSchemas")        
    )

  })
}//end WriteInMain

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var self = this; 
    self.argument('block', {
      required: true,
      type: String,
      desc: ''
    })
    self.log('You called the Lego subgenerator with the argument ' + self.block + '.');
  },

  express : function () {
    var self = this; 

    if(self.block == 'express'){
      var query = [{
        type:'confirm',
        name:'set',
        message:'¿ Do you like get one setting folder ?',
        default:false
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
          "cors@^2.5.2"
        ]
        self.npmInstall(modules, { 'save': true });
      })//end prompting callback 
    } 
  },
  mongodb : function() {
    var self = this
    if(self.block === 'mongodb') {
      var query = [{
        type:'confirm',
        name:'pathFolder',
        message:'¿ Do you like get the model folder ?'
      }]
      self.prompt(query,function(res) {        
        if(res.pathFolder) return createFolder('./setting/model',self)
        WriteInMain(self)
        var modules = [
          "mongoose@^ 4.0.5"
        ]
        self.npmInstall(modules, { 'save': true });
      })      


    }
  }
});




















