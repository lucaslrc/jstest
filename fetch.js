const fetch = require('node-fetch')

const Url = 'https://www.google.com.br'

fetch(Url, {
  method: 'GET'
})
.then(response => console.log(response))
