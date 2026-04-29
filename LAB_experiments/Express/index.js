//act1 --differnt between package.json and package-lock.json
//act2 --dev dependancies and dependancies
//act3--http requests
//act4-- Department project  
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

