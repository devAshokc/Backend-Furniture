import { client } from "../index.js";

export async function editProductById(id, data) {
    return await client
        .db("hirefurn")
        .collection("products")
        .updateOne({ id: id }, { $set: data });
}
export async function deleteProductById(id) {
    return await client
        .db("hirefurn")
        .collection("products")
        .deleteOne({ id: id });
}
export async function addProduct(data) {
    return await client
        .db("hirefurn")
        .collection("products")
        .insertMany(data);
}
export async function getProductById(id) {
    return await client
        .db("hirefurn")
        .collection("products")
        .findOne({ id: id });
}
export async function getAllProducts(request) {
    return await client
        .db("hirefurn")
        .collection("products")
        .find(request.query)
        .toArray();
}
