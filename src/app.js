const path = require('path')
const express = require('express')
const app=express()
const hbs=require('hbs')
const processCode=require('./utils/processCode.js')
const port=process.env.PORT || 3000

//Define path for express config
const publicDirPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//Setup handlebar's engine, views location & partials location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'HODLINFO',
        name:'Finstreet'
    })
})

app.get('/user-index',(req,res)=>{
    processCode(({arr}={})=>{
        return res.send({
            arr
        })
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'HODLINFO',
        name:'Finstreet',
        etitle:'404',
        error:'Page not found...'        
    })
})

app.listen(port,()=>{
    console.log('Server is up at the port '+port+'...')
})