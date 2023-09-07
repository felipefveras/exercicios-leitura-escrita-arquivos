const express = require('express')
const rotas = express()
const app = require('./servidor')
const { listarPokemons, detalharPokemon } = require('utils-playground')
const mostrarPokemon = require('../controladores/mostrarPokemons')
const detalhesPokemon = require('../controladores/detalhesPokemons')

rotas.get('/pokemon', mostrarPokemon)
rotas.get('/pokemon/:id', detalhesPokemon)


module.exports = rotas