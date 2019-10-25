// npm install sequelize
// npm install pg-hstore pg

const Sequelize = require('sequelize')
const driver = new Sequelize(
  'heroes',
  'jpablo',
  'bazinga', {
    host: 'localhost',
    dialect:'postgres',
    quoteIdentifies: false,
    operatorsAliases:false
  }
)

async function main() {
  const Herois = driver.define('herois', {
    id:{
      type: Sequelize.INTEGER,
      required: true,
      primaryKey:true,
      autoIncrement: true
    },
    nome: {
      type:Sequelize.STRING,
      required: true
    },
    poder: {
      type: Sequelize.STRING,
      required: true
    }
  }, {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false
  })

  await Herois.sync()
  await Herois.create({
    nome:'Lanterne Verde',
    poder:'Energia'
  })

  const result = await Herois.findAll({
    raw: true,
    attributes:['nome']
  })
  console.log('result', result)
}
main()