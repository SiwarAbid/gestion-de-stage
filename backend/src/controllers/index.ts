//import { error } from "console";
import { RequestHandler, Response } from "express";
import {
    get_all_user,
    add_user,
    delete_user,
    update_user,
    get_user,
} from "../services/user-index";

export const indexController: RequestHandler = (_, response: Response) => {
    return response.status(200).json({ error: false, response: "hello" });
};

export async function add(request, response: Response) {
    const data = request.body;

    add_user(data);
    return response.status(200).json({ result: "SUCCESS" });
}

export async function getAllUser(_, response: Response) {
    const res = await get_all_user();
    console.log("res: ", res);
    return response.status(200).json({ result: res });
}

export async function deleteUser(request, response: Response) {
    const data = request.query.id;

    delete_user(data);
    return response.status(200).json({ result: "DELETED" });
}

export async function updateUser(request, response: Response) {
    const data = request.body;
    const id = request.query.id;

    update_user(id, data);
    return response.status(200).json({ result: "UPDATED" });
}

export async function getUser(request, response: Response) {
    const res = await get_user(request.params.id);
    //console.log("res: ", res);
    return response.status(200).json({ result: res.rows });
}
