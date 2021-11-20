const url = 'estados.json'

const newEstado = {
    nome: "Minal",
    sigla: "ML"
}

function getUser(){
    
    // axios(url)
    // .then(resp=>{
    //     const itens = resp.data.reduce( // ja tenho json convertido em resp.data
    //         (html, estado) => html + `<li>${estado.nome}</li>`, '' 
    //         )
    //         document.body.insertAdjacentHTML("beforeend", itens)
    // })
    
    axios.get(url)
    .then(resp => {
        const estados = Array.from(resp.data)
        estados.forEach(e => {
            const tr = document.createElement('tr')
            const tdNome = document.createElement('td')
            const tdSigla = document.createElement('td')
            const table = document.querySelector('table > tbody')

            tdNome.textContent = e.nome
            tdSigla.textContent = e.sigla

            tr.appendChild(tdNome)
            tr.appendChild(tdSigla)
            table.appendChild(tr)
        })
    })
    .catch(error => console.log(error))
}

getUser()



function addNewEstado(){
    axios.post(url, newEstado)
    .then(resp => {
        console.log('resp')
    })
    .catch(error => console.log('erro:'+ error))
}

addNewEstado()

