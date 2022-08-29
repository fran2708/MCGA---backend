const express = require('express')
const products = require('./data/products.json')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/id/:id', (req, res) => {
    
    let product = products.filter(product => product.id = )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})