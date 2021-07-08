const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')



app.use(express.static(path.join(__dirname, 'public')))


//view engine

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)



app.listen(port, () => {
    console.log(`Server started on port `+ port)
})