
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Hello World2!')
  res.send('Hello World3!')
  res.send('Hello World4!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})