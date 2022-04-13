import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";



export class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ){}

    getAllPokemons = async(req: Request, res: Response) => {
        try {
            const allPokemons = await this.pokemonBusiness.getAllPokemons()
            res.status(200).send({allPokemons})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
        
    }

    getPokemonByname = async(req: Request, res: Response) => {
        const name = req.params.name
        try {
            const pokemon = await this.pokemonBusiness.getPokemonByName(name)
            res.status(200).send({pokemon})
        } catch (error: any) {
            res.status(400).send({message: error.message})            
        }
    }

    getPokemonById = async(req: Request, res: Response) => {
        const id = req.params.id
        try {
            const pokemon = await this.pokemonBusiness.getPokemonById(id)
            res.status(200).send({pokemon})
        } catch (error: any) {
            res.status(400).send({message: error.message})            
        }
    }
}