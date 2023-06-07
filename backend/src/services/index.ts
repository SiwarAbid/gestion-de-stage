import pool from "Database/index"


export async function getUsers() {
    const result = await pool.query(``, (error, response)=> {
        if(error) {
            return {error: true, message: error.message}
        }
        return {error: false, response: response}
    })
    return result
}