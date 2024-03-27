import knex from "../../services/knex.js"

const table = 'vendas'

export const getAll = () => {
    return knex().select('*').from(table)
}

export const get = (vendaId) => {
    return knex()
    .from(table)
    .where( {id:vendaId} )
    .select('*')
    .first() 
}

export const save = (venda) => {
    return knex().from(table).insert(venda);
}

export const remove = (vendaId) => {
    return knex().from(table).where({id:vendaId}).delete()
}

export const update = (vendaId,params) => {
    return knex().from(table).where({id:vendaId}).update(params)
}
