const pokemonElement = document.getElementById('pokemon')

let currentPokemon,
    currentShiny

let collection = JSON.parse(window.localStorage.getItem('collection')) || [],
    currentRoute = JSON.parse(window.localStorage.getItem('route')) || 'test'

function rollShiny(rolls = 1, odds = 4096) {
    let shiny = false

    for (let i = 0; i < rolls; i ++) {
        let random = Math.floor(Math.random() * odds) + 1

        if (random == 1) {
            shiny = true
        }
    }

    return shiny
}

function setPokemon(element, pokemon, color, shinyColor, rolls = 1, odds = 4096) {
    if (rollShiny(rolls, odds)) {
        element.style.setProperty('--bg-color', shinyColor)
        element.children[0].src = `https://pokemon.gishan.cc/static/i/pokemon/shiny-${pokemon.toLowerCase()}.png`
        element.children[1].innerText = `${pokemon}*`
        currentShiny = true
    } else {
        element.style.setProperty('--bg-color', color)
        element.children[0].src = `https://pokemon.gishan.cc/static/i/pokemon/${pokemon.toLowerCase()}.png`
        element.children[1].innerText = pokemon
        currentShiny = false
    }
}

function loadRandomPokemon() {
    let randomPokemon,
        encounterable = false
    while (!encounterable) {
        randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)]
        if (randomPokemon.routes.includes(currentRoute)) {
            encounterable = true
        }
    }

    setPokemon(pokemonElement, randomPokemon.name, randomPokemon.color, randomPokemon.shinyColor, 1, 100)
    
    currentPokemon = randomPokemon
}

loadRandomPokemon()

function catchPokemon() {
    pk = currentPokemon
    pk.shiny = currentShiny
    collection.push(pk)

    window.localStorage.setItem('collection', JSON.stringify(collection))

    console.log(collection)

    loadRandomPokemon()
}