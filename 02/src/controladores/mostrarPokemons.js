const { listarPokemons, detalharPokemon } = require('utils-playground')

let mostrarPokemon = async function (req, res) {
    try {
        let pokemons = await listarPokemons()

        return res.json(pokemons)
    } catch (error) {
        return res.json({ mensagem: error.message })
    }
}

module.exports = mostrarPokemon