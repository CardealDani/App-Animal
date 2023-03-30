async function carregarAnimais() {
    const response = await axios.get('http://localhost:8000/animais')
    const animais = response.data
    const lista = document.getElementById('lista-animais')

    animais.forEach(animal=> {
        const item = document.createElement('li')
        const descricao_animal = `${animal.nome} - Idade : ${animal.idade} - Cor : ${animal.cor}`
        item.innerText = descricao_animal
        lista.appendChild(item)
    })
}

function manipularFormulario(){
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')
    const lista = document.getElementById('lista-animais')

    form_animal.onsubmit = async (event) => {
        event.preventDefault()
        const nome_animal = input_nome.value
        await axios.post('http://localhost:8000/animais', {
            nome: nome_animal,
            idade: '7',
            sexo: 'macho',
            cor: 'preto'
        })
        const item = document.createElement('li')
        item.innerText = nome_animal
        lista.appendChild(item)
    }
}

function app(){
    console.log('App Iniciado!')
    carregarAnimais()
    manipularFormulario()
}
app()