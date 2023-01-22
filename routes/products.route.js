import express from "express";
import { auth } from "../middleware/auth.js";
import { 
    getAllProducts, 
    getProductById, 
    addProduct, 
    deleteProductById, 
    editProductById 
    } from "../services/products.service.js";


const router = express.Router();

//  get products
router.get("/", async function (request, response) {
    if(request.query.rate) {
        request.query.rate = +request.query.rate
    }
    const products = await getAllProducts(request);
    response.send(products);
});

//  get products by id
router.get("/:id", async function (request, response) {
    const {id} = request.params;
    // console.log(id)
    const product = await getProductById(id)
    // const product = products.find((pd) => pd.id === id);
    product 
        ? response.send(product) 
        : response.status(404).send({msg: "No data found"});
});

// create products - POST
router.post("/", async function (request, response) {
    const data = request.body
    console.log(data)
    const result = await addProduct(data)
    response.send(result)
});

//  delete product by id
router.delete("/:id", async function (request, response) {
    const {id} = request.params;
    const result = await deleteProductById(id)
    
    result .deletedCount>0
        ? response.send({ msg: "Product was deleted successfully" }) 
        : response.status(404).send({msg: "No data found"});
});

// update products - PUT
router.put("/:id", async function (request, response) {
    const {id} = request.params;
    const data = request.body
    console.log(id)
    const result = await editProductById(id, data)
    result 
        ? response.send(result) 
        : response.status(404).send({msg: "No data found"});
});

export default router;