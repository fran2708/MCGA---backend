const express = require('express')
const products = require('./data/products.json')
const employees = require('./data/employees.json')
const companies = require('./data/companies.json')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Landing')
})

app.get('/login', (req, res) => {
  res.send('Login')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
    let sentID = req.params.id

    const productByID = products.filter((product) => product.id == sentID)

    // function filterByID(value) {
    //   return value === sentID
    // }

    // const productByID = products.filter(filterByID)

    // let productByID = products.filter(function (product) {
    //   return product.id === sentID
    // })

    res.send(productByID)
})

app.get('/empleados', (req, res) => {
  res.json(employees)
})

app.get('/empleados/:id', (req, res) => {
  let sentID = req.params.id

  const employeeByID = employees.filter((employee) => employee.id == sentID)

  res.send(employeeByID)
})

app.get('/empresas', (req, res) => {
  res.json(companies)
})

app.get('/empresas/:id', (req, res) => {
  let sentID = req.params.id

  const companyByID = companies.filter((company) => company.id == sentID)

  res.send(companyByID)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})