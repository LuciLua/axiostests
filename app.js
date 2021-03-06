const url = 'http://localhost:8080/api'
function getUser(){
        
    axios.get(url)
    .then(resp => {
        const estados = Array.from(resp.data)
        estados.forEach(e => {
            const tr = document.createElement('tr')
            const tdNome = document.createElement('td')
            const tdSigla = document.createElement('td')
            const tdId = document.createElement('td')
            const table = document.querySelector('table > tbody')

            tdId.textContent = e.id
            tdNome.textContent = e.nome
            tdSigla.textContent = e.sigla

            tr.appendChild(tdNome)
            tr.appendChild(tdSigla)
            tr.appendChild(tdId)
            table.appendChild(tr)
        })
    })
    .catch(error => console.log(error))
}
getUser()

document.querySelector('.add').onclick = e => {

let newEstado = {
    nome: document.getElementById('nome').value,
    sigla: document.getElementById('sigla').value
}

function addNewEstado(){
    axios.post(url, newEstado)
    .then(resp => {
        console.log(resp.data)
        return resp
    })
    .catch(error => console.log('erro:'+ error))
}
    
   addNewEstado()   
}

// delete

document.querySelector('.del').onclick = e => {

let delEstado = {
    nome: 'h',
    sigla: 'h'
}

function delTheEstado(){
    axios.put(url, delEstado)
    .then(resp => {
        console.log(resp.data)
        return resp
    })
    .catch(error => console.log('erro:'+ error))
}
    
    delTheEstado()   
}


