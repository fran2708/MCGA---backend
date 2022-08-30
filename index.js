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
    let sentID = req.params.id

    const productByID = products.filter((product) => product.id == sentID)

    // function filterByID(value) {
    //   return value === sentID
    // }

    // const productByID = products.filter(filterByID)

    // let productByID = products.filter(function (product) {
    //   return product.id === sentID
    // })

    console.log(productByID)

    res.send(productByID)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})