'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var newSchema = function (self,res) {
  var schema = self.readFileAsString("./setting/model/schemas/index.js")
  self.write("./setting/model/schemas/index.js",schema.replace("//ListSchemas","//ListSchemas\n\t\t"+ res.attribute +":new Schema({ \n\t\t\t"+res.attribute+":{type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field\n\t\t}),//end "+res.attribute ) )
}//end newSchema

var addAttr = function (self,res,field) {
  var schema = self.readFileAsString("./setting/model/schemas/index.js")
  var a = schema.search(field)
  var b = schema.search('//end '+field)
  if(a == -1) return console.log('Error this schema not exits')
  var chunck = schema.slice(a,b)
  var result = chunck.replace("//last field",",\n\t\t\t"+res.attribute+":"+"{ type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field")
  self.write("./setting/model/schemas/index.js",schema.replace(chunck,result) ) 
}//end addAttr

var extendAttr = function (self,a,b) {
  var schema = self.readFileAsString("./setting/model/schemas/index.js")
  var x = schema.search(a)
  var y = schema.search('//end '+a)
  if(x == -1) return console.log('Error this schema not exits')
  var chunck = schema.slice(x,y)
  var result = chunck.replace("//last field",",\n\t\t\t"+a+"_extend:"+"ListSchemas."+b+'//last field')
  self.write("./setting/model/schemas/index.js",schema.replace(chunck,result) ) 
}//end extendAttr




module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var self = this
    self.argument('option', {
      required: false,
      type: String,
      desc: 'The subgenerator name'
    })
    self.log('You called the Lego subgenerator with the argument ' + self.option + '.');
 
  },
  genSchema: function() {
    var self = this
    if( self.option === 'schema') {
      self.argument('arvg', {
        required: true,
        type: String,
        desc: 'The subgenerator arvg'
      })
      var attr = [{
        type:'input',
        name:'attribute',
        message:'Write the key'          
      },{
        type:'list',
        name:'type',
        message:'Choice the type of the field',                    
        choices:[
          'String',
          'Number',
          'Buffer'
        ]
      },{
        type:'confirm',
        name:'required',
        message:'¿ Is a field required ?'                    
      },{
        type:'confirm',
        name:'unique',
        message:'¿ Is a unique field  ?'                    
      }]
      if(self.arvg === 'extend') {
        self.argument('a', {
          required: true,
          type: String,
          desc: 'The subgenerator arvg'
        })
 
        self.argument('b', {
          required: true,
          type: String,
          desc: 'The subgenerator arvg'
        })
       extendAttr(self,self.a,self.b)
      } else {
        self.prompt(attr,function(res) {
          if(self.arvg === 'new') {
            newSchema(self,res)      
          } else if(self.arvg === 'add') {
            self.argument('field',{
              required: true,
              type: String,
            })
            addAttr(self,res,self.field)
          } 
        })//end attr
      }

         
           

    }
  } 

})
/*
        Schema(self)
  this.fs.copy(
    this.templatePath('somefile.js'),
    this.destinationPath('somefile.js')
  )

*/

