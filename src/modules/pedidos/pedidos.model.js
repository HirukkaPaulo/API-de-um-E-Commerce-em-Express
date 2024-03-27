import knex from "../../services/knex.js"

const table = 'pedidos'

export const getAll = () => {
    return knex()
    .select('*')
    .from(table)
}

export const get = (pedidoId) => {
    return knex()
    .from(table)
    .where( {id:pedidoId} )
    .select('*')
    .first() 
}

export const save = (pedido) => {
    return knex().from(table).insert(pedido);
}

export const remove = (pedidoId) => {
    return knex().from(table).where({id:pedidoId}).delete()
}

export const update = (pedidoId,params) => {
    return knex().from(table).where({id:pedidoId}).update(params)
}
