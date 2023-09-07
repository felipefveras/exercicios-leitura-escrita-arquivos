const { detalharPokemon } = require('utils-playground')

let detalhesPokemon = async function (req, res) {

    try {
        let pokemons = await detalharPokemon(req.params.id)

        let detalhes = {
            id: pokemons.id,
            name: pokemons.name,
            height: pokemons.height,
            weight: pokemons.weight,
            base_experience: pokemons.base_experience,
            forms: pokemons.forms,
            abilities: pokemons.abilities,
            species: pokemons.species

        }
        return res.json(detalhes)
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }

}

module.exports = detalhesPokemon

