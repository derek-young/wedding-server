const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const api = require('./api')

const port = process.env.NODE_ENV === 'development' ? 5000 : 443

const app = express()

app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', api)

app.listen(port, () => {
  console.log(`Listening at port: ${port}`)
})
