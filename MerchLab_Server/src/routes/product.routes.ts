import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router();

// Create Product
router.post("/", ProductController.createProduct);

// Get All Products
router.get("/", ProductController.getAllProducts);

// Get Single Product
router.get("/:id", ProductController.getSingleProduct);

// Delete Product
router.delete("/:id", ProductController.deleteProduct);

export default router;