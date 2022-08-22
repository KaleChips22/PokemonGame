const pokemon = [
    p('Brachisprout', 'green', 'salmon', true, ['test', 'starter-a'], true),
    p('Bracholi', 'green', 'salmon', true, ['test'], true),
    p('Brachioforest', 'green', 'salmon', false, ['test'], true),
    p('Boash', 'red', 'darkgray', true, ['test', 'starter-b'], true),
    p('Vipyre', 'red', 'darkgray', true, ['test'], true),
    p('Pyraconda', 'red', 'darkgray', false, ['test'], true),
    p('Swark', 'lightblue', 'aquamarine', true, ['test', 'starter-c'], true),
    p('Finnife', 'lightblue', 'aquamarine', true, ['test'], true),
    p('Sharkut', 'lightblue', 'aquamarine', false, ['test'], true),
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