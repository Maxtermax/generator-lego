'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var newSchema = function (self,res,main) {
  self.argument('attribute',{
    type:String,
    required:true
  })
  if(main) {
    var schema = self.readFileAsString("./app.js")
    self.write("./app.js",schema.replace("//ListSchemas","//ListSchemas\nvar "+ self.attribute +" = new Schema({ \n\t"+res.attribute+":{type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field\n})//end "+self.attribute ) )    
  } else {
    var schema = self.readFileAsString("./setting/model/schemas/index.js")
    self.write("./setting/model/schemas/index.js",schema.replace("//ListSchemas","//ListSchemas\n\t\tvar "+ self.attribute +" = new Schema({ \n\t\t\t"+res.attribute+":{type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field\n\t\t})//end "+self.attribute ) )
  }
}//end newSchema

var addAttr = function (self,res,field,main) {
  if(main) {
    var schema = self.readFileAsString("./app.js")
    var a = schema.search(field)
    var b = schema.search('//end '+field)
    if(a == -1) return console.log('Error this schema not exits')
    var chunck = schema.slice(a,b)
    var result = chunck.replace("//last field",",\n\t"+res.attribute+":"+"{ type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field")
    self.write("./app.js",schema.replace(chunck,result) ) 

  } else {
    var schema = self.readFileAsString("./setting/model/schemas/index.js")
    var a = schema.search(field)
    var b = schema.search('//end '+field)
    if(a == -1) return console.log('Error this schema not exits')
    var chunck = schema.slice(a,b)
    var result = chunck.replace("//last field",",\n\t\t\t"+res.attribute+":"+"{ type:"+res.type+",required:"+res.required+",unique:"+res.unique+"}//last field")
    self.write("./setting/model/schemas/index.js",schema.replace(chunck,result) ) 
  }
}//end addAttr

var extendAttr = function (self,a,b,main) {
  if(main) {
    var schema = self.readFileAsString("./app.js")
    var x = schema.search(a)
    var y = schema.search('//end '+a)
    if(x == -1) return console.log('Error this schema not exits')
    var chunck = schema.slice(x,y)
    var result = chunck.replace("//last field",",\n\t"+b+":"+"["+b+']//last field')
    self.write("./app.js",schema.replace(chunck,result) ) 
 
  }else {
    var schema = self.readFileAsString("./setting/model/schemas/index.js")
    var x = schema.search(a)
    var y = schema.search('//end '+a)
    if(x == -1) return console.log('Error this schema not exits')
    var chunck = schema.slice(x,y)
    var result = chunck.replace("//last field",",\n\t\t\t"+b+":"+"["+b+']//last field')
    self.write("./setting/model/schemas/index.js",schema.replace(chunck,result) ) 
  }
}//end extendAttr

var newStatic = function (self,name,model) {
  mkdirp("./setting/model/statics",function(){
    self.fs.copyTpl(
      self.templatePath("_statics.js"),
      self.destinationPath("./setting/model/statics/index.js"),
      { name : name }
    )
    var file = self.readFileAsString('./setting/model/index.js') 
    if( file.search("//end statics schemas") != -1 ) {
      var  Static = self.readFileAsString("./setting/model/statics/index.js")
      self.write("./setting/model/statics/index.js" , Static.replace("//begin statics method","//begin statics method\n\tSchema.statics."+ name +" = function() {\n\t\tvar model = this.model(name)\n\t\t//do statements\n\t}//end "+name+"\n" ) )
 
    }else {
      self.write("./setting/model/index.js",file.replace("//db schemas","//db schemas\n,   statics = require('./statics')(Schemas,'"+model+"')//end statics schemas"))
    }
  })//end create folder for statics methods
}//end newStatic

var newStaticMain = function(self,name,model) {
  self.argument('schemaName', {
    required: true,
    type: String
  })  
  var app = self.readFileAsString('./app.js')
  if( app.search('//end statics method') != -1 ) {
    self.write( "./app.js", app.replace("//end statics method",self.schemaName+".statics."+name+" = function() {\n\t var model = this.model('"+model+"')\n\t//do statements\n}//end "+name+"\n//end statics method") )
  }else {
    self.write( "./app.js", app.replace("//end "+self.schemaName,"//end "+self.schemaName+"\n\n//begin statics method\n"+self.schemaName+".statics."+name+" = function() {\n\t var model = this.model('"+model+"')\n\t//do statements\n}//end "+name+"\n//end statics method") )
  }
    

}//end newStaticMain


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
        var app = self.readFileAsString("./app.js")
        if( app.search("//ListSchemas") === -1 ) return extendAttr(self,self.a,self.b)
       extendAttr(self,self.a,self.b,true)

      } else {
        if( self.arvg === 'statics' ){
          self.argument('methodName',{
            required: true,
            type: String
          })

          self.argument('model',{
            required: true,
            type: String
          })
          var app = self.readFileAsString("./app.js")
          if( app.search("//ListSchemas") === -1 ) return newStatic(self,self.methodName,self.model)//create new static method
           newStaticMain(self,self.methodName,self.model)
          
        } else {
          self.prompt(attr,function(res) {
            if(self.arvg === 'new') {
              var app = self.readFileAsString("./app.js")
              if( app.search("//ListSchemas") === -1 ) return newSchema(self,res)
              newSchema(self,res,true)

            } else if(self.arvg === 'add') {
              self.argument('field',{
                required: true,
                type: String,
              })
              var app = self.readFileAsString("./app.js")
              if( app.search("//ListSchemas") === -1 ) return addAttr(self,res,self.field)
              addAttr(self,res,self.field,true)  
            } 
          })//end attr
        }
          
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

