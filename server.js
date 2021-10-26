const express = require('express')

const app =  express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (_, res) => {

  console.log(`[${new Date().toISOString()}] >> GET / `)

  return res.json({
  ok: true,
  message: 'server is running'
})})

app.listen(port, () => {
  console.log(`Server runing in port: ${port}`)
})