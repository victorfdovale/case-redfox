import { Pokemon } from "../entities/Pokemon";
import BaseDatabase from "./BaseDataBase";


export class PokemonDataBase extends BaseDatabase {

    getAllPokemon = async() => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM Pokemon;
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getByName = async(name: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM Pokemon WHERE name = "${name}";
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getById = async(id: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM Pokemon WHERE id = "${id}";
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

}