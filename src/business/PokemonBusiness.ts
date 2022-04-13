import { PokemonDataBase } from "../data/PokemonDataBase";


export class PokemonBusiness {
    constructor(
        private pokemonDataBase: PokemonDataBase
    ){}

    getAllPokemons = async() => {
        try {
            const result = await this.pokemonDataBase.getAllPokemon()
            return result
        } catch (error) {
            throw new Error ('Não foi possível retornar pokemons')
        }
    }

    getPokemonByName = async (name: string) => {
        try {
            if (!name){
            throw new Error ('Campo "Nome" está em branco')
        }
        const pokemon = await this.pokemonDataBase.getByName(name)
        return pokemon

        } catch (error) {
            throw new Error('Não foi possível retornar pokemon')
        }
       
    }

    getPokemonById = async (id: string) => {
        try {
            if(!id){
            throw new Error ("Digite o Id")
        }
        const pokemon = await this.pokemonDataBase.getById(id)
        return pokemon
        } catch (error) {
            throw new Error('Não foi possível retornar pokemon')
        }

    }
}