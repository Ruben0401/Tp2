const express=require('express');
const morgan=require('morgan')

const app=express();


app.listen(4000)
app.use(morgan('dev'))
console.log('Server on Port 4000')
