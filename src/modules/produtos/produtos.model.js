import knex from "../../services/knex.js"

const table = 'produtos'

export const getAll = () => {
    return knex()
    .select('*')
    .from(table)
}

export const get = (produtoId) => {
    return knex()
    .from(table)
    .where( {id:produtoId} )
    .select('*')
    .first() 
}

export const getByName = (nomeProduto) => {
    return knex()
    .from(table)
    .where( {nome:nomeProduto} )
    .select('*')
    .first() 
}

export const save = (produto) => {
    return knex().from(table).insert(produto);
}

export const remove = (produtoId) => {
    return knex().from(table).where({id:produtoId}).delete()
}

export const update = (produtoId,params) => {
    return knex().from(table).where({id:produtoId}).update(params)
}

