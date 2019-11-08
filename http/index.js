const http = require('http')

http.createServer((request, response) => {
  response.end('Olá Mundo!')
})
.listen(4000, () => console.log('servidor rodando!'))