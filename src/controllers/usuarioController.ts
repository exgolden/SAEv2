import { Request, Response } from "express"
import { Usuario, usuarioModel } from "../db/models/usuario"

export const registro = async(req: Request<{}, {}, usuarioModel>, res: Response) => {
    try {
        const {tarjeta, nombreUsuario, telefono, tipo, marca, modelo, placas} = req.body
        const nuevoUsuario = await Usuario.create({
            tarjeta,
            nombreUsuario,
            telefono,
            tipo,
            marca,
            modelo,
            placas: placas || undefined
        })
        res.status(201).json(nuevoUsuario)
        console.log(`Usuario creado con exito: ${JSON.stringify(nuevoUsuario)}`)
    } catch (error) {
        if(error instanceof(Error)){
            console.log(`Error al crear el usuario: ${error.message}`)
            res.status(500).json({ mensaje: "Error al crear usuario", error: `${error.message}` })
        }
        console.log("Error inesperado al crear usuario:", error);
    }
}

// Recarga
// https://es.stackoverflow.com/questions/626169/aplicaciÓn-hecha-con-express-no-funciona-si-intento-retornar-una-respuesta
export const recarga = async(req: Request<{}, {}, Pick<usuarioModel, "tarjeta" | "saldo">>, res: Response) => {
    try {
        const { tarjeta, saldo = 0 } = req.body
        const fetchedUser = await Usuario.findOne({ where: { tarjeta }})
        if(!fetchedUser){
            res.status(404).json({mensaje: `Usuario no encontrado: ${tarjeta}`})
            console.log(`Usuario ${tarjeta} no encontrado`)
            return
        }
        if(saldo <= 0){
            res.status(400).json({mensaje: "Ingrese un saldo positivo"})
            console.log(`Saldo ingresado incorrectmente: ${saldo}`)
            return
        }
        fetchedUser.saldo = fetchedUser.saldo ?? 0
        fetchedUser.saldo += saldo
        await fetchedUser.save()
        res.status(200).json(fetchedUser)
        console.log(`Recarga aplicada con exito: ${JSON.stringify(fetchedUser.nombreUsuario)}: ${JSON.stringify(fetchedUser.saldo)}`)
    } catch (error) {
        res.status(500).json({mensaje: "Error al realizar la recarga"})
    }
}

// Buscar usuario
// Solo debo de usar un unico identificador
// Realizar pruebas
export const buscar = async(req: Request<{}, {}, {}, { tarjeta?: string, telefono?: string }>, res: Response) => {
    try {
        const { tarjeta, telefono } = req.query
        if(!tarjeta && !telefono){
            res.status(400).json({mensaje: "Debe proporcionar un identificador valido: tarjeta o telefono"})
            console.log("Debe proporcionar un identificador valido: tarjeta o telefono")
            return
        }
        const fetchedUser = await Usuario.findAll({
            where: tarjeta? { tarjeta }: { telefono }
        })
        if(fetchedUser.length === 0){
            let identifier = tarjeta? `tarjeta: ${tarjeta}`: `telefono: ${telefono}`
            res.status(404).json({mensaje: `Usuario no encontrado: ${identifier}`})
            console.log(`Usuario ${identifier} no encontrado`)
            return
        }
        res.status(200).json(fetchedUser)
        console.log(`Usuario encontrado: ${fetchedUser[0].tarjeta}`)
    } catch (error) {
        res.status(500).json({mensaje: "Error al buscar el usuario"})
    }
}

// Buscar todos los usuarios
export const buscarTodos = async(_req: Request, res: Response) => {
    try {
        const fetchedUsers = await Usuario.findAll()
        if(fetchedUsers.length === 0 ){
            res.status(404).json({mensaje: "No hay usuarios para mostrar"})
            console.log("No hay usuarios para mostrar")
            return
        }
        res.status(200).json(fetchedUsers)
    } catch (error) {
        res.status(500).json({mensaje: "Error al mostrar usuarios"})
    }
}

// Borrar usuario
//  Esta funcion debe de pedir una confirmacion antes de proceder
export const eliminar = async(req: Request<Pick<usuarioModel, "tarjeta">, {}, {}>, res: Response) => {
    try {
        const { tarjeta } = req.params
        const fetchedUser = await Usuario.findOne({ where: { tarjeta }})
        if(!fetchedUser){
            res.status(404).json({mensaje: `Usuario no encontrado: ${tarjeta}`})
            console.log(`Usuario ${tarjeta} no encontrado`)
            return
        }
        fetchedUser.status = false
        await fetchedUser.save()
        res.status(200).json({mensaje: `Usuario eliminado con exito: ${tarjeta}`})
        console.log(`Usuario ${tarjeta} eliminado con exito`)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar usuario" })
    }
}