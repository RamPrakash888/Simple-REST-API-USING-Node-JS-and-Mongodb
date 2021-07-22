const mon=require('mongoose')
//define the schema necessary for mongodb storage
const infoschema= new mon.Schema( //this schema has 2 values
    {
       username:{
           type: String,
           required:true
       },
       department:{
           type:String,
           required:true
       }
    }
)
module.exports =mon.model('info',infoschema) //export the schema to app.js