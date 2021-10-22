const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const stores = require('./routes/stores')
require('./db/connect')
require('dotenv').config()
// app.use(express.json())


app.use(express.static('./public'));
app.use(express.json());

// app.get('/hello', (req,res)=>{
//     res.send('Store manager app')
// })

app.use('/api/v1/stores',stores)


const port = 3001

connectDB(process.env.MONGO_URI).then(()=>{
    console.log("db connected..")
    app.listen(port,console.log(`server is listening on port ${port}`))
})
.catch((err)=>console.log(err))

