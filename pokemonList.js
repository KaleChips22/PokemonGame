const pokemon = [
    p('Brachisprout', 'green', 'pink', true, ['test', 'starter-a'], true),
    p('Bracholi', 'green', 'pink', true, ['test'], true),
    p('Brachioforest', 'green', 'pink', false, ['test'], true),
    p('Boash', 'red', 'darkgray', true, ['test', 'starter-b'], true),
    p('Vipyre', 'red', 'darkgray', true, ['test'], true),
    p('Pyraconda', 'red', 'darkgray', false, ['test'], true),
    p('Swark', 'lightblue', 'purple', true, ['test', 'starter-c'], true),
    p('Finnife', 'lightblue', 'purple', true, ['test'], true),
    p('Sharkut', 'lightblue', 'purple', false, ['test'], true),
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