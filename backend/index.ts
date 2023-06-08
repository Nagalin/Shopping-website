import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello from Tssd')
})




app.listen(8000,()=> console.log('Listenning on port 8000'))