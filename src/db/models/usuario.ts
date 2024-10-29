import { Model, DataTypes } from "sequelize"

// Modelo
export interface usuarioModel {
    id?: number
    tarjeta: string
    nombreUsuario: string
    telefono: string
    tipo: "automovil" | "motocicleta" | "bicicleta" | "otro"
    saldo?: number
    marca: string
    modelo: string
    placas?: string
    superUser?: boolean
    status?: boolean
}

// Sequelize model
export class Usuario extends Model<usuarioModel> implements usuarioModel {
    public id!: number
    public tarjeta!: string
    public nombreUsuario!: string
    public telefono!: string
    public tipo!: "automovil" | "motocicleta" | "bicicleta" | "otro"
    public saldo?: number
    public marca!: string
    public modelo!: string
    public placas?: string
    public superUser?: boolean
    public status?: boolean
}

// Modelo tabla usuarios
export const usuarioTabla = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tarjeta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombreUsuario: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM("automovil", "motocicleta", "bicicleta", "otro"),
        allowNull: false
    },
    saldo: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    marca: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    placas: {
        type: DataTypes.STRING(9),
        defaultValue: "0000000"
    },
    superUser: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}