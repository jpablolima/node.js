const Hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb/mongodb')
const HerioSchema = require('./db/strategies/mongodb/schemas/heroisSchema')

const app = Hapi.Server({
  port: 4000
})

async function main() {
  const connection = MongoDb.connect()
  const context = new Context(new MongoDb(connection, HerioSchema))

  app.route([{
        path: '/herois',
        method: 'GET',
        handler: (request, head) => {
          return context.read()
        }

  }])

  await app.start()
  console.log('Servidor rodando na porta', app.info.port)

}

main()