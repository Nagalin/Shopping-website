import { Router } from "express";
import Product from "../../database/schema/Product";
const router = Router();

router.get('/search', async (req, res) => {
    try {
        const searchField = req.query.searchField;
        if (!searchField) {
            return res.status(400).json({ error: "Search field is required" });
        }
        // Use a regular expression to perform a case-insensitive search for product names
        const products = await Product.find({ name: { $regex: new RegExp(`^${searchField}`, "i") } });
        const productsName = products.map(product => product.name)
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while searching for products" });
    }
});

export default router;
