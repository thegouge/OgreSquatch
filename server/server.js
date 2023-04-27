const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({ path: './config.env' })

const app = express()

app.use(
  cors({
    origin: '*',
  })
)
// Profile Routes
app.use('/api/v1/test', (req, res) => {
  res.send('hello!')
})

app.use('/api/v1/profile', require('./routes/profile'))

// Handle Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/build/'))

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/build/index.html'))
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server running on port ${port}`)
})
