const Hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb/mongodb')
const HeroiSchema = require('./db/strategies/mongodb/schemas/heroisSchema')
const HeroRoutes = require('./routes/heroRoutes')

const app = Hapi.Server({
  port: 4000
})

function mapRoutes() {
  return methods.map(method => instance[method]())

}

async function main() {
  const connection = MongoDb.connect()
  const context = new Context(new MongoDb(connection, HeroiSchema))
  
  app.route([
      ...mapRoutes(new HeroRoute(context), HeroRoute.methods())     

  ])

  await app.start()
  console.log('Servidor rodando na porta', app.info.port)

}

return app

module.exports = main()