import { Sequelize,  } from "sequelize"
import { Usuario, usuarioTabla } from "./models/usuario"
import * as dotenv from "dotenv"
dotenv.config({ path: './config/.env' })

// Conexion
export const sequelize = new Sequelize(
    process.env.DB as string,
    process.env.DBUSER as string,
    process.env.DBPASSWORD as string,
    {
    host: "localhost",
    dialect: "postgres",
    logging: false
})

// Conexion con la base de datos
export const connect = async() => {
    try {
        await sequelize.authenticate()
        console.log("Conexion exitosa a la base de datos")
    } catch (error) {
        if(error instanceof(Error)){
            console.log(`Fallo en la conexion a la base de datos: ${error.message}`)
        }
        else {
            console.log(`Fallo en la conexion a la base de datos: ${error}`)
        }
        process.exit(1)
    }
}

// Inicializacion de tabla de usuarios
Usuario.init(
    usuarioTabla,
    {
        sequelize,
        tableName: "usuarios",
        timestamps: false
    }
)

// Inicializacion de la tabla de registros


// Sincronizacion a la base de datos
export const sync = async() => {
    try {
        await sequelize.sync()
        console.log("Sincronizacion exitosa a la base de datos")
    } catch (error) {
        if(error instanceof(Error)){
            console.log(`Fallo en la sincronizacion a la base de datos: ${error.message}`)
        }
        else {
            console.log(`Fallo en la sincronizacion a la base de datos: ${error}`)
        }
        process.exit(1)
    }
}

