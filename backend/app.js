const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const stores = require('./routes/stores')
const products = require('./routes/products')
require('./db/connect')
require('dotenv').config()
const morgan = require('morgan')
const notFoundMiddleware = require('./middleware/not-found')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const order = require('./routes/order')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')


// app.use(express.static('./public'));
app.use(morgan('tiny'))
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET))
app.use(cors())
app.use(express.static('./public'));
app.use(fileUpload());
// process.env.JWT_SECRET

app.get('/api/v1',(req,res)=>{
    console.log(req.signedCookies)
    res.send('e stores online')
})


app.use('/api/v1/stores',stores);
app.use('/api/v1/stores',products);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/order', order);
app.use(notFoundMiddleware);


const port = 3001

connectDB(process.env.MONGO_URI).then(()=>{
    console.log("db connected..")
    app.listen(port,console.log(`server is listening on port ${port}`))
})
.catch((err)=>console.log(err))

