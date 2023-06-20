// import { error } from "console";
import { RequestHandler, Response } from "express";
import {
    get_all_user,
    add_user,
    delete_user,
    update_status_user,
    get_user_by_id,
    get_satgiaire,
    get_satgiaire_demande,
} from "../services/user-index";

export const indexController: RequestHandler = (_, response: Response) => {
    response.send("");
};
export async function addUser(request: any, response: Response) {
    try {
        const data = request.body;
        await add_user(data);
        return response.status(200).json({ result: "SUCCESS" });
    } catch (error) {
        console.error("Failed to add user:", error);
        return response.status(500).json({ error: "Failed to add user" });
    }
}

export async function getAllUser(_: any, response: Response) {
    try {
        const res = await get_all_user();
        return response.status(200).json({ result: res });
    } catch (error) {
        console.error("Failed to get all user:", error);
        return response.status(500).json({ error: "Failed to get all user" });
    }
}

export async function getStagiaire(_: any, response: Response) {
    try {
        const res = await get_satgiaire();
        return response.status(200).json({ result: res.rows });
    } catch (error) {
        console.error("Failed to get stagiaire:", error);
        return response.status(500).json({ error: "Failed to get stagiaire" });
    }
}

export async function getStagiaireDemandee(_: any, response: Response) {
    try {
        const res = await get_satgiaire_demande();
        return response.status(200).json({ result: res.rows });
    } catch (error) {
        console.error("Failed to get stagiaire demandée:", error.message);
        return response
            .status(500)
            .json({ error: "Failed to get stagiaire demandée" });
    }
}

export async function deleteUser(request: any, response: Response) {
    try {
        const data = request.query.id;

        delete_user(data);
        return response.status(200).json({ result: "DELETED" });
    } catch (error) {
        console.error("Failed to delete user:", error);
        return response.status(500).json({ error: "Failed to delete user" });
    }
}

export async function updateUserStatus(request: any, response: Response) {
    try {
        const id = request.query.id;
        const status = request.query.status;

        update_status_user(id, status);
        return response.status(200).json({ result: "UPDATED" });
    } catch (error) {
        console.error("Failed to update user status:", error);
        return response
            .status(500)
            .json({ error: "Failed to update user status" });
    }
}

export async function getUserById(request: any, response: Response) {
    try {
        const res = await get_user_by_id(request.params.id);
        return response.status(200).json({ result: res.rows });
    } catch (error) {
        console.error("Failed to get user by id:", error);
        return response.status(500).json({ error: "Failed to get user by id" });
    }
}
