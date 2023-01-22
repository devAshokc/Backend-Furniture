import { client } from "../index.js";

export async function addUser(data) {
    return await client
        .db("hirefurn")
        .collection("users")
        .insertOne(data);
}


export async function getUserByName(email) {
    return await client
        .db("hirefurn")
        .collection("users")
        .findOne({email: email});
}