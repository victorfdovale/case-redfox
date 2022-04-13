import app from './app'
import { PokemonBusiness } from './business/PokemonBusiness'
import { PokemonController } from './controller/PokemonController'
import { PokemonDataBase } from './data/PokemonDataBase'

const pokemonController = new PokemonController(
    new PokemonBusiness(new PokemonDataBase()),   
)

app.get('/pokemons', pokemonController.getAllPokemons)
app.get('/pokemon/name/:name', pokemonController.getPokemonByname)
app.get('/pokemon/id/:id', pokemonController.getPokemonById)