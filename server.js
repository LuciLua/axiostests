const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// middleware
app.use(express.static('.')) // provê arquivos estaticos a partir da aplicaocao desse middleaware
app.use(express.json())

  let estados = [
    {
        id: 1,
        nome: 'luci',
        sigla: 'LU'
    }]
 
  // consultar tds
  app.route('/api').get((req, res) => res.json(estados)) 

  // consultar por id
  app.route('/api:id').get((req, res) => {
    const userId = req.params.id
  
    const user = estados.find(user => Number(user.id) === Number(userId))
  
    if (!user) {
      return res.json('User nor found!')
    }
  
    res.json(user)
  })
  
  //inserir
  app.route('/api').post((req, res) => {
    const lastId = estados[estados.length - 1].id

    estados.push({
      id: lastId + 1,
      nome: req.body.nome,
      sigla: req.body.sigla,
    })

    res.json('Saved user')
  })

    //hackear
    app.route('/api').put((req, res) => {
      estados.filter(u => {
        u.sigla = "Hackeado"
      })
      res.json('Hack user!')
    })
  

  // ouvindo porta 8080
  app.listen(8080, () => console.log('Executando... Ouvindo porta 8080'))

  //update
//   app.route('/api/:id').put((req, res) => {
//     const userId = req.params.id
  
//     const user = estados.find(user => Number(user.id) === Number(userId))
  
//     if (!user) {
//       return res.json('User nor found!')
//     }
  
//     const updatedUser = {
//       ...user,
//       name: req.body.nome,
//       avatar: req.body.sigla,
//     }
  
//     estados = estados.map(user => {
//       if (Number(user.id) === Number(userId)) {
//         user = updatedUser
//       }
//       return user
//     })
  
//     res.json("Updated user")
//   })
