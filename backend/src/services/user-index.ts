import pool from "../Database/index"; // Importez le module de connexion à la base de données

export const get_all_user = async () => {
    try {
        const result = await pool.query("SELECT * FROM users");
        // console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error(error);
    }
};

export const get_user = async (id: number) => {
    try {
        const result = await pool.query(`SELECT * FROM users WHERE id=${id}`);
        //console.log(result.rows);
        return result;
    } catch (error) {
        console.error(error);
    }
};

type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    userphone: number;
    role: "satagiaire" | "admin" | "encadreur";
    status: "refusé" | "accepté" | "en cours de stage" | "archivé" | null;
    isAdmin: Boolean;
};

export const add_user = async (user: User) => {
    try {
        const sql = `INSERT INTO users(id, username, email, password, userphone, role, status, isadmin)
        VALUES (${user.id}, ${user.username}, ${user.email} , ${user.password} , ${user.userphone} , ${user.role} , ${user.status} , ${user.isAdmin});`;
        // console.log("user log:", user);
        // console.log("sql log:", sql);
        const result = await pool.query(
            sql
            //     (error, response) => {
            //     console.log("error query: ", error.message);
            //     return response;
            // }
        );

        return result;
    } catch (error) {
        console.error(error);
    }
};

export const delete_user = async (id: number) => {
    try {
        const result = await pool.query(`DELETE FROM users WHERE id=${id}`);
        console.log(result.rows);

        return "success";
    } catch (error) {
        console.error(error);
    }
}; //

export const update_user = async (id: number, user: User) => {
    try {
        const result = await pool.query(
            //
            `UPDATE users SET username = ${user.username} , email = ${user.email},password = ${user.password}, userphone = ${user.userphone},role = ${user.role}, status = ${user.status}, isadmin = ${user.isAdmin} WHERE id = ${id}`
        );
        console.log(result.rows);

        return "success";
    } catch (error) {
        console.error(error);
    }
};
