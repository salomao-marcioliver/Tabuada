const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.use(express.static('public')) //To set up the public folder

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', indexRouter)
app.get('/tabuadas', tabuadaRouter)

app.listen(port, () => console.log(`Tabuada server on port: ${port}\n\nhost: http://localhost:3000 \n`))