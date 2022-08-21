const pokemon = [
    p('Bulbasaur', 'green', 'yellowgreen', true, ['test', 'starter-b']),
    p('Ivysaur', 'green', 'yellowgreen', true, ['test', ]),
    p('Venusaur', 'green', 'yellowgreen', false, ['test', ]),
    p('Charmander', 'orange', 'yellow', true, ['test', 'starter-c']),
    p('Charmeleon', 'orange', 'yellow', true, ['test', ]),
    p('Charizard', 'orange', 'darkgrey', false, ['test', ]),
    p('Squirtle', 'blue', 'lightblue', true, ['test', 'starter-s']),
    p('Wartortle', 'blue', 'lightblue', true, ['test', ]),
    p('Blastoise', 'blue', 'purple', false, ['test', ]),
    p('Caterpie', 'green', 'yellow', true, ['test', 1, 2]),
    p('Metapod', 'green', 'orange', true, ['test', 2]),
    p('Butterfree', 'purple', 'purple', false, ['test', 5]),
    p('Weedle', 'tan', 'yellow', true, ['test', 1, 3]),
    p('Kakuna', 'yellow', 'green', true, ['test', 2, 3]),
    p('Beedrill', 'yellow', 'green', false, ['test', 5]),
    p('Pidgey', 'tan', 'yellowgreen', true, ['test', 1, 2, 3]),
    p('Pidgeotto', 'tan', 'yellowgreen', true, ['test', 2, 4]),
    p('Pidgeot', 'tan', 'yellowgreen', false, ['test', 5]),
    p('Rattata', 'purple', 'yellowgreen', true, ['test', 1, 2]),
    p('Raticate', 'tan', 'orange', false, ['test', 4, 5]),
]

function p(name, color, shinyColor, canEvolve, routes) {
    return {
        name,
        color,
        shinyColor,
        canEvolve,
        routes
    }
}