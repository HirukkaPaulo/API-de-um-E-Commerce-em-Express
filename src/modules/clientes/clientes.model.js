import knex from "../../services/knex.js"

const table = 'clientes'

export const getAll = () => {
    return knex()
    .select('*')
    .from(table)
}

export const get = (clienteId) => {
    return knex()
    .from(table)
    .where( {id:clienteId} )
    .select('*')
    .first() 
}

export const getByEmail = (clienteEmail) => {
    return knex()
    .from(table)
    .where( {email:clienteEmail} )
    .select('*')
    .first() 
}

export const save = (cliente) => {
    return knex().from(table).insert(cliente);
}

export const remove = (clienteId) => {
    return knex().from(table).where({id:clienteId}).delete()
}

export const update = (clienteId,params) => {
    return knex().from(table).where({id:clienteId}).update(params)
}