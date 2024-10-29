import app from "./app"
import { connect, sync } from "./db/db"

const PORT = 2100
const main = async() => {
    // Conexion a la base de datos
    await connect()
    // Sincronizacion a la base de datos
    await sync()
    // Inicializacion de la aplicacion
    app.listen(PORT, (error?: any) => {
        if(error){
            console.log(`Error al inicializar la aplicacion: ${error.message}`)
            process.exit(1)
        }
        console.log(`Aplicacion corriendo en puerto ${PORT}`)
    })
}
main()