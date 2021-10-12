const express=require('express')
const path=require('path')
const app=express()

app.set('view-engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)


const PORT=process.env.PORT || 4444

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})