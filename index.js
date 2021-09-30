const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.use(express.static(path.join(__dirname, 'public'))) //To set up the public folder

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)

app.listen(port, () => console.log(`Tabuada server on port: ${port}\n\nhost: http://localhost:3000 \n`))