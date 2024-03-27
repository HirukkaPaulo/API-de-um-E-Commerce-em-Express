import express from 'express'
import estoqueRouter from './modules/estoque/estoque.router.js'
import produtosRouter from './modules/produtos/produtos.router.js'
import clientesRouter from './modules/clientes/clientes.router.js'
import pedidosRouter from './modules/pedidos/pedidos.router.js'
import vendasRouter from './modules/vendas/vendas.router.js'

const app = express();

app.use(express.json())

app.use('/estoque',estoqueRouter)
app.use('/produtos',produtosRouter)
app.use('/clientes',clientesRouter)
app.use('/pedidos',pedidosRouter)
app.use('/vendas',vendasRouter)

app.listen(8080, (_,res) => {
    console.log('Servidor funcionando')
})
