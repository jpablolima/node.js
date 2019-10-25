const ICrud = require('./interfaces/interfaceCrud')
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

class Postgres extends ICrud {
    constructor() {
        super._driver = null
        this._herois = null
        this._connect()
    }
    async isConnected() {
        try {
            await this._connect.authenticate()
            return true
        } catch(error) {
            console.log('Erro de Conexão!')
            return false;
        }
    }

    async defineModel() {
        this._herois= driver.define('herois', {
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
    }

    create(item) {
        console.log('Item salvo no Postgres')
    }
    _connect() {
        this._driver = new Sequelize(
            'heroes',
            'jpablo',
            'bazinga', {
                host: 'localhost',
                dialect:'postgres',
                quoteIdentifies: false,
                operatorsAliases:false
    }
  )

    }
}

module.exports = Postgres