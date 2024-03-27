import knex from "knex";
import knexConnection from "../config/database.js";

let conn;

const knexService = () => {
    if(!conn){
        conn = knex(knexConnection)
    }
    return conn;
};

export default knexService;