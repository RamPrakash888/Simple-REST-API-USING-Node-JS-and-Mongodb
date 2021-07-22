const express=require('express')
const mon=require('mongoose')
const info=require('./model') // to get access to other file's export
const app=express()
app.use(express.json())

const url='mongodb://localhost/mydatabase' //url of our local database

mon.connect(url,{ useNewUrlParser: true,
    useUnifiedTopology: true,}) //simple mongobd connection

app.get('/',async(req,res)=>{
     
   try{
       const val=await info.find()
       res.json(val) //returns all the data posted
       

   }catch(err)
   {
    res.send('ERROR')
   }
   
   
})
app.get('/:id',async(req,res)=>{
     
    try{
        const val=await info.findById(req.params.id) //req.params to get the parameter id        res.json(val) //displays that particular id 
        
 
    }catch(err)
    {
     res.send('ERROR')
    }
    
    
 })

app.post('/send',async(req,res)=>{

    const outval= new info(
        {
            username: req.body.username,
            department: req.body.department, //req.body to get hold of that key containing data
            

        }
    )//gets the data
   
    try{
        const d= await outval.save(); //saves the data
        res.json(d); // sends the data 

    }catch(err)
    {
        res.send('ERRR')
    }




})






const con=mon.connection
con.on('open',function()
{
    console.log('connected...'); //just a connection check
})

app.listen(9000);