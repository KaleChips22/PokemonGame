const pokemon = [
    p('Bulbasaur', 'green', 'yellowgreen', true, ['test', 'starter-b'], false),
    p('Ivysaur', 'green', 'yellowgreen', true, ['test', ], false),
    p('Venusaur', 'green', 'yellowgreen', false, ['test', ], false),
    p('Charmander', 'orange', 'yellow', true, ['test', 'starter-c'], false),
    p('Charmeleon', 'orange', 'yellow', true, ['test', ], false),
    p('Charizard', 'orange', 'darkgrey', false, ['test', ], false),
    p('Squirtle', 'blue', 'lightblue', true, ['test', 'starter-s'], false),
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