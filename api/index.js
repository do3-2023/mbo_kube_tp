const express = require('express')
const Client = require('pg')

const app = express()
const port = 5000

console.dir(process.env, { depth: null });

const client = new Client.Client()
client.connect().then(() => {
  console.log("Client connected");
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/now', async (req, res) => {
  try {
    let result = await client.query('SELECT NOW()')
    res.send(result);
  } catch (error) {
    res.statusCode = 500;
    res.send("");
  }
})

app.get('/healthz', async (req, res) => {
  try {
    let result = await client.query('SELECT NOW()')
    res.send(result);
  } catch (error) {
    res.statusCode = 500;
    res.send("");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})