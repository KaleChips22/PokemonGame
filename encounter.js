const pokemonElement = document.getElementById('pokemon')

let currentPokemon,
    currentShiny

let collection = JSON.parse(window.localStorage.getItem('collection')) || [],
    currentRoute = JSON.parse(window.localStorage.getItem('route')) || 'test'


let currentBattler = collection[0]

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

function setPokemon(element, pokemon, color, shinyColor, fakemon, rolls = 1, odds = 4096) {
    if (rollShiny(rolls, odds)) {
        element.style.setProperty('--bg-color', shinyColor)
        element.children[0].src = fakemon ? `imgs/fakemon/shiny-${pokemon.toLowerCase()}.png` : `https://pokemon.gishan.cc/static/i/pokemon/shiny-${pokemon.toLowerCase()}.png`
        element.children[0].alt = pokemon + '*'
        element.children[1].innerText = `${pokemon}*`
        currentShiny = true
    } else {
        element.style.setProperty('--bg-color', color)
        element.children[0].src = fakemon ? `imgs/fakemon/${pokemon.toLowerCase()}.png` : `https://pokemon.gishan.cc/static/i/pokemon/${pokemon.toLowerCase()}.png`
        element.children[0].alt = pokemon
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

    setPokemon(pokemonElement, randomPokemon.name, randomPokemon.color, randomPokemon.shinyColor, randomPokemon.fakemon, 1, 30)
    
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

function fight(elem) {
    const buttons = elem.parentNode

    console.log(buttons)

    let html = ''
    currentBattler.moves.forEach(move => {
        console.log(move)
        html += `<button onClick='attack(${JSON.stringify(move)})'>${move.name}</button>`
    })

    buttons.innerHTML = html
}

function swap() {
    return
}

function bag() {
    return
}

function run() {
    return
}

function attack(move) {
    let name = move.name,
        dammage = move.dammage,
        type = move.type,
        accuracy = move.accuracy
    
    alert(`${currentBattler.name} used ${name}!`)

    let effective = checkEffective(type, currentPokemon.types)

    switch (effective) {
        default:
            break
        case 0:
            alert('No effect')
            break
        case 0.25:
            alert('Not very effective')
            break
        case .5:
            alert('Not very effective')
            break
        case 2:
            alert('Super effective')
            break
        case 4:
            alert('Super effective')
            break
    }

    dammage *= effective
}