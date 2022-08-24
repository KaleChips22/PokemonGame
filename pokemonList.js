const pokemon = [
    p('Brachisprout', 'green', 'pink', true, ['test', 'starter-a'], true, ['grass']),
    p('Bracholi', 'green', 'pink', true, ['test'], true, ['grass']),
    p('Brachioforest', 'green', 'pink', false, ['test'], true, ['grass']),
    p('Boash', 'red', 'darkgray', true, ['test', 'starter-b'], true, ['fire']),
    p('Vipyre', 'red', 'darkgray', true, ['test'], true, ['fire']),
    p('Pyraconda', 'red', 'darkgray', false, ['test'], true, ['fire', 'poison']),
    p('Swark', 'lightblue', 'purple', true, ['test', 'starter-c'], true, ['water', 'steel']),
    p('Finnife', 'lightblue', 'purple', true, ['test'], true, ['water', 'steel']),
    p('Sharkut', 'lightblue', 'purple', false, ['test'], true, ['water', 'steel']),
]

function p(name, color, shinyColor, canEvolve, routes, fakemon, types) {
    return {
        name,
        color,
        shinyColor,
        canEvolve,
        routes,
        fakemon,
        types
    }
}

function checkEffective(typeA, types) {
    var effective = 1

    types.forEach(typeB => {
        if (typeA == 'normal') {
            if (typeB == 'rock') effective *= .5
            if (typeB == 'ghost') effective *= 0
            if (typeB == 'steel') effective *= .5
        } else if (typeA == 'fire') {
            if (typeB == 'fire') effective *= .5
            if (typeB == 'water') effective *= .5
            if (typeB == 'grass') effective *= 2
            if (typeB == 'ice') effective *= 2
            if (typeB == 'bug') effective *= 2
            if (typeB == 'rock') effective *= .5
            if (typeB == 'dragon') effective *= .5
            if (typeB == 'steel') effective *= 2
        }  else if (typeA == 'water') {
            if (typeB == 'fire') effective *= 2
            if (typeB == 'water') effective *= .5
            if (typeB == 'grass') effective *= .5
            if (typeB == 'ground') effective *= 2
            if (typeB == 'rock') effective *= 2
            if (typeB == 'dragon') effective *= .5
        } else if (typeA == 'electric') {
            if (typeB == 'water') effective *= 2
            if (typeB == 'electric') effective *= .5
            if (typeB == 'grass') effective *= .5
            if (typeB == 'ground') effective *= 0
            if (typeB == 'flying') effective *= 2
            if (typeB == 'dragon') effective *= .5
        } else if (typeA == 'grass') {
            if (typeB == 'fire') effective *= .5
            if (typeB == 'water') effective *= 2
            if (typeB == 'grass') effective *= .5
            if (typeB == 'poison') effective *= .5
            if (typeB == 'ground') effective *= 2
            if (typeB == 'flying') effective *= .5
            if (typeB == 'bug') effective *= .5
            if (typeB == 'rock') effective *= 2
            if (typeB == 'dragon') effective *= .5
            if (typeB == 'steel') effective *= .5
        }
    })
}