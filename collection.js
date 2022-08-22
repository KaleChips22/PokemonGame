const pokemonElement = document.getElementById('pokemon')

let collection = JSON.parse(window.localStorage.getItem('collection')) || []

currentIndex = 0

function setPokemon(index, element) {
    let shinyColor = collection[index].shinyColor,
        color = collection[index].color,
        pokemon = collection[index].name,
        fakemon = collection[index].fakemon

    if (collection[currentIndex].shiny) {
        element.style.setProperty('--bg-color', shinyColor)
        element.children[0].src = fakemon ? `imgs/fakemon/shiny-${pokemon.toLowerCase()}.png` : `https://pokemon.gishan.cc/static/i/pokemon/shiny-${pokemon.toLowerCase()}.png`
        element.children[1].innerText = `${pokemon}*`
    } else {
        element.style.setProperty('--bg-color', color)
        element.children[0].src = fakemon ? `imgs/fakemon/${pokemon.toLowerCase()}.png` : `https://pokemon.gishan.cc/static/i/pokemon/${pokemon.toLowerCase()}.png`
        element.children[1].innerText = pokemon
    }
}

setPokemon(currentIndex, pokemonElement)

function next() {
    currentIndex ++

    if (currentIndex >= collection.length) {
        currentIndex = 0
    }

    setPokemon(currentIndex, pokemonElement)
}

function prev() {
    currentIndex --

    if (currentIndex < 0) {
        currentIndex = collection.length - 1
    }

    setPokemon(currentIndex, pokemonElement)
}

function transfer() {
    if (!confirm('Are you sure you want to transfer this pokemon to the professor?\n(This action cannot be undone)')) return

    collection.splice(currentIndex, 1)
    window.localStorage.setItem('collection', JSON.stringify(collection))

    setPokemon(currentIndex, pokemonElement)
}

function evolve() {
    let mainListIndex,
        currentPokemon = pokemon[currentIndex]
    
    if (!currentPokemon.canEvolve) return alert('Sorry, this pokemon cannot be evolved.')

    pokemon.forEach((item, index) => {
        if (item.name == collection[currentIndex].name) {
            mainListIndex = index
        }
    })
    
    if (!confirm(`Are you sure you want to evolve ${currentPokemon.name} into ${pokemon[mainListIndex + 1].name}?\n(This action cannot be undone)`)) return
    
    currentPokemon = pokemon[mainListIndex + 1]
    currentPokemon.shiny = collection[currentIndex].shiny

    collection[currentIndex] = currentPokemon

    window.localStorage.setItem('collection', JSON.stringify(collection))

    setPokemon(currentIndex, pokemonElement)
}