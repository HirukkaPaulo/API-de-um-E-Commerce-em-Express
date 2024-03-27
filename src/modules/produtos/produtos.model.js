import knex from "../../services/knex.js"

const table = 'produtos'

export const getAll = () => {
    return knex()
    .select('*')
    .from(table)
}

export const get = (produtosId) => {
    return knex()
    .from(table)
    .where( {id:produtosId} )
    .select('*')
    .first() 
}

export const save = (produtos) => {
    return knex().from(table).insert(produtos);
}

export const remove = (produtosId) => {
    return knex().from(table).where({id:produtosId}).delete()
}

export const update = (produtosId,params) => {
    return knex().from(table).where({id:produtosId}).update(params)
}

