const pokemon = [
    p('Bulbasaur', 'green', 'yellowgreen', true, ['test', 'starter-a'], false),
    p('Ivysaur', 'green', 'yellowgreen', true, ['test', ], false),
    p('Venusaur', 'green', 'yellowgreen', false, ['test', ], false),
    p('Charmander', 'orange', 'yellow', true, ['test', 'starter-b'], false),
    p('Charmeleon', 'orange', 'yellow', true, ['test', ], false),
    p('Charizard', 'orange', 'darkgrey', false, ['test', ], false),
    p('Squirtle', 'blue', 'lightblue', true, ['test', 'starter-c'], false),
    p('Wartortle', 'blue', 'lightblue', true, ['test', ], false),
    p('Blastoise', 'blue', 'purple', false, ['test', ], false),
    p('Caterpie', 'green', 'yellow', true, ['test', 1, 2], false),
    p('Metapod', 'green', 'orange', true, ['test', 2], false),
    p('Butterfree', 'purple', 'purple', false, ['test', 5], false),
    p('Weedle', 'tan', 'yellow', true, ['test', 1, 3], false),
    p('Kakuna', 'yellow', 'green', true, ['test', 2, 3], false),
    p('Beedrill', 'yellow', 'green', false, ['test', 5], false),
    p('Pidgey', 'tan', 'yellowgreen', true, ['test', 1, 2, 3], false),
    p('Pidgeotto', 'tan', 'yellowgreen', true, ['test', 2, 4], false),
    p('Pidgeot', 'tan', 'yellowgreen', false, ['test', 5], false),
    p('Rattata', 'purple', 'yellowgreen', true, ['test', 1, 2], false),
    p('Raticate', 'tan', 'orange', false, ['test', 4, 5], false),
]

function p(name, color, shinyColor, canEvolve, routes, fakemon) {
    return {
        name,
        color,
        shinyColor,
        canEvolve,
        routes,
        fakemon
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