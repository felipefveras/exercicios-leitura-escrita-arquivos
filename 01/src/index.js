const express = require('express')
const { getStateFromZipcode } = require('utils-playground')
const produtos = require('./bancodedados/produtos')

const app = express()

app.get('/produtos/:idProduto/frete/:cep', async function (req, res) {
    try {
        const estado = await getStateFromZipcode(req.params.cep)

        if (!estado) {
            return res.status(404).json(`estado não encontrado`)
        }

        const produto = produtos.find(function (identificador) {
            return identificador.id === Number(req.params.idProduto)
        })

        if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
            return res.status(200).json({ produto: produto, estado: estado, frete: produto.valor * 0.1 })
        }
        if (estado === 'RJ' || estado === 'SP') {
            return res.status(200).json({ produto: produto, estado: estado, frete: produto.valor * 0.15 })
        }

    } catch (error) {
        return res.json(`erro no servidor: ${erro.message}`)
    }


})

app.listen(3000)