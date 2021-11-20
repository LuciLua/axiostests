const express = require('express')
const app = express()

// middleware
app.use(express.static('.')) // provê arquivos estaticos a partir da aplicaocao desse middleaware
// ouvindo porta 8080
app.listen(8080, () => console.log('Executando...'))