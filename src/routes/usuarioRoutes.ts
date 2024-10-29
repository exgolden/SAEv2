import { Router } from "express"
import { buscar, eliminar, recarga, registro } from "../controllers/usuarioController"

const router = Router()
// Registrar un usuario
router.post("/registro", registro)
// Cargar saldo
router.put("/recarga", recarga)
// Buscar usuario
router.get("/buscar", buscar)
// Eliminar un usuario
router.put("/eliminar/:tarjeta", eliminar)

export default router