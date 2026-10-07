const cors = require('cors');
const express = require('express');
const app = express()
const port = 3000

const routesPessoa = require('./routes/routesPessoa');

app.use(cors());
app.use(express.json());

app.use('/api', routesPessoa);

app.get('/', (req,res) => {
  res.json({ mensagem: 'API ONLINE' })
})

app.listen(port, () => {
  console.log(`🖥️ ✅ API ONLINE ${port}`)
})