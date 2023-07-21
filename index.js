document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar() {
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let populacao = document.getElementById('populacao')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            continente.innerHTML = data[0].continents[0]
            populacao.innerHTML = data[0].population
            bandeira.src = data[0].flags.svg

        })
}