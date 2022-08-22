var collection = JSON.parse(window.localStorage.getItem('collection')) || []
var route = JSON.parse(window.localStorage.getItem('route')) || 'home'

document.getElementById('route').innerText = `Route: ${route}`