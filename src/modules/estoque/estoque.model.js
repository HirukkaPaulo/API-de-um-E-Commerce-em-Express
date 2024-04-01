import knex from "../../services/knex.js"

const table = 'estoque'

export const getAll = () => {
    return knex()
    .select('*')
    .from(table)
}

export const get = (productId) => {
    return knex()
    .from(table)
    .where( {id:productId} )
    .select('*')
    .first() 
}

export const getByName = (produto) => {
    return knex()
    .from(table)
    .where( {produto:produto} )
    .select('*')
    .first() 
}
export const save = (product) => {
    return knex().from(table).insert(product);
}

export const remove = (productId) => {
    return knex().from(table).where({id:productId}).delete()
}

export const update = (id,params) => {
    return knex().from(table).where({id:id}).update(params)
}
