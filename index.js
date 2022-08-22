var collection = JSON.parse(window.localStorage.getItem('collection')) || []
var route = JSON.parse(window.localStorage.getItem('route')) || 'test'

document.getElementById('route').innerText = `Route: ${route}`